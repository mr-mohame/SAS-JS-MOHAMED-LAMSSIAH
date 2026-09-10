/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * CLOSURE (FERMETURE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction creerCompteur(). À l'intérieur, déclarez let count = 0. Retournez une fonction qui, lorsqu'elle est appelée, fait count++ et retourne count. Stockez le résultat de creerCompteur() dans une variable monCompteur, et appelez-la 3 fois. Comprenez pourquoi l'état est conservé !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day03/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function creerCompteur(){
    let compteur = 0;
    compteur++;
    return compteur

}
function compteur(m){
let monCompteur = 0
    for(let i= 1; i<=m; i++){

        monCompteur+=creerCompteur()

    }
    return monCompteur
}
console.log(compteur(5))