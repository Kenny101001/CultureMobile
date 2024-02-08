import React, { useState, useEffect } from 'react';
import TerrainList from './TerrainList';
import BurgerMenu from './BurgerMenu';
import axios from 'axios';
import '../../public/TerrainPage.css';
import { useHistory } from 'react-router';

const TerrainPage = () => {
  const [terrains, setTerrains] = useState([]);
  const history = useHistory();

  const redirectToPage2 = () => {
    history.push('/Home');
  };

  useEffect(() => {
    const fetchTerrains = async () => {
      try {
        // Récupérer idUser depuis le localStorage
        const idUser = localStorage.getItem('userData');
    
        if (!idUser) {
          console.error('Aucun utilisateur connecté');
          return;
        }
    
        const response = await axios.get(`https://culturebackoffice-production.up.railway.app/terrains/terrainMobile?idUser=${idUser}`);
        
        // Formater les données
        const formattedTerrains = response.data.map((terrain) => ({
          id: terrain.idTerrain, // Utilisez idTerrain comme id du terrain
          name: `Terrain${terrain.idTerrain}`, // Utilisez la description comme nom du terrain
          backgroundImage: `http://localhost:8080/images/${terrain.photo}`, // Utilisez la photo comme image de fond du terrain
          description: terrain.description, // Utilisez le nom de l'utilisateur comme description
        }));
        setTerrains(formattedTerrains);
      } catch (error) {
        console.error('Erreur lors de la récupération des terrains :', error);
      }
    };
    

    fetchTerrains();
  }, []);

  return (
    <div className="page">
      <BurgerMenu />
      <div className="terrainListe">
        <div className="titre">
          <h1>Liste des Terrains</h1>
          <br></br>
          <div>
            <button onClick={redirectToPage2}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="list">
          <TerrainList terrains={terrains} />
        </div>  
      </div>
    </div>
  );
};

export default TerrainPage;
