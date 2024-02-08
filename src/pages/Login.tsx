import React, { useState } from 'react';
import '../../public/Login.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Inscription : React.FC = () => {
const history = useHistory();
  const [formData, setFormData] = useState({
   
    nom: '',
    motDePasse: '',
   
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Données soumises :', formData);
  
    try {
            const response = await axios.get(`https://culturebackoffice-production.up.railway.app/users/checkLoginMobile?username=${formData.nom}&password=${formData.motDePasse}`);
            
            console.log('Réponse du serveur:', response.data);
            
            // Vérifier si la valeur retournée est supérieure à 1
            if (response.data > 1) {
                // Stocker la valeur de response.data dans le localStorage
                localStorage.setItem('userData', response.data);
                redirectToPage1();
            } else {
                // Afficher un message d'erreur à l'utilisateur sur la page de connexion
                alert('Identifiants incorrects. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Erreur lors de la requête :', error);
            // Gérer les erreurs de requête
        }
    };



  const redirectToPage1 = () => {
    history.push('/TerrainPage');
  };

  const redirectToPage2 = () => {
    history.push('/Homepage');
  };

  return (
    <div className='login-page'>
        <div className="titre">
            <h2>Login</h2>
        </div>
      <form onSubmit={handleSubmit} className='formulaire'>

        <div className="log">
          <label>
            Nom et Prénom :<br />
            <input type="text" placeholder='votre nom complet' name="nom" value={formData.nom} onChange={handleChange} />
          </label>
          <br />
          <label>
            Mot de passe :<br />
            <input type="password" placeholder='votre mot de passe' name="motDePasse" value={formData.motDePasse} onChange={handleChange} />
          </label>
        </div>
        
        <br />
        <button type="submit" className='btn1'>Se connecter</button>
      </form>
      <button type="submit" className='btn2' onClick={redirectToPage2}>Retour</button>

    </div>
  );
};

export default Inscription;
