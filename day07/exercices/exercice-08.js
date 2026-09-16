/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let condidats = [
    {nom : "mohamed", score: 12},
    {nom : "amine", score: 23},
    {nom : "rachid", score: 4}
];
let meilleurScore = condidats[0]
for(let i=0; i<condidats.length; i++){
    if(condidats[i].score>meilleurScore.score){
        meilleurScore=condidats[i]
    }

}
console.log(meilleurScore)
