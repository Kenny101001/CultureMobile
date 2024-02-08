// TerrainComponent.tsx
// TerrainComponent.tsx
import React from 'react';
import '../../public/ParcelleList.css';
import { useHistory } from 'react-router';

const ParcelleComponent: React.FC<{ terrains: any[] }> = ({ terrains }) => {

    const history = useHistory();
//   const handleDetailsClick = (terrainId: number) => {
//     // Logique pour traiter le clic sur le bouton "Détails"
//     console.log(`Détails du terrain avec l'ID ${terrainId}`);
//   };

  const AjouterCulture = () => {
    history.push('/AjoutCulture');
  };

  const Recolte = () => {
    history.push('/AjoutRecolte');
  };

  return (
    <div className="parcelle-container">
      {terrains.map((terrain, index) => (
        <div key={index} className="parcelle-item">
          <img src={terrain.backgroundImage} alt={`Terrain ${index}`} />
          <div className="parcelle-info">
            <h3>{terrain.name}</h3>
            <p className='description-Parcelle'>Description parcelle, Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

              {<button onClick={AjouterCulture}><span> Ajouter Culture</span></button> }

              {<button onClick={Recolte}><span>Recolte</span></button> }
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParcelleComponent;

