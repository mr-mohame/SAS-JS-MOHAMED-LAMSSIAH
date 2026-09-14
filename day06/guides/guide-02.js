/**
 * JOUR 06 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let tabNote = [12, 15, 8, 19];
let moyenne = 0;
for(let i=0; i<=tabNote.length-1;i++){
    moyenne +=tabNote[i];
    //console.log(moyenne);

}
let moyenneGeneral = moyenne/tabNote.length
console.log(moyenneGeneral)


