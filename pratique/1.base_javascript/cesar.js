const readlineSync = require('readline-sync');

const options = { 
    limitMessage: "Merci de saisir un nombre : "
}

// // SANS CAS PARTICULIER
// const alphabet = 'abcdefghijklmnopqrstuvwxyz ';

// const phrase = readlineSync.question('Tapez une phrase : ');

// const decalage = readlineSync.questionInt('Tapez un décalage : ');

// let newPhrase = '';


// for (let i = 0; i < phrase.length; i++){
//     let lettre = phrase[i] // t
//     for (let j = 0; j < alphabet.length; j++){
//         if (lettre === alphabet[j]){
//             newPhrase = newPhrase + alphabet[j + decalage]; //concaténation
//         }
//     }
// }

// console.log(newPhrase);



// // CAS PARTICULIER

// const alphabet = 'abcdefghijklmnopqrstuvwxyz ';

// const phrase = readlineSync.question('Tapez une phrase : ');

// const decalage = readlineSync.questionInt('Tapez un décalage : ');

// let newPhrase = '';


// for (let i = 0; i < phrase.length; i++){
//     let lettre = phrase[i] // t
//     for (let j = 0; j < alphabet.length; j++){
//         if (lettre === alphabet[j]){
//             if (j < 23){
//             newPhrase = newPhrase + alphabet[j + decalage]; //concaténation
//             }
//             else if (j = 23) {
//                 newPhrase = newPhrase + alphabet[0]; 
//             }
//             else if (j = 24) {
//                 newPhrase = newPhrase + alphabet[1]; 
//             }
//             else if (j = 25) {
//                 newPhrase = newPhrase + alphabet[2]; 
//             }
//             else if (j = 26) {
//                 newPhrase = newPhrase + alphabet[26]; 
//             }
//         }
//     }
// }

// console.log(newPhrase);




// CAS PARTICULIER

// const alphabet = 'abcdefghijklmnopqrstuvwxyz ';

// const phrase = readlineSync.question('Tapez une phrase : ');

// const decalage = readlineSync.questionInt('Tapez un décalage : ');

// let newPhrase = '';


// for (let i = 0; i < phrase.length; i++) {
//     let lettre = phrase[i] // t
//     for (let j = 0; j < alphabet.length; j++) {
//         if (lettre === alphabet[j]) {
//             if (j + decalage <= 25) {
//                 newPhrase = newPhrase + alphabet[j + decalage]; //concaténation
//             }
//             else if (j + decalage > 25 && j !== 26) {
//                 newPhrase = newPhrase + alphabet[decalage - 1];
//             }
//             else if (j + decalage === 26) {
//                 newPhrase = newPhrase + ' '; // newPhrase = newPhrase + alphabet[26];
//             }

//         }
//     }
// }

// console.log(newPhrase);





// const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// const phrase = readlineSync.question('Tapez une phrase : ');

// const decalage = readlineSync.questionInt('Tapez un décalage : ');

// let newPhrase = '';


// for (let i = 0; i < phrase.length; i++) {
//     let lettre = phrase[i] // t

//     if (lettre === ' ') {  // on gère le cas de l'espace
//         newPhrase = newPhrase + ' ';
//     }
//     else { // si ce n'est pas un espace on passe à la suite

//         for (let j = 0; j < alphabet.length; j++) {
//             if (lettre === alphabet[j]) {
//                 if (j + decalage <= alphabet.length - 1) { // pareil que <= 25, c'est une bonne pratique
//                     newPhrase = newPhrase + alphabet[j + decalage]; 
//                 }
//                 else {
//                     newPhrase = newPhrase + alphabet[j + decalage - alphabet.length];
//                 }

//             }
//         }
//     }
// }

// console.log(newPhrase);






function main() {


    const choix = readlineSync.questionInt('Tapez 1 pour coder une phrase ou 2 pour décoder : ', options)

    if (choix === 1) {
        const phrase = readlineSync.question('Tapez une phrase : ');
        const decalage = readlineSync.questionInt('Tapez un décalage : ');
        const phraseCodee = chiffrageDeCesar(phrase, decalage); // penser à déclarer une variable pour mettre le return de la fonction
        console.log(phraseCodee);

    }
    else if (choix === 2) {
        const phrase = readlineSync.question('Tapez une phrase codée : ');
        const decalage = readlineSync.questionInt('Tapez un décalage : ');
        const phraseDecodee = dechiffrage(phrase, decalage); // penser à déclarer une variable pour mettre le return de la fonction
        console.log(phraseDecodee);
    }
    else {
        console.log('Merci de taper 1 ou 2 : ')
    }

}



function chiffrageDeCesar(phrase, decalage) {

    let newPhrase = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';


    for (let i = 0; i < phrase.length; i++) {
        let lettre = phrase[i]                                  // premiere lettre du mot, etc.

        if (lettre === ' ') {                                     // on gère le cas de l'espace
            newPhrase = newPhrase + ' ';
        }
        else {                                                  // si ce n'est pas un espace on passe à la suite
            for (let j = 0; j < alphabet.length; j++) {
                if (lettre === alphabet[j]) {
                    if (j + decalage <= alphabet.length - 1) { // pareil que <= 25, c'est une bonne pratique
                        newPhrase = newPhrase + alphabet[j + decalage];
                    }
                    else {
                        newPhrase = newPhrase + alphabet[j + decalage - alphabet.length + 1]; // ATTENTION, après relecture, le + 1 est de trop
                    }
                }
            }
        }
    }
    return newPhrase
}



function dechiffrage(phrase, decalage) {
    let newPhrase = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < phrase.length; i++) {
        let lettre = phrase[i] // t

        if (lettre === ' ') {  // on gère le cas de l'espace
            newPhrase = newPhrase + ' ';
        }
        else { // si ce n'est pas un espace on passe à la suite

            for (let j = 0; j < alphabet.length; j++) {
                if (lettre === alphabet[j]) {
                    if (j - decalage < 0) {
                        newPhrase = newPhrase + alphabet[alphabet.length - decalage + j]; 
                    }
                    else {
                        newPhrase = newPhrase + alphabet[j - decalage];
                    }

                }
            }
        }
    }
    return newPhrase
}




main();