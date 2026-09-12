/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 06 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * DÉCOUPAGE EN TABLEAU
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Transformez la chaîne "Safi,Youssoufia,Nador,Casablanca" en un véritable tableau de 4 éléments.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-06
 * ▶️ Commande : node day05/exercices/exercice-06.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let fullString = "Safi, Youssoufia, Nador, Casablanca";

let parts = fullString.split(","); // split le string sur les virgule 
let firstName = parts[0].trim();
let lasttName = parts[1].trim();
let secondetName = parts[2].trim();
let thirdName = parts[3].trim();
console.log(firstName);
console.log(lasttName);
console.log(secondetName);
console.log(thirdName);

