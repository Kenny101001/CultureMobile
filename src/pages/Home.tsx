import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import '../../public/HomePage.css';
import axios from 'axios';
import { useHistory } from 'react-router';

const Home = () => {
  const [formData, setFormData] = useState({
    desc: '',
    geolocalisation: '',
    idUser: localStorage.getItem('userData') || '',
    photo: null,
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddPhoto = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, photo: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData2 = new FormData();
      formData2.append('desc', formData.desc);
      formData2.append('geolocalisation', formData.geolocalisation);
      formData2.append('idUser', formData.idUser);
      formData2.append('photo', formData.photo);

      const response = await axios.post('https://culturebackoffice-production.up.railway.app/terrains/demandeterrain', formData2);

      console.log('Réponse du serveur:', response.data);
      redirectToPage1();
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
      // Gérer les erreurs de requête
    }
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
              onChange={handleAddPhoto}
            />
            <button type="button" onClick={handleAddPhoto}>Ajouter image</button>
          </div>

          <button type="submit" className='btn1'>Valider</button>
        </form>
        <button type="button" className='btn2' onClick={redirectToPage2}>Retour</button>
      </div>
    </div>
  );
};

export default Home;
