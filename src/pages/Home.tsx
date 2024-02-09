// HomePage.js (ou tout autre composant où vous utilisez BurgerMenu)
import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import '../../public/HomePage.css';
import axios from 'axios';
import { useHistory } from 'react-router';
const Home = () => {
  const [newPhoto, setNewPhoto] = useState('');
const history = useHistory();
const [selectedPhotos, setSelectedPhotos] = useState([]);
// Récupérer idUser depuis le localStorage
const idUser = localStorage.getItem('userData');
  const [formData, setFormData] = useState({
    desc: '',
    geolocalisation: '',
    idUser: idUser,
    photo: '',

  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleAddPhoto = () => {
    if (newPhoto.trim() !== '') {
      setNewPhoto(formData.photo);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Créer un objet FormData
    const formData2 = new FormData();
    
    // Ajouter les champs du formulaire à l'objet FormData
    formData2.append('desc', formData.desc);
    formData2.append('geolocalisation', formData.geolocalisation);
    formData2.append('idUser', formData.idUser);
    
    // Ajouter l'image sélectionnée à l'objet FormData
    if (selectedPhotos.length > 0) {
      formData2.append('photo', selectedPhotos[0]);
    }
    
    try {
      // Envoyer la requête POST avec Axios
      const response = await axios.post('https://culturebackoffice-production.up.railway.app/terrains/demandeterrain', formData2);
      
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
        
        <div className="controls">
          <br />
          <input
            type="file"
            placeholder="Nouvelle photo URL"
            name='photo'
            value={newPhoto}
            onChange={(e) => setNewPhoto(e.target.value)}
          />
          <button onClick={handleAddPhoto}>Ajouter image</button>
        </div>

        <button type="submit" className='btn1'>Valider</button>
      </form>
      <button type="submit" className='btn2' onClick={redirectToPage2}>Retour</button>
      </div>
    </div>
  );
};

export default Home;
