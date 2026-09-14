/**
 * JOUR 06 — GUIDE 03
 * Manipulation (Ajouter et Supprimer)
 *
 * OBJECTIF
 * Vous avez une file d'attente file = ["Alice", "Bob", "Charlie"]. "Alice" est servie (elle sort de la file par l'avant), et "David" rejoint la file (à l'arrière).
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let tabFile = ["Alice", "Bob", "Charlie"];

tabFile.splice(0, 1); //pour supprime index 0 et un seul element 
//tabFile.splice(2, 0, "David"); // pour insere un mot a lindex 2 sans rien de supprime(0) 

tabFile.push("David") // pour ajouter un mot ou pleusiuer mot dans la fin
console.log(tabFile);


