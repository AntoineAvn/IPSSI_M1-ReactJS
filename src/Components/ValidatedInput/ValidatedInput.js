import React, { useState, useEffect } from "react";

/* Créer un composant ValidatedInput qui valide la saisie de l'utilisateur et affiche un message 
d'erreur si la saisie n'est pas valide. Utilisez le useEffect hook pour effectuer une validation 
chaque fois que la valeur d'entrée change.

Attentes:
- Validez les entrées de l'utilisateur en fonction d'une fonction de validation fournie.
- Afficher un message d'erreur si la saisie n'est pas valide.
- Effectuez une validation chaque fois que la valeur d’entrée change. */

function ValidatedInput () {

    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    
    useEffect(() => {
        if (value.length < 5) {
        setError("La valeur doit contenir au moins 5 caractères");
        } else {
        setError("");
        }
    }, [value]);
    
    return (
        <div>
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        {error && <p>{error}</p>}
        </div>
    );
};

export default ValidatedInput;
