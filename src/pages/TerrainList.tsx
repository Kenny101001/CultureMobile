// TerrainComponent.tsx
// TerrainComponent.tsx
import React from 'react';
import '../../public/TerrainList.css';
import { useHistory } from 'react-router';

const TerrainComponent: React.FC<{ terrains: any[] }> = ({ terrains }) => {

    const history = useHistory();
//   const handleDetailsClick = (terrainId: number) => {
//     // Logique pour traiter le clic sur le bouton "Détails"
//     console.log(`Détails du terrain avec l'ID ${terrainId}`);
//   };

  const redirectToPage2 = () => {
    history.push('/TerrainDetails');
  };

  return (
    <div className="terrain-container">
      {terrains.map((terrain, index) => (
        <div key={index} className="terrain-item" onClick={redirectToPage2}>
          <img src={terrain.backgroundImage} alt={`Terrain ${index}`} />
          <div className="terrain-info">
            <h3>{terrain.name}, {terrain.description}</h3>
            <br />
            {/* <button onClick={() => handleDetailsClick(terrain.id)} ><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
            </svg></span></button> */}
            {/*<button onClick={redirectToPage2}><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
            </svg></span></button>*/}
          </div>  
        </div>
      ))}
      
    </div>
  );
};

export default TerrainComponent;

