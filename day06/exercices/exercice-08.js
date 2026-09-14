/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let tableau =[12, 23, 0, 4, 20, 100, 120, -3]
function Trouver_Min_Max(tableau){
   let tabMin = tableau[0];
   let tabMax = tableau[0];

    for(let i =0; i<tableau.length; i++){
        if(tableau[i]>tabMax){
            tabMax = tableau[i];
        }else if(tableau[i]<tabMin){
            tabMin = tableau[i]
        }

    }
    return [tabMax, tabMin]

}
console.log(Trouver_Min_Max(tableau));

