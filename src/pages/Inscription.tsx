import React, { useState } from 'react';
import '../../public/Inscription.css';
import { useHistory } from 'react-router-dom';
const Inscription : React.FC = () => {
const history = useHistory();
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

  const redirectToPage2 = () => {
    history.push('/Homepage');
  };

  const redirectToPage1 = () => {
    history.push('/Home');
  };

  return (
    <div className='inscription-page'>
        <div className="titre">
            <h2>Inscription</h2>
        </div>
      <form onSubmit={handleSubmit} className='formulaire'>
        <label>
          Nom : <br />
          <input type="text" placeholder='votre nom...' name="nom" value={formData.nom} onChange={handleChange} />
        </label>
        <br />
        <label>
          Prénom :<br />
          <input type="text" placeholder='votre Prenom...' name="prenom" value={formData.prenom} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email :<br />
          <input type="email" placeholder='votreEmail@gmailcom' name="email" value={formData.email} onChange={handleChange} />
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
        <button type="submit" className='btn1' onClick={redirectToPage1}>S'inscrire</button>
      </form>
      <button type="submit" className='btn2' onClick={redirectToPage2}>Retour</button>

    </div>
  );
};

export default Inscription;
