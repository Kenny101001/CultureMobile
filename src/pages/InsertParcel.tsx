// HomePage.js (ou tout autre composant où vous utilisez BurgerMenu)
import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import '../../public/InsertParcel.css';
import { useHistory } from 'react-router';

const InsertParcel = () => {
const history = useHistory();
const [selectedPhotos, setSelectedPhotos] = useState([]);

  const [formData, setFormData] = useState({
    nom: '',
    taille: '',
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
        <h1>Isérer nouvelle <br />Parcel</h1>
      </div>

      <form onSubmit={handleSubmit} className='formulaire'>
        <label>
           Nom: <br />
          <input type="text" placeholder='longueur du terrain' name="longueur" value={formData.nom} onChange={handleChange} />
        </label>
        <br />
        <label>
          Taille :<br />
          <input type="text" placeholder='largeur du terrain' name="largeur" value={formData.prenom} onChange={handleChange} />
        </label>
        <br />
        <label>
          Type culture :<br />
          <select className='select'>
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
          </select>
        </label>
        <br />
        
        <button type="submit" className='btn1' onClick={redirectToPage1}>Valider</button>
      </form>
      <button type="submit" className='btn2' onClick={redirectToPage2}>Retour</button>
      </div>
    </div>
  );
};

export default InsertParcel;
