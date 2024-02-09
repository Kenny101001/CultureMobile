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

  const AjouterCulture = (parcelleId: number) => {
    history.push(`/AjoutCulture/${parcelleId}`);
  };

  const Recolte = (parcelleId: number) => {
    history.push(`/AjoutRecolte/${parcelleId}`);
  };

  return (
    <div className="parcelle-container">
      {terrains.map((terrain, index) => (
        <div key={index} className="parcelle-item">
          {/* <img src={terrain.backgroundImage} alt={`Terrain ${index}`} /> */}
          <div className="parcelle-info">
            <h3>{terrain.nomParcelle}</h3>
            <h3>Taille : {terrain.tailleParcelle} m2</h3>
            {/* <p className='description-Parcelle'></p> */}

              <button onClick={() => AjouterCulture(terrain.idParcelle)}>
                <span> Ajouter Culture</span>
              </button>

              <button onClick={() => Recolte(terrain.idParcelle)}>
                <span> Recolte</span>
              </button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParcelleComponent;

