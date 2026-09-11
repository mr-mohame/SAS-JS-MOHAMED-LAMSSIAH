/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 03 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * MAJUSCULES ET MINUSCULES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Mettez "youcode" entièrement en majuscules, et "MAROC" entièrement en minuscules.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-03
 * ▶️ Commande : node day05/exercices/exercice-03.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let text1 = ["youcode"];
let text2 = ["MAROC"];
 

let majuscules = text1[0].toUpperCase() //  .toUpperCase() pour convirtir en majuscule 
let minuscules = text2[0].toLowerCase() //  .toLowerCase() pour convirtir en majuscule

console.log(`${text1} : ${majuscules}`);
console.log(`${text2} : ${minuscules}`);

