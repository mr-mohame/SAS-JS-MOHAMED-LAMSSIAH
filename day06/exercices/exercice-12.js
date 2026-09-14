/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE DÉDOUBLONNEUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui prend un tableau avec des doublons [1, 2, 2, 3, 4, 4, 5] et retourne un nouveau tableau sans doublons.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day05/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let tab = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 6];
function doublons(tab){
    let Tab = [];
    for(let i =0; i<tab.length; i++){
        if(!Tab.includes(tab[i])){
            Tab.push(tab[i]);
        }

    }
    return Tab;
    
}
console.log(doublons(tab))
