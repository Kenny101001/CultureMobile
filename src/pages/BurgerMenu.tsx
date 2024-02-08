import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logOutOutline } from 'ionicons/icons';
import '../../public/BurgerMenu.css';
import { LocationDescriptor } from 'history';
import { IonIcon } from '@ionic/react';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleLinkClick = (link: LocationDescriptor<unknown>) => {
    console.log(`Navigating to ${link}`);
    if(link === '/HomePage') {
      // Effacer les données du localStorage avant de se déconnecter
      localStorage.removeItem('userData');
    }
    history.push(link);
    toggleMenu();
  };

  const redirectToPage2 = () => {
    history.push('/TerrainPage');
  };

  return (
    <div className={`burger-menu-container ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo" onClick={redirectToPage2}>Modelize</div>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {menuOpen && (
        <div className="menu">
          <div className="menu-item" onClick={() => handleLinkClick('/HomePage')}>
            <IonIcon icon={logOutOutline} />
            Déconnexion
          </div>
        </div>
      )}

    </div>
  );
};

export default BurgerMenu;
