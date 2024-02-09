// HomePage.js (ou tout autre composant où vous utilisez BurgerMenu)
import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import '../../public/InsertParcel.css';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';

const InsertParcel = () => {
const history = useHistory();
const [selectedPhotos, setSelectedPhotos] = useState([]);
const { idTerrain } = useParams();
  const [formData, setFormData] = useState({
    nomp: '',
    taille: '',
    idTerrain: idTerrain,
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Données soumises :', formData);
    
    try {
      const response = await axios.post(`http://localhost:8080/parcelles/insertParcelleCulture?nomParcelle=${formData.nomp}&taille=${formData.taille}&idTerrain=${formData.idTerrain}`);

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
        <h1>Insérer nouvelle <br />Parcel</h1>
      </div>

      <form onSubmit={handleSubmit} className='formulaire'>
        <label>
          Nom: <br />
          <input type="text" placeholder='nom du parcelle' name="nomp" value={formData.nomp} onChange={handleChange} />
        </label>
        <br />
        <label>
          Taille :<br />
          <input type="text" placeholder='taille du terrain' name="taille" value={formData.taille} onChange={handleChange} />
        </label>
        <br />
        {/* <label>
          Type culture :<br />
          <select className='select'>
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
          </select>
        </label> */}
        <br />
        
        <button type="submit" className='btn1'>Valider</button>
      </form>
      <button type="submit" className='btn2' onClick={redirectToPage2}>Retour</button>
      </div>
    </div>
  );
};

export default InsertParcel;
