/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day07/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let objet1= {
    nom: "mohamed",
    prenom: "lamssiah",
    age: 28
};
let objet2= {
    nom: "mohamed",
    prenom: "lamssiah",
    age: 28
};



function sontIdentiques(obj1, obj2){
    let ob1 = JSON.stringify(obj1)
    let ob2 = JSON.stringify(obj2)

    return ob1 === ob2


}
console.log(sontIdentiques(objet1, objet2));