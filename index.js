// PENSER A DESACTIVER COPILOTE ET AUTRE POUR CET EXERCICE !

// Exercice:
// Récupérer la taille total du contenu du dossier /assets en complétant le générateur
//(le code doit récupérer la taille dans les sous-dossiers de manière récursive).

// Exemple d'affichage attendu:
// Size: 51 bytes

// Bonus: Récupérer les extensions des fichiers présents dans le dossier /assets
// Exemple d'affichage attendu:
// Extensions: 'css', 'html', 'js', 'json', 'txt'

import fs from "fs";

const dir = "./assets";

function* getFiles(dir) {
  // compléter ici
}

function* getFilesSize(dir) {
  // compléter ici
}

// const size = ... à compléter ...
console.log(`Size: ${size} bytes`);
