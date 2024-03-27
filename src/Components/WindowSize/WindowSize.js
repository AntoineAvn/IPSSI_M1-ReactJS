import React, { useState, useEffect } from "react";

/* Créer un composant WindowSize qui écoute le message de l'événement fenêtre resize et affiche la taille actuelle de la fenêtre. 
Utilisez le useEffect hook pour ajouter et supprimer l'écouteur d'événements lors du montage et du démontage, respectivement.
Cet exercice vous aidera à comprendre comment utiliser le hook useEffect  pour gérer les effets secondaires tels que les 
écouteurs d'événements et l'importance des fonctions de nettoyage.

- Écoutez l’événement fenêtre resize.
- Affiche la taille actuelle de la fenêtre.
- Ajoutez l'écouteur d'événements lors du montage du composant.
- Supprimez l'écouteur d'événements lorsque le composant est démonté. */

const WindowSize = () => {
    // État pour stocker la taille de la fenêtre
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    // Effet pour écouter le redimensionnement de la fenêtre
    useEffect(() => {
      // Fonction pour mettre à jour la taille de la fenêtre
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      // Ajouter l'écouteur d'événements lors du montage
      window.addEventListener('resize', handleResize);
  
      // Fonction de nettoyage pour supprimer l'écouteur lors du démontage
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Le tableau vide indique que l'effet ne dépend d'aucune variable d'état et ne s'exécutera qu'au montage et au démontage
  
    return (
      <div>
        <h1>Window Size</h1>
        <p>Resize the window to see the effect</p>
        <div>
          {/* Afficher la taille actuelle de la fenêtre */}
          <p>Width: {windowSize.width}px</p>
          <p>Height: {windowSize.height}px</p>
        </div>
      </div>
    );
  };
  
  export default WindowSize;
