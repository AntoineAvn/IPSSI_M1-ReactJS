import React, { useState } from "react";
import "./ToggleVisibility.css";

// Dans cet exercice, vous devez créer un composant qui bascule la visibilité d'un morceau de texte lorsque vous cliquez sur un bouton. Attentes:
// Initialement, le texte doit être masqué
// Lorsque vous cliquez sur le bouton, le texte doit devenir visible s'il était masqué, et masqué s'il était visible
// Utilisez le useState hook pour gérer l'état de visibilité du texte

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleTextVisibility}>Show/Hide Text</button>
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility;
