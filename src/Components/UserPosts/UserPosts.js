import React, { useEffect, useState } from "react";
/* Créer un composant UserPosts qui récupère et affiche une liste de publications pour un ID utilisateur donné à 
l'aide de l'API JSONPlaceholder ( https://jsonplaceholder.typicode.com/ ). Le composant doit récupérer les données
 lors de son montage et mettre à jour les données lorsque l'ID utilisateur change. Cet exercice vous aidera à 
 comprendre comment utiliser le useEffect hook pour la récupération de données et l'importance du tableau de dépendances.

(fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);)

Attentes:
- Récupérez les données de l'API JSONPlaceholder.
- Afficher une liste de publications pour l'ID utilisateur donné.
- Récupère les données lorsque l'accessoire d'ID utilisateur change. */

function UserPosts() {
  const [userId, setUserId] = useState(1);

  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  if (userId < 1) {
    setUserId(1);
  }

  if (userId > 10) {
    setUserId(10);
  }

  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setPosts(data);
          setLoading(false);
        });
    }
  }, [userId]);

  return (
    <div>
      <h2>Identifiant : {userId}</h2>
      <button
        onClick={() => {
          setUserId(userId + 1);
        }}
      >
        +{" "}
      </button>
      <button onClick={() => setUserId(userId - 1)}>-</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserPosts;
