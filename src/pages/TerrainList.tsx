import React from 'react';
import '../../public/TerrainList.css';
import { useHistory } from 'react-router';

const TerrainComponent: React.FC<{ terrains: any[] }> = ({ terrains }) => {
    const history = useHistory();

    const redirectToTerrainDetails = (terrainId: number) => {
        // Redirection vers la page de détails du terrain avec l'ID du terrain
        history.push(`/TerrainDetails/${terrainId}`);
    };

    return (
        <div className="terrain-container">
            {terrains.map((terrain, index) => (
                <div key={index} className="terrain-item" onClick={() => redirectToTerrainDetails(terrain.id)}>
                    <img src={terrain.backgroundImage} alt={`Terrain ${index}`} />
                    <div className="terrain-info">
                        <h3>{terrain.name}, {terrain.description}</h3>
                        <br />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TerrainComponent;
