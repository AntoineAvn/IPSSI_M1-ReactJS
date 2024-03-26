import React, { useEffect } from "react";
import "./CharacterCounter.css";
// Créez un composant simple de compteur de caractères qui permet aux
// utilisateurs de saisir du texte et affiche le nombre de caractères en temps réel.
// Attentes:
// Créer un élément textarea pour que les utilisateurs puissent saisir du texte
// Afficher le nombre de caractères sous la zone de texte en temps réel
// Utilisez le useState hook pour gérer l'état du texte

function CharacterCounter() {
  const [textArea, setTextArea] = React.useState("");
  // const [pokemon, setPokemon] = React.useState(null);

  useEffect(() => {
    //effet à réaliser
    //exécuter au premier rendu du composant
    console.log(textArea.length);
    // document.title = `Character count: ${textArea}`;

    // let monpokemon = fetch(urlpokemon)
    // setPokemon(monpokemon)

    return () => {
      //nettoyage à réaliser
      //exécuter à chaque démontage du composant
      console.log("Je suis un nettoyage");
    };
  }, [textArea]);

  const handleChange = (e) => {
    // Count characters
    const totalCharacters = e.target.value;
    setTextArea(totalCharacters);
  };

  return (
    <div>
      <textarea onChange={handleChange} placeholder="Saissisez du texte ici" />
      <p>
        <span>Character count:</span> {textArea.length}
      </p>
    </div>
  );
}
export default CharacterCounter;
