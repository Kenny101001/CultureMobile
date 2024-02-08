// HomePage.js (ou tout autre composant où vous utilisez BurgerMenu)
import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import '../../public/Home.css';
import { useHistory } from 'react-router';
const AjoutCulture = () => {
const history = useHistory();
const [selectedPhotos, setSelectedPhotos] = useState([]);

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
           Culture: <br />  
          <select name="longueur" value={formData.culture} onChange={handleChange}>
            <option>optionn 1</option>
            <option>optionn 2</option>
            <option>optionn 3 </option>
          </select>
        </label>
        <br />
        <button type="submit" className='btn1' onClick={redirectToPage1}>Valider</button>
      </form>
      </div>
    </div>
  );
};

export default AjoutCulture;
