// HomePage.js (ou tout autre composant où vous utilisez BurgerMenu)
import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import { useEffect } from 'react';
import '../../public/Home.css';
import axios from 'axios';
import { useHistory } from 'react-router';

const AjoutCulture = () => {
const history = useHistory();
const [selectedPhotos, setSelectedPhotos] = useState([]);
const [cultures, setCultures] = useState([]); // Stockez les cultures récupérées depuis le service web

useEffect(() => {
    const fetchCultures = async () => {
      try {
        // Récupérer idUser depuis le localStorage
        const idUser = localStorage.getItem('userData');
    
        if (!idUser) {
          console.error('Aucun utilisateur connecté');
          return;
        }
    
        const response = await axios.get(`https://culturebackoffice-production.up.railway.app/categoriecultures/categorieculture`);
        const formattedCultures = response.data.map((culture: { nom: any; }) => culture.nom); // Formatez les cultures pour obtenir une liste de noms de culture
        setCultures(formattedCultures); // Stockez les noms de culture dans l'état local
        // Formater les données
        
      } catch (error) {
        console.error('Erreur lors de la récupération des terrains :', error);
      }
    };
    

    fetchCultures();
  }, []);


  const [formData, setFormData] = useState({
    culture: '',
  });

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
          <select name="longueur" value={formData.culture} onChange={handleChange}>
            {cultures.map((culture, index) => (
                <option key={index}>{culture}</option>
            ))}
          </select>
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
