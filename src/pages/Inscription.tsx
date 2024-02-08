import React, { useState } from 'react';
import '../../public/Inscription.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Inscription : React.FC = () => {
const history = useHistory();
  const [formData, setFormData] = useState({
    nom: '',
    motDePasse: '',
    confirmationMotDePasse: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Données soumises :', formData);
  
    try {
      const response = await axios.post(`https://culturebackoffice-production.up.railway.app/users/user?username=${formData.nom}&password=${formData.motDePasse}`);

      console.log('Réponse du serveur:', response.data);
      // Rediriger vers une autre page après l'inscription réussie
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
    history.push('/Login');
  };

  return (
    <div className='inscription-page'>
        <div className="titre">
            <h2>Inscription</h2>
        </div>
      <form onSubmit={handleSubmit} className='formulaire'>
        <label>
          Nom et Prénom : <br />
          <input type="text" placeholder='votre nom...' name="nom" value={formData.nom} onChange={handleChange} />
        </label>
        
        <br />
        <label>
          Mot de passe :<br />
          <input type="password" placeholder='mot de passe' name="motDePasse" value={formData.motDePasse} onChange={handleChange} />
        </label>
        <br />
        <label>
          Confirmation du mot de passe :<br />
          <input
            type="password"
            placeholder='Confirmation du mot de passe'
            name="confirmationMotDePasse"
            value={formData.confirmationMotDePasse}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className='btn1'>S'inscrire</button>
      </form>
      <button type="submit" className='btn2' onClick={redirectToPage2}>Retour</button>

    </div>
  );
};

export default Inscription;
