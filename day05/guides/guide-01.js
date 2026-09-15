/**
 * JOUR 05 — GUIDE 01
 * Extraire une sous-chaîne
 *
 * OBJECTIF
 * On vous donne une date au format ISO "2024-10-15". Récupérez uniquement l'année.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let date = "15, 10, 2024";
let Date = date.slice(8, 15)
console.log(Date);