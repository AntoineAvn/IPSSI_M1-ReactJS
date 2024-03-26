import React from "react";
import "./ColorSwitcher.css";

/* Dans cet exercice, vous êtes chargé de créer un composant simple Color Switcher qui permet aux utilisateurs de modifier la couleur d’arrière-plan d’un div en sélectionnant une couleur dans une liste déroulante.

Attentes:
- Créez une liste déroulante avec quelques options de couleurs (par exemple, rouge, bleu, vert, jaune)
- Lorsqu'une couleur est sélectionnée dans la liste déroulante, la couleur d'arrière-plan du div doit passer à la 
couleur sélectionnée
- Utilisez le useStatehook pour gérer l'état de la couleur d'arrière-plan */

function ColorSwitcher() {
  const colors = ["grey", "blue", "green", "yellow", "red", "purple"];
  const [color, setColor] = React.useState(colors[0]);

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  // Render the color options here
  const colorOptions = colors.map((color, index) => (
    <option key={index} value={color}>
      {color}
    </option>
  ));

  return (
    <div>
      <select onChange={changeColor}>{colorOptions}</select>
      <div id="bg-test" style={{ backgroundColor: color }}>
        {/* Change the background color of this div */}
      </div>
    </div>
  );
}

export default ColorSwitcher;
