const saisie = '7';
const quantite = Number(saisie);
if (Number.isNaN(quantite) || !Number.isInteger(quantite) || quantite <= 0) {
    console.log('Quantité invalide');
} else {
    console.log(quantite * 2);
}
// Essayez aussi 'abc' et '0'.
