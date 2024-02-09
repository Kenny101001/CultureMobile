// HomePage.js (ou tout autre composant où vous utilisez BurgerMenu)
import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import '../../public/HomePage.css';
import axios from 'axios';
import { useHistory } from 'react-router';
const Home = () => {
const history = useHistory();
const [selectedPhotos, setSelectedPhotos] = useState([]);
// Récupérer idUser depuis le localStorage
const idUser = localStorage.getItem('userData');
  const [formData, setFormData] = useState({
    desc: '',
    geolocalisation: '',
    idUser: idUser,

  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Données soumises :', formData);
    
    try {
      const response = await axios.post(`https://culturebackoffice-production.up.railway.app/terrains/demandeterrain?desc=${formData.desc}&geolocalisation=${formData.geolocalisation}&idUser=${formData.idUser}`);

      console.log('Réponse du serveur:', response.data);
      // Rediriger vers une autre page après l'inscription réussie
      redirectToPage1();
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
      // Gérer les erreurs de requête
    }
  };

  const handlePhotoChange = (e: { target: { files: any; }; }) => {
    const files = e.target.files;
    setSelectedPhotos(Array.from(files));
  };

  const redirectToPage2 = () => {
    history.push('/Homepage');
  };

  const redirectToPage1 = () => {
    history.push('/TerrainPage');
  };
  return (
    
    <div className="page">
      <BurgerMenu />
    <div className="page-container">
      <div className="titre">
        <h1>Insérer nouveau <br />terrain</h1>
      </div>

      <form onSubmit={handleSubmit} className='formulaire'>
        <label>
          Description: <br />
          <input type="text" placeholder='description du terrain' name="desc" value={formData.desc} onChange={handleChange} />
        </label>
        
        <br />
        <label>
          Géolocalisation: <br />
          <input type="text" placeholder='geolocalisation du terrain' name="geolocalisation" value={formData.geolocalisation} onChange={handleChange} />
        </label>
        <br />
        
        <button type="submit" className='btn1'>Valider</button>
      </form>
      <button type="submit" className='btn2' onClick={redirectToPage2}>Retour</button>
      </div>
    </div>
  );
};

export default Home;
