import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

/* Créer un composant CountdownTimer composant qui affiche un compte à rebours commençant à partir d'une 
valeur initiale donnée et s'arrêtant à 0. Utilisez le useEffect hook pour mettre à jour l’heure affichée toutes les secondes.

Attentes
- Afficher le compte à rebours, à partir de la valeur initiale donnée.
- Mettez à jour la minuterie toutes les secondes en utilisant useEffect.
- Arrêtez le chronomètre lorsqu'il atteint 0.
- Afficher le texte suivant pendant le compte à rebours : "Temps restant : X"
- Démarrez le minuteur lorsque le composant est monté. 
( utilisez setInterval() ) */

const CountdownTimer = () => {
  const [timer, setTimer] = useState(10);

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          // Changez ici pour arrêter à 1, car la réduction se fait après
          clearInterval(interval);
          return 0; // S'assurer que le timer affiche 0
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    return interval; // Retourner l'identifiant de l'intervalle
  };

  const resetTimer = () => {
    setTimer(10); // Réinitialiser la valeur du timer
    clearInterval(window.timerInterval); // Effacer l'ancien intervalle
    window.timerInterval = startTimer(); // Démarrer un nouvel intervalle
  };

  useEffect(() => {
    window.timerInterval = startTimer(); // Stocker l'identifiant de l'intervalle globalement

    return () => {
      clearInterval(window.timerInterval); // Nettoyage
    };
  }, []);

  return (
    <div id="time">
      <h2>Temps restant : {timer}</h2>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default CountdownTimer;
