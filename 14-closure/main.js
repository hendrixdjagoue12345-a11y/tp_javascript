// Écrivez creerCompteur et créez deux instances.
function creerCompteur() { let nombre = 0;
    return () => ++nombre;}

const compteur = creerCompteur();

console.log(compteur());
console.log(compteur());
console.log(compteur());