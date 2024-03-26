import React from "react";
import { useState } from "react";
import "./DragDropList.css";

/* Dans cet exercice, vous devez créer un simple composant de liste drag-and-drop qui permet aux utilisateurs de réorganiser une liste d'éléments en les faisant glisser et en les déposant. La liste glisser-déposer doit avoir les fonctionnalités suivantes :

Afficher la liste des éléments
Autoriser les utilisateurs à glisser-déposer des éléments pour réorganiser la liste
Utilisez le useState hook pour gérer l'état de la liste */

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

function DragDropList() {
    const [items, setItems] = useState(initialItems)
    const [draggingItem, setDraggingItem] = useState(null)

    const handleDragStart = (index) => {
        setDraggingItem(index);
    }    
    const handleDragOver = (index) => {
        if (draggingItem === null) return;
        if (draggingItem === index) return;


        const newItems = [...items]
        // manipuler mon tableau
        const draggingItemValue = newItems[draggingItem]
        newItems.splice(draggingItem, 1)
        newItems.splice(index, 0, draggingItemValue)


        setDraggingItem(index)
        setItems(newItems)
    }

    const handleDragEnd = () => {
        setDraggingItem(null)
    }


    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li
                key={index}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={() => handleDragOver(index)}
                onDragEnd={handleDragEnd}
            >
                {item}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default DragDropList;
