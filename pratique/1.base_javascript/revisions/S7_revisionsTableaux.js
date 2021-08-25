const readlineSync = require('readline-sync');

function exercice9() {

    let number = [0, 1];
    for (let i = 2; i < 10; i++) {
        number[i] = number[i - 1] + number[i - 2];

    }
    console.log(number);
}


function exercice16() {

    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max) + 1;
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let min = 1;
    let max = 50;
    
    // générer un nombre aléatoire entre 1 et 50
    const ADeviner = getRandomInt(min, max); console.log(`A deviner : ${ADeviner}`);
    
    // faire une proposition qui correspond à la moitié de l'intervalle de recherche, arrondie au supérieur
    let proposition = Math.ceil((max - min) / 2); console.log(`Proposition : ${proposition}`);
    let dernier = 0; console.log(`Dernier : ${dernier}`);

    // Tant que la proposition est différente du chiffre à deviner
    while (ADeviner !== proposition) {
        // Si la proposition est supérieure au chiffre à deviner, faire une nouvelle proposition égale à la moitié de l'intervalle entre la dernière proposition et le min
        if (ADeviner < proposition) { 
            dernier = proposition
            proposition = Math.ceil(proposition - (dernier - min) / 2)
        } else if (ADeviner > proposition) {
            dernier = proposition
            proposition = Math.ceil(proposition + (max - dernier) / 2)
        }
    }

    console.log('Trouvé !')

    // console.log(`A deviner : ${ADeviner}`);
    // console.log(`Proposition : ${proposition}`);
    // console.log(`Avant-dernier : ${avantDernier}`);




}







exercice16();