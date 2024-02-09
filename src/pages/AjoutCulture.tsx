// HomePage.js (ou tout autre composant où vous utilisez BurgerMenu)
import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import { useEffect } from 'react';
import '../../public/Home.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';

const AjoutCulture = () => {
const history = useHistory();
const [selectedPhotos, setSelectedPhotos] = useState([]);
const [cultures, setCultures] = useState([]); // Stockez les cultures récupérées depuis le service web
const [formData, setFormData] = useState({
    culture: '',
    date: '',
  });

// Récupérer les paramètres d'URL, y compris l'ID de la parcelle
const { idParcelle } = useParams<{ idParcelle: string }>();

// Convertir l'ID de la parcelle en nombre si nécessaire
const parcelleId = parseInt(idParcelle);

useEffect(() => {
    const fetchCultures = async () => {
      try {
        // Récupérer idUser depuis le localStorage
        const idUser = localStorage.getItem('userData');
        
        if (formData.culture != null) {
          const response = await axios.get(`https://culturebackoffice-production.up.railway.app/parcelleCulture/insert?dateInsert=${formData.date}&idParcel=${parcelleId}&idCulture=${formData.culture}`);
            // Traitez la réponse ici
          console.log('Réponse du serveur:', response.data);

        } else {
        console.log('La valeur de formData.culture est null. Aucune requête ne sera envoyée.');
        }


        if (!idUser) {
          console.error('Aucun utilisateur connecté');
          return;
        }
    
        const response = await axios.get(`https://culturebackoffice-production.up.railway.app/categoriecultures/categorieculture`);
        // Formatez les cultures pour obtenir une liste de noms de culture
        // Stockez les noms de culture dans l'état local
        // Formater les données

        const formattedCultures = response.data.map((culture) => ({
            id: culture.idCategorieCulture, // Utilisez idTerrain comme id du terrain
            nom: `Culture ${culture.nomCateCult}`, // Utilisez la description comme nom du terrain
            rendement: culture.rendement,
          }));
          setCultures(formattedCultures); 
      } catch (error) {
        console.error('Erreur lors de la récupération des terrains :', error);
      }
    };
    

    fetchCultures();
  }, []);

  

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Données soumises :', formData);
  };


  const redirectToPage2 = () => {
    history.push('/Homepage');
  };

  const redirectToPage1 = () => {
    history.push('/TerrainDetails');
  };
  return (
    
    <div className="page">
      <BurgerMenu />
    <div className="page-container">
      <div className="titre">
        <h1>Isérer nouveau <br />terrain</h1>
      </div>

      <form onSubmit={handleSubmit} className='formulaire'>
        <label>
           Culture: <br />  
          <select name="culture" value={formData.culture} onChange={handleChange}>
            {cultures.map((culture, index) => (
                <option value={culture.id} key={index}>{culture.nom}</option>
            ))}
          </select>
        </label>
        <br />   
        <label>
            Date: <br />  
           <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" className='btn1' onClick={redirectToPage1}>Valider</button>

        <br />
        <button type="submit" className='btn2' onClick={redirectToPage1}>Retour</button>
      </form>
      </div>
    </div>
  );
};

export default AjoutCulture;
