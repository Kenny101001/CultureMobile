import React, { useState } from 'react';
import '../../public/Login.css';
import { useHistory } from 'react-router-dom';
const Inscription : React.FC = () => {
const history = useHistory();
  const [formData, setFormData] = useState({
   
    email: '',
    motDePasse: '',
   
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Données soumises :', formData);
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
            Email :<br />
            <input type="email" placeholder='votre email' name="email" value={formData.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Mot de passe :<br />
            <input type="password" placeholder='votre mot de passe' name="motDePasse" value={formData.motDePasse} onChange={handleChange} />
          </label>
        </div>
        
        <br />
        <button type="submit" className='btn1' onClick={redirectToPage1}>Se connecter</button>
      </form>
      <button type="submit" className='btn2' onClick={redirectToPage2}>Retour</button>

    </div>
  );
};

export default Inscription;
