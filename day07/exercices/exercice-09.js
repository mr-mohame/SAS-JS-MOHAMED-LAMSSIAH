/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let condidats = [
    {nom : "mohamed", score: 12},
    {nom : "amine", score: 23},
    {nom : "rachid", score: 4}
];
let meilleurScore = [];
for (let i=0; i<condidats.length;i++){
    if(condidats[i].score>=10){
        meilleurScore.push(condidats[i])
    }
}
console.log(meilleurScore)
