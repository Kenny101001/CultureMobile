// HomePage.js (ou tout autre composant où vous utilisez BurgerMenu)
import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import '../../public/Home.css';
import { useHistory } from 'react-router';
const Home = () => {
const history = useHistory();
const [selectedPhotos, setSelectedPhotos] = useState([]);

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    confirmationMotDePasse: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Données soumises :', formData);
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
        <h1>Isérer nouveau <br />terrain</h1>
      </div>

      <form onSubmit={handleSubmit} className='formulaire'>
        <label>
          Parcelle : <br />
          <input type="text" placeholder='nombre de parcelle' name="nom" value={formData.nom} onChange={handleChange} />
        </label>
        <br />
        <label>
          Longueur :<br />
          <input type="text" placeholder='longueur du terrain' name="prenom" value={formData.prenom} onChange={handleChange} />
        </label>
        <br />
        <label>
          Largeur :<br />
          <input type="email" placeholder='largeur du terrain' name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Longitude et latitude :<br />
          {/* <input type="password" placeholder='votre mot de passe' name="motDePasse" value={formData.motDePasse} onChange={handleChange} /> */}
          <button type="submit" className='btn3' onClick={redirectToPage1}>Voir map</button>
        </label>
        <br />
        
        <button type="submit" className='btn1' onClick={redirectToPage1}>Valider</button>
      </form>
      <button type="submit" className='btn2' onClick={redirectToPage2}>Retour</button>
      </div>
    </div>
  );
};

export default Home;
