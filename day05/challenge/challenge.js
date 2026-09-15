/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · CHALLENGE
 * LE FILTRE À INSULTES / CENSURE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous développez le système de chat d'un jeu vidéo en ligne pour YouCode.
 *
 * Consignes :
 * 1. Vous avez une liste (tableau) de mots interdits : ["noob", "idiot", "nul"].
 * 2. Créez une fonction filtrerMessage(message) qui reçoit le message tapé par le joueur.
 * 3. Si le message contient un des mots interdits (peu importe s'il y a des majuscules, ex: "nOOb"), il doit être remplacé par des astérisques de la même longueur (ex: "").
 * 4. Retournez le message censuré.
 *
 * Exemple de test :
 * filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!")
 * -> Résultat attendu : "Tu es vraiment un GROS  et un * !!"
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
let message = ("Tu es vraiment un GROS NooB et un idiot !! nul")

function filtrerMessage(message){
    let interdits = ["noob", "idiot", "nul"];
    let mot = message.split(" ");
    //let result = "";

    for(let i = 0; i <= mot.length-1; i++){
       // console.log("------" + i + "------")
        let motMini = mot[i].toLowerCase();
        if(interdits.includes(motMini)){
            let longueur = mot[i].length;

            mot[i] = "*".repeat(longueur);
        } 
    }
    return mot.join(" ");
}

console.log(filtrerMessage(message))
