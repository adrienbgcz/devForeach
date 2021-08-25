const readlineSync = require('readline-sync');


// // Le louchébem est un langage crypté que l'on parle pour ne pas se faire comprendre des clients. D'après ce qu'on en sait, 
// // il serait né dans la première moitié du XIXe siècle, mais on n'en est pas vraiment sûr tant peu de chose ont été écrites à son sujet.

// // Plus concrètement, cela consiste à remplacer le premier son (consonnes) d'un mot par un L, prendre cette consonne, l'attacher à la fin du 
// // mot puis rajouter un suffixe (em, é, ji, oc, ic, uche, ès).
// // Exemple : Douce devient Loucedé, ou encore Fou qui devient Loufoc

// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// // Pour cet exercice:

// // Il serait préférable de commencer par du pseudo code afin de decortiquer le processus.

// // Il serait plus judicieux de commencer par la conversion d'un seul mot dans un premier temps, puis élargir l'utilisation à une phrase.

// // Si on le mot est constitué d'une seule lettre (ex: à), il ne subira aucun changement

// // Si le mot commence par une voyelle, aucun changement de syllabe. Il faudra cependant ajouter le L au début et un suffixe à la fin.

// // Le suffixe sera choisi d'une façon aléatoire depuis la liste suivante :
// // ['em', 'é', 'ji', 'oc', 'ic', 'uche', 'ès'];




// function codageMot(mot) {
//     let newMot = '';
//     let suffixeAAjouter = '';
//     let tirageSuffixe = getRandom(1, 7);

//     switch (tirageSuffixe) {
//         case 1: {
//             suffixeAAjouter = 'em';
//             break;
//         }
//         case 2: {
//             suffixeAAjouter = 'é';
//             break;
//         }
//         case 3: {
//             suffixeAAjouter = 'ji';
//             break;
//         }
//         case 4: {
//             suffixeAAjouter = 'oc';
//             break;
//         }
//         case 5: {
//             suffixeAAjouter = 'ic';
//             break;
//         }
//         case 6: {
//             suffixeAAjouter = 'uche';
//             break;
//         }
//         case 7: {
//             suffixeAAjouter = 'ès';
//             break;
//         }
//     }



//     if (mot[0] !== 'a' && mot[0] !== 'e' && mot[0] !== 'i' && mot[0] !== 'o' && mot[0] !== 'u' && mot[0] !== 'y' && mot.length > 1) {
//         newMot = mot.replace(mot[0], 'L') + mot[0] + suffixeAAjouter;
//     }
//     else if (mot[0] === 'a' || mot[0] === 'e' || mot[0] === 'i' || mot[0] === 'o' || mot[0] === 'u' || mot[0] === 'y' || mot.length > 1) {
//         newMot = 'L' + mot + suffixeAAjouter;
//     }
//     else if (mot.length === 1) {
//         newMot = mot;
//     }

//     return newMot
// }






// function main() {

//     let phrase = readlineSync.question('Saisissez une phrase : ')
//     let tableauPhrase = phrase.split(' ');
//     let newPhrase = '';

//     for (let i = 0; i < tableauPhrase.length; i++) {
//         newPhrase = newPhrase + ' ' + codageMot(tableauPhrase[i]);

//     }

// console.log(newPhrase);

// }


// main();







//////////////////////////////////////// AVEC TRAITEMENT DES MAJUSCULES /////////////////////////////////////////////////////////////////////


// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// // Pour cet exercice:

// // Il serait préférable de commencer par du pseudo code afin de decortiquer le processus.

// // Il serait plus judicieux de commencer par la conversion d'un seul mot dans un premier temps, puis élargir l'utilisation à une phrase.

// // Si on le mot est constitué d'une seule lettre (ex: à), il ne subira aucun changement

// // Si le mot commence par une voyelle, aucun changement de syllabe. Il faudra cependant ajouter le L au début et un suffixe à la fin.

// // Le suffixe sera choisi d'une façon aléatoire depuis la liste suivante :
// // ['em', 'é', 'ji', 'oc', 'ic', 'uche', 'ès'];




// function codageMot(mot) {
//     let newMot = '';
//     let suffixeAAjouter = '';
//     let tirageSuffixe = getRandom(1, 7);

