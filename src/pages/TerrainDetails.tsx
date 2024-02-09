import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../../public/TerrainDetails.css';
import BurgerMenu from './BurgerMenu';
import TerrainMap from './TerrainMap';
import ParcelleComponent from './ParcelleList';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TerrainDetails = () => {
  const [photos, setPhotos] = useState(['image/champ1.jpg']);
  const [newPhoto, setNewPhoto] = useState('');
  const [isEditMode, setIsEditMode] = useState(false); // Nouvel état pour gérer le mode de modification du paragraphe
  const [description, setDescription] = useState("Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas seulement survécu cinq siècles,");

  const { idTerrain } = useParams(); // Récupérez l'ID du terrain depuis les paramètres d'URL
  const [terrainDetails, setTerrainDetails] = useState([]);
  // console.log("hello");

  useEffect(() => {
    const fetchTerrainDetails = async () => {
      try {

        const idUser = localStorage.getItem('userData');

        const response = await axios.get(`http://localhost:8080/terrains/details?idUser=${idUser}&idTerrain=${idTerrain}`);

        const formattedTerrains = response.data.map((terrain) => ({
          id: terrain.idTerrain, // Utilisez idTerrain comme id du terrain
          description: terrain.description, // Utilisez le nom de l'utilisateur comme description
          geolocalisation : terrain.geolocalisation,
          status : terrain.status,
          idParcelle : terrain.idParcelle,
          nomParcelle : terrain.nomParcelle,
          tailleParcelle : terrain.tailleParcelle,
          idUser: terrain.idUser,
          nomUser: terrain.nomUser,
          backgroundImage: `http://localhost:8080/images/${terrain.photo}`, // Utilisez la photo comme image de fond du terrain

          nom: `Terrain${terrain.idTerrain}`, // Utilisez la description comme nom du terrain

        }));
        setTerrainDetails(formattedTerrains);
        console.log("terrainDetails:", terrainDetails);

      } catch (error) {
        console.error('Erreur lors de la récupération des détails du terrain :', error);
      }
    };

    fetchTerrainDetails();
  }, [idTerrain]); // Assurez-vous d'utiliser idTerrain comme dépendance pour que useEffect se déclenche à chaque changement d'ID

  
  const history = useHistory();

  const redirectToPage2 = () => {
      history.push('/InsertParcel');
    };

  const [style, set] = useSpring(() => ({
    transform: 'translateX(0%)',
  }));

  const handleAddPhoto = () => {
    if (newPhoto.trim() !== '') {
      setPhotos([...photos, newPhoto]);
      setNewPhoto('');
    }
  };

  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  const handleEditDescription = () => {
    setIsEditMode(!isEditMode);
  };

  const handleValidateEdit = () => {
    // Sauvegarder les modifications (par exemple, mettre à jour la valeur de `description`)
    // Vous pouvez également implémenter une logique de sauvegarde côté serveur si nécessaire.
    setIsEditMode(false); // Sortir du mode édition après validation
  };

  return (
    <div className="pagedetail">
      <BurgerMenu />
      <div className="pageDetails">
        <div className="photo-form">
            <div className="description">
                <div className="titre">
                    <div className="titremodif">
                      {/* {terrainDetails.map((terrain, index) => (
                        <h2>{terrain.name}</h2>
                      ))} */}
                      {terrainDetails && terrainDetails.length > 0 ? (
                        <h2>{terrainDetails[0].nom}</h2>
                      ) : (
                        <p>Chargement en cours...</p>
                      )}
                        <button onClick={handleEditDescription}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                        </svg>
                        </button>
                    </div>

                    <div className="textmodif">
                        {isEditMode ? (
                            <>
                                <textarea
                                    rows={5}
                                    cols={40}
                                    value={terrainDetails[0]?.nom}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <br />
                                <button className='descr' onClick={handleValidateEdit}>Valider</button>
                            </>
                        ) : (
                            <p>{terrainDetails[0]?.nom}</p>
                        )}
                    </div>

                    
                    
                    <div className="photo-container">
                      <animated.div style={style} className="photo-list">
                      <img src={terrainDetails[0]?.backgroundImage} /> 

                      </animated.div>
                    </div>

                          
                    <div className="parcelle">
                            
                            <h1>Ajouter une parcelle</h1>
                            <br></br>
                            <div>
                              <button onClick={redirectToPage2}>+</button>
                            </div>
                            <div className="pa">
                                <h2>Vos Parcelles</h2>
                                
                            </div>
                      <ParcelleComponent  terrains={terrainDetails} />
                    </div>

                    <div className="geo">
                        <h2>Géolocalisation</h2>
                        <div className="map">
                            <TerrainMap />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TerrainDetails;
