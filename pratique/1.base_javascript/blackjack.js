
const readlineSync = require('readline-sync');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Le joueur commence avec un score de 0 et sans cartes.
let scoreJoueur = 0;
let nbCartes = 0;
let continueJeu = true;

// La banque commence par un score entre 16 et 21
let scoreBanque = getRandom(16, 21);

// À chaque tour, le joueur peut :
do {

    if (scoreJoueur > 21) {
        console.log('Perdu !');
        continueJeu = false;
    }
    else if (scoreJoueur === 21) {
        console.log('Gagné !');
        continueJeu = false;
    }
    else {
        let choix = readlineSync.questionInt('Tapez 1 pour tirer une carte - Tapez 2 pour arrêter et garder votre score : \n')
        // tirer une carte avec une valeur entre 1 et 11, cette valeur sera ajoutée à son score.
        if (choix === 1) {
            scoreJoueur = scoreJoueur + getRandom(1, 11);
            nbCartes = nbCartes + 1;
            console.log(`Votre score : ${scoreJoueur}`)
        }
        // Tirer une autre ou arrêter en gardant son score.
        if (choix === 2) {
            continueJeu = false
        }
    }
} while (continueJeu)





// À la fin du jeu, on aura 5 possibilités :


// Si le score est > 21, le joueur perd
// Si le score est < la banque, le joueur perd.
if (scoreJoueur < scoreBanque) {
    console.log('Perdu !');
    console.log(`Votre score : ${scoreJoueur}`);
    console.log(`Score banque : ${scoreBanque}`);
}
// Si le score est 21, Black Jack ! Le joueur gagne.
// Si le score est > la banque, le joueur gagne.
else if (scoreJoueur > scoreBanque && scoreJoueur < 21) {
    console.log('Gagné !');
    console.log(`Votre score : ${scoreJoueur}`);
    console.log(`Score banque : ${scoreBanque}`);
}
// Si le score est équivalent à la banque, c'est un Push le joueur reprend son argent.
else if (scoreJoueur === scoreBanque) {
    console.log('Push ! Vous gardez votre argent.');
    console.log(`Votre score : ${scoreJoueur}`);
    console.log(`Score banque : ${scoreBanque}`);
}
