import React, { useState } from 'react';
import '../../public/ParcelleCategorie.css'; // Ajoutez votre fichier CSS pour le style

function ParcelleCategorie() {
    const [categories, setCategories] = useState<string[]>([]);
    const [newCategory, setNewCategory] = useState<string>('');
    const [isEditMode, setIsEditMode] = useState(false);
    const [description, setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,");
    const handleAddCategory = () => {
        if (newCategory.trim() !== '') {
            setCategories([...categories, newCategory]);
            setNewCategory('');
        }
    };

    const handleRemoveCategory = (index: number) => {
        const updatedCategories = categories.filter((_, i) => i !== index);
        setCategories(updatedCategories);
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
        <div className="categories-list">
            <h2>Catégories</h2>

            <div className="category-items">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        
                        <span>{category}</span>
                        <button onClick={() => handleRemoveCategory(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg></button>
                    </div>
                ))}
            </div>

            <div className="new-category">
                {/* <label>Nouvelle catégorie</label> <br /> */}
                <input
                    type="text"
                    value={newCategory}
                    placeholder='nouvelle catégorie'
                    onChange={(e) => setNewCategory(e.target.value)} />
                <button onClick={handleAddCategory}>Ajouter</button>
            </div>

            <div className="descriptionparcelle">
                    <div className="titremodif">
                        <h2>Description Parcelle</h2>
                            <button onClick={handleEditDescription}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
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
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <br />
                                <button className='descr' onClick={handleValidateEdit}>Valider</button>
                            </>
                        ) : (
                            <p>{description}</p>
                        )}
                    </div>
            </div>
        </div>
    );
}

export default ParcelleCategorie;
