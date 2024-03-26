import React, { useState } from "react";
import "./InputField.css";

// Créez un composant de champ de saisie qui permet à un utilisateur de saisir du texte et d'afficher le texte en temps réel.
// Chaque fois que l'utilisateur tape quelque chose dans le champ de saisie, le texte doit être mis à jour dans l'élément de texte
// Vous devez utiliser le hook useState pour garder une trace de l'état du texte

function InputField() {
  const [inputField, setInputField] = useState("");

  const handleChange = (e) => {
    setInputField(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputField}
        onChange={handleChange}
        placeholder="Saissisez du texte ici"
      />
      <p><span>Input text :</span> {inputField}</p>
    </div>
  );
}

export default InputField;
