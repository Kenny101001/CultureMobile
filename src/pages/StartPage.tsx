import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../public/StartPage.css';

const StartPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('StartPage rendered');
      history.push('/HomePage');
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [history]); 

  return (
    <div className="start-page">
      <h1 className="titre">Welcome</h1>
      <p>Venez créeer et construire une culture floraissante</p>
    </div>
  );
};

export default StartPage;
