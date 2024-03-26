import React from "react";

function CourseItem({ id, nom, quantite, prix }) {

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    const itemStyle = {
        backgroundColor: getRandomColor(),
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        color: "white",
    };

  return (
    <div style={itemStyle}>
      <p>nom : {nom}</p>
      <p>quantité : {quantite}</p>
      <p>prix : {prix}</p>
    </div>
  );
}

export default CourseItem;
