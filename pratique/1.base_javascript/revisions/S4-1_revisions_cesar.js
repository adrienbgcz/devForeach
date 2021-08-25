const readlineSync = require('readline-sync');

// Ecrire un programme qui demande a l'utilisateur de saisir la phrase qu'il veut chiffrer, puis un nombre representant le 
//decalage et qui applique la methode du chiffre de cesar. Le resultat est affiche sur l'ecran.

// illustration du chiffre de cesar

// Le programme doit etre constitue d'une fonction principale qui est responsable des interactions avec l'utilisateur et 
// d'une fonction chiffrageDeCesar qui prend en parametre la phrase et le decalage saisies par l'utilisateur et qui retourne la phrase chiffree.


function chiffrageDeCesar(phrase, decalage) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let phraseCodee = '';


    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === ' ') {
            phraseCodee = phraseCodee + ' ';
        }
        else if (phrase[i] === '\'') {
            phraseCodee = phraseCodee + '\'';
        }
        for (let j = 0; j < alphabet.length; j++) {
            if (phrase[i] === alphabet[j] && j + decalage > 25) {
                phraseCodee = phraseCodee + alphabet[j + decalage - alphabet.length];
            }
            else if (phrase[i] === alphabet[j]) {
                phraseCodee = phraseCodee + alphabet[j + decalage];
            }

        }
    }
    return phraseCodee;
}


function dechiffrageDeCesar(phraseCodee, decalage) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let phrase = '';


    for (let i = 0; i < phraseCodee.length; i++) {
        if (phraseCodee[i] === ' ') {
            phrase = phrase + ' ';
        }
        else if (phraseCodee[i] === '\'') {
            phrase = phrase + '\'';
        }
        for (let j = 0; j < alphabet.length; j++) {
            if (phraseCodee[i] === alphabet[j] && j - decalage < 0) {
                phrase = phrase + alphabet[j - decalage + alphabet.length];
            }
            else if (phraseCodee[i] === alphabet[j]) {
                phrase = phrase + alphabet[j - decalage];
            }

        }
    }
    return phrase;
}












function main() {

    let choice = readlineSync.questionInt('Tapez 1 pour coder, 2 pour décoder : ')

    if (choice === 1) {
        let phrase = readlineSync.question('Saisissez une phrase : ');
        const decalage = readlineSync.questionInt('Tapez un décalage : ');
    
        let phraseCodee = chiffrageDeCesar(phrase, decalage);
    
        console.log(phraseCodee);
    }

    else if (choice === 2) {
        let phraseCodee = readlineSync.question('Saisissez une phrase : ');
        const decalage = readlineSync.questionInt('Tapez un décalage : ');
    
        let phrase = dechiffrageDeCesar(phraseCodee, decalage);
    
        console.log(phrase);
    }


    

}

main();