import React from "react";
import "./SearchFilter.css";

/* Dans cet exercice, vous devez créer un composant de filtre de recherche simple qui permet aux utilisateurs de filtrer une liste d'éléments en fonction de leur entrée de recherche.

Attentes:
- Créez un champ de saisie permettant aux utilisateurs de saisir leur requête de recherche
- Afficher la liste des éléments et les filtrer en fonction de la saisie de recherche de l'utilisateur
- Utilisez le useState hook pour gérer l'état d'entrée de la recherche */

const items = [
  "Apple",
  "Banana",
  "Carrot",
  "Date",
  "Eggplant",
  "Fig",
  "Grape",
  "Honeydew",
  "Iceberg Lettuce",
  "Jackfruit",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Pineapple",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tomato",
  "Ugli Fruit",
  "Vanilla Bean",
  "Watermelon",
  "Xigua",
  "Yellow Squash",
  "Zucchini",
  "Avocado",
  "Blueberry",
  "Cantaloupe",
  "Dragonfruit",
];

function SearchFilter() {
  const [search, setSearch] = React.useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(search.toLowerCase());
  });

  const itemList = filteredItems.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <ul>{itemList}</ul>
    </div>
  );
}

export default SearchFilter;
