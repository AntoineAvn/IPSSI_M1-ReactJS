import React from "react";

// URL DES EXOS / CORRECTIONS : https://opposite-raft-210.notion.site/Exercice-Javascript-06-1258f702bdea4c58b0a2a1c038e3a4d8

function Exo() {
  /******************* Exo 1 *****************/
  //   Élevez au carré la valeur de chaque élément dans le tableau. Supposons que vous ne recevrez que des nombres dans le tableau d'entrée.
  const input = [1, 2, 3, 4, 5];
  const squaredArray = input.map((num) => num * num);
  console.log("Exo1: " + squaredArray);
  // Result : [1, 4, 9, 16, 25];

  /******************* Exo 2 *****************/
  // Si l'entrée fournie est un tableau de nombres, retournez la somme de tous les nombres positifs. Si le tableau est vide ou s'il n'y a pas de nombres positifs, retournez 0.
  const input2 = [1, -4, 12, 0, -3, 29, -150];
  const positiveNumbersSum = input2
    .filter((n) => n > 0)
    .reduce((acc, num) => acc + num, 0);
  console.log("Exo2: " + positiveNumbersSum);
  // Result : 42;

  /******************* Exo 3 *****************/
  // Calculez la valeur moyenne (moyenne arithmétique) et médiane des éléments numériques du tableau d'entrée.
  const input3 = [12, 46, 32, 64];
  const result = input3.reduce(
    (acc, current, index, array) => {
      // Calcul de la moyenne
      acc.moyenne += current / array.length;

      // Tri du tableau pour calculer la médiane
      array.sort((a, b) => a - b);

      // Calcul de la médiane
      if (array.length % 2 === 0) {
        // Si le nombre d'éléments est pair
        if (index === array.length / 2 - 1) {
          acc.median += current;
        } else if (index === array.length / 2) {
          acc.median += current;
          acc.median /= 2;
        }
        // acc.median =
        //   (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
      } else {
        // Si le nombre d'éléments est impair
        if (index === (array.length - 1) / 2) {
          acc.median = current;
        }
        // acc.median = array[(array.length - 1) / 2];
      }

      return acc;
    },
    { moyenne: 0, median: 0 }
  );
  console.log("Exo3:", JSON.stringify(result));
  // Result: moyenne = 38.5 médiane = 39

  /******************* Exo 4 *****************/
  // La donnée d'entrée est une chaîne de caractères comprenant plusieurs mots, séparés par un seul espace entre chacun d'eux. La tâche consiste à créer une abréviation du nom en renvoyant les initiales de chaque mot
  const input4 = "George Raymond Richard Martin";
  const abbreviation = input4
    .split(" ") // Sépare la chaîne en mots
    .map((word) => word[0]) // Prend la première lettre de chaque mot
    .join(""); // Joint les lettres pour former l'abréviation
  console.log("Exo4: " + abbreviation);
  // Result: "GRRM"

  /******************* Exo 5 *****************/
  // Vous avez un tableau d'objets représentant un groupe d'étudiants, chacun avec un nom et un tableau de notes d'examens. Votre tâche est d'utiliser map, filter et reduce pour calculer la note moyenne de chaque étudiant, puis de renvoyer un tableau d'objets contenant uniquement les étudiants ayant une note moyenne supérieure à 90.
  const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] },
  ];

  const topStudents = students
    .map((student) => {
      const average =
        student.scores.reduce((acc, score) => acc + score, 0) /
        student.scores.length;
      return { name: student.name, average };
    })
    .filter((student) => student.average > 90);
  console.log("Exo5: " + JSON.stringify(topStudents));
  // Result: [ { name: 'Jack', average: 100 } ]

  /******************* Exo 6 *****************/
  // Vous avez un tableau d'objets représentant une collection de produits, chacun avec un nom, un prix et une catégorie. Utilisez map, filter et reduce pour calculer le prix moyen des produits dans chaque catégorie, puis renvoyez un tableau d'objets contenant uniquement les catégories dont le prix moyen est supérieur à 50.
  const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
    { name: "Product 9", price: 40, category: "Food" },
  ];

  const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);
    return acc;
  }, {});

  const avgPriceByCategory = Object.keys(productsByCategory).map((category) => {
    const sum = productsByCategory[category].reduce(
      (acc, product) => acc + product.price,
      0
    );
    return { category, average: sum / productsByCategory[category].length };
  });

  const hightpriced = avgPriceByCategory.filter(
    (category) => category.average > 50
  );

  console.log("Exo6: " + JSON.stringify(hightpriced));

  // Result: [ { category: 'Clothes', average: 55 }, { category: 'Electronics', average: 55 } ]
}

export default Exo;
