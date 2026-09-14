/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 04 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * PARCOURIR AVEC UN `FOR` CLASSIQUE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez nombres = [10, 20, 30, 40]. Utilisez une boucle for (avec i = 0 jusqu'à length) pour afficher chaque nombre multiplié par 2.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-04
 * ▶️ Commande : node day05/exercices/exercice-04.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let tabNumber = [10, 20, 30, 40];
//let mult = 0;
for(let i=0; i<tabNumber.length; i++){
   let mult = tabNumber[i] * 2
    console.log(`${mult} = ${tabNumber[i]} * 4`);

}
