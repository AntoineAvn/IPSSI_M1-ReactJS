import React from "react";
import "./TodoList.css";

function TodoList() {
  const [todoList, setTodoList] = React.useState([]);

  const addTodo = () => {
    const newTodo = document.querySelector("input").value;
    if (newTodo.trim() !== "") { // Vérifie si la chaîne n'est pas vide
      setTodoList([...todoList, newTodo]); // Ajoute un nouvel élément à la liste
      document.querySelector("input").value = ""; // Réinitialise le champ après l'ajout
    }
  };

  // Fonction pour ajouter un élément à la liste en appuyant sur la touche "Entrée"
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  // Fonction pour supprimer un élément de la liste
  const deleteTodo = (index) => {
    const updatedTodoList = [...todoList]; // Copie la liste actuelle
    updatedTodoList.splice(index, 1); // Supprime l'élément à l'index donné
    setTodoList(updatedTodoList); // Met à jour la liste
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />{" "}
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
