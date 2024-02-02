// TerrainComponent.tsx
// TerrainComponent.tsx
import React from 'react';
import '../../public/ParcelleDetails.css';
import { useHistory } from 'react-router';
import ParcelleCategorie from './ParcelleCategorie';
import BurgerMenu from './BurgerMenu';

function ParcelleDetails() {

  const history = useHistory();
  //   const handleDetailsClick = (terrainId: number) => {
  //     // Logique pour traiter le clic sur le bouton "Détails"
  //     console.log(`Détails du terrain avec l'ID ${terrainId}`);
  //   };
  const redirectToPage2 = () => {
    history.push('/ParcelleDetails');
  };

  return (
    <div className="parcelle-details">
      <BurgerMenu />
      <ParcelleCategorie />

      <div className="taille-parcelle">
              <h2>Taille</h2>
              <div className="dim-parcelle">
                  <div className="lo">
                      <h3>Longueur</h3>
                      <p>150m</p>
                  </div>
                  <div className="la">
                      <h3>Largeur</h3>
                      <p>50m</p>

                  </div>
                  </div>
              </div>
          </div>
  );
}

export default ParcelleDetails;