//     switch (tirageSuffixe) {
//         case 1: {
//             suffixeAAjouter = 'em';
//             break;
//         }
//         case 2: {
//             suffixeAAjouter = 'é';
//             break;
//         }
//         case 3: {
//             suffixeAAjouter = 'ji';
//             break;
//         }
//         case 4: {
//             suffixeAAjouter = 'oc';
//             break;
//         }
//         case 5: {
//             suffixeAAjouter = 'ic';
//             break;
//         }
//         case 6: {
//             suffixeAAjouter = 'uche';
//             break;
//         }
//         case 7: {
//             suffixeAAjouter = 'ès';
//             break;
//         }
//     }



//     if (mot[0] !== 'a' && mot[0] !== 'e' && mot[0] !== 'i' && mot[0] !== 'o' && mot[0] !== 'u' && mot[0] !== 'y' && mot.length > 1) {
//         newMot = mot.replace(mot[0], 'L') + mot[0] + suffixeAAjouter;
//     }
//     else if (mot[0] === 'a' || mot[0] === 'e' || mot[0] === 'i' || mot[0] === 'o' || mot[0] === 'u' || mot[0] === 'y' || mot.length > 1) {
//         newMot = 'L' + mot + suffixeAAjouter;
//     }
//     else if (mot.length === 1) {
//         newMot = mot;
//     }

//     return newMot
// }






// function main() {
//     let phrase = '';
//     let saisie = readlineSync.question('Saisissez une phrase : ');
//     phrase = saisie.toLowerCase();

//     let tableauPhrase = phrase.split(' ');
//     let newPhrase = '';

//     for (let i = 0; i < tableauPhrase.length; i++) {
//         newPhrase = newPhrase + ' ' + codageMot(tableauPhrase[i]);

//     }

// console.log(newPhrase);

// }


// main();





//////////////////////////////////////// AVEC TRAITEMENT DES MAJUSCULES ET APOSTROPHES /////////////////////////////////////////////////////////////////////


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Pour cet exercice:

// Il serait préférable de commencer par du pseudo code afin de decortiquer le processus.

// Il serait plus judicieux de commencer par la conversion d'un seul mot dans un premier temps, puis élargir l'utilisation à une phrase.

// Si on le mot est constitué d'une seule lettre (ex: à), il ne subira aucun changement

// Si le mot commence par une voyelle, aucun changement de syllabe. Il faudra cependant ajouter le L au début et un suffixe à la fin.

// Le suffixe sera choisi d'une façon aléatoire depuis la liste suivante :
// ['em', 'é', 'ji', 'oc', 'ic', 'uche', 'ès'];




function codageMot(mot) {
    let newMot = '';
    let suffixeAAjouter = '';
    let tirageSuffixe = getRandom(1, 7);

    switch (tirageSuffixe) {
        case 1: {
            suffixeAAjouter = 'em';
            break;
        }
        case 2: {
            suffixeAAjouter = 'é';
            break;
        }
        case 3: {
            suffixeAAjouter = 'ji';
            break;
        }
        case 4: {
            suffixeAAjouter = 'oc';
            break;
        }
        case 5: {
            suffixeAAjouter = 'ic';
            break;
        }
        case 6: {
            suffixeAAjouter = 'uche';
            break;
        }
        case 7: {
            suffixeAAjouter = 'ès';
            break;
        }
    }



    if (mot[0] !== 'a' && mot[0] !== 'e' && mot[0] !== 'i' && mot[0] !== 'o' && mot[0] !== 'u' && mot[0] !== 'y' && mot.length > 1) {
        newMot = mot.replace(mot[0], 'L') + mot[0] + suffixeAAjouter;
    }
    else if (mot[0] === 'a' || mot[0] === 'e' || mot[0] === 'i' || mot[0] === 'o' || mot[0] === 'u' || mot[0] === 'y' || mot.length > 1) {
        newMot = 'L' + mot + suffixeAAjouter;
    }
    else if (mot.length === 1) {
        newMot = mot;
    }

    return newMot
}






function main() {

    let phrase = readlineSync.question('Saisissez une phrase : ');
    phrase = phrase.toLowerCase();

    let tableauPhrase = phrase.split(' ');

    let newPhrase = '';

    for (let i = 0; i < tableauPhrase.length; i++) {
        //vérifier apostrophes
        if (tableauPhrase[i].includes('\'')) {
            tableauPhrase[i] = tableauPhrase[i].split('\'');
            let newTableau = tableauPhrase[i];
            newPhrase = newPhrase + ' ' + codageMot(newTableau[0]) + '\'' + codageMot(newTableau[1]);
            console.log(tableauPhrase[i]);
        }
        else {
            newPhrase = newPhrase + ' ' + codageMot(tableauPhrase[i]);
        }

    }

    console.log(newPhrase);

}


main();