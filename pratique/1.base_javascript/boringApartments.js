const readlineSync = require('readline-sync');

// La tour boring apartments est un complexe de 10000 appartements, c'est gigantesque.

// Bob s'ennuie, il décide de sonner a l'interphone de chaque appartement jusqu'à ce que quelqu'un lui ouvre.

// Pour mettre un peu plus de piquant, Bob décide de n'appeler que les appartements avec un numéro ennuyeux, c'est a dire ceux dont le numéro est composé 
// du même chiffre (ex: 1, 11, 111, 2, 222 ...).

// Il commence par appeler tous les appartements dont le numéro est composé de 1, puis ceux dont le numéro est composé de 2 ... jusqu'à ouverture de la porte.

// Bob veut connaître combien de fois il a du appuyer sur une touche avant que quelqu'un lui ouvre.

// Exemple: Si l'habitant de l'appartement 22 ouvre a Bob, il aura appuyer sur: 1, 11, 111, 1111, 2, 22 ce qui donne 1 + 2 + 3 + 4 + 1 + 2 soit 13 touches.

// Ecrire un programme qui prend en entrée le numéro de l'appartement qui va répondre (un numéro ennuyeux) et qui affiche le nombre de touches sur lesquelles Bob a appuyé.




// créer un tableau avec le nombre maximal de chiffre possibles

// let nombreSaisi = readlineSync.question('Tapez un nombre : ');


// let apartments = ['1', '11', '111', '1111', '2', '22', '222', '2222', '3', '33', '333', '3333', '4', '44', '444', '4444', '5', '55', '555', '5555', '6', '66', '666', '6666', '7', '77', '777', '7777', '8', '88', '888', '8888', '9', '99', '999', '9999'];

// let result = '';

// for (let i = 0; i < apartments.length; i++) {
//     if (apartments[i] === nombreSaisi) {
//         result = apartments[i];
//         for (let j = 0; j < i; j++) {
//             result = result + apartments[j];
//         }
//     }
// }


// console.log(`L\'appartement ${nombreSaisi} a ouvert`); 
// console.log (`Bob a sonné ${result.length} fois`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let nombreSaisi = '';
// let isValidNumber = false;
// let nbApartments = readlineSync.question('Renseignez le nombre d\'appartements : ')
// let unANeuf = '';
// let numerosApartments = '';
// let suiteDeChiffres = '';
// let addNumber = false;

// let tableauDeChiffres = []

// for (let i = 1; i < 10; i++) { // boucle pour le nombre de sonneries avant nombre rond (ex : 10000 ==> 90 sonneries)
//     unANeuf = i;
//     numerosApartments = '';
//     for (let j = 1; j < nbApartments.length; j++) {
//         numerosApartments += unANeuf; // renvoie 1111 (1+1+1+1) 
//         suiteDeChiffres += numerosApartments; // ==> renvoie 1111111111 (1 + 11 + 111 + 1111)
//         // tableauDeChiffres[j - 1] = suiteDeChiffres; 
//     }
// }

// for (let k = 0; k < nbApartments.length - 2; k++) {
//     if (nbApartments[k + 1] >= nbApartments[k]) {
//         if (nbApartments[nbApartments.length - 2] <= nbApartments[nbApartments.length - 1] && nbApartments[nbApartments.length - 1] !== '0') { 
//             addNumber = true;
//         }
//     }
// }

// if (addNumber = true) { // vérifier pourquoi je rentre dans cette boucle avec le if précédent
//     suiteDeChiffres = suiteDeChiffres.length + nbApartments.length;
// }



// console.log(suiteDeChiffres);
// console.log(`Bob a sonné ${suiteDeChiffres.length} fois`);


// do {
//     nombreSaisi = readlineSync.question('Tapez un nombre : ');

//     for (let i = 1; i < nombreSaisi.length; i++) {
//         if (nombreSaisi[i] !== nombreSaisi[i - 1] || nombreSaisi < 1 || nombreSaisi > nbApartments) {
//             isValidNumber = false;
//             i = 1;
//             nombreSaisi = readlineSync.question('Vous devez saisir un nombre compris entre 1 et 9999 et comprenant les mêmes chiffres : ');
//         }
//         else {
//             isValidNumber = true;
//         }
//     }


// } while (isValidNumber = false)


// let apartments = ['1', '11', '111', '1111', '2', '22', '222', '2222', '3', '33', '333', '3333', '4', '44', '444', '4444', '5', '55', '555', '5555', '6', '66', '666', '6666', '7', '77', '777', '7777', '8', '88', '888', '8888', '9', '99', '999', '9999'];

// let result = '';

// for (let i = 0; i < apartments.length; i++) {
//     if (apartments[i] === nombreSaisi) {
//         result = apartments[i];
//         for (let j = 0; j < i; j++) {
//             result = result + apartments[j];
//         }
//     }
// }


// console.log(`L\'appartement ${nombreSaisi} a ouvert`);
// console.log(`Bob a sonné ${result.length} fois`);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let nombreSaisi = '';
let isValidNumber = false;
let nbApartments = readlineSync.question('Renseignez le nombre d\'appartements : ')
let unANeuf = '';
let numerosApartments = '';
let suiteDeChiffres = '';
let tableauDeNombres = [];
let tableauFinal = [];
let sonneriesMax = 0;
let k = 0; // compteur tableau


for (let i = 1; i < 10; i++) { 
    unANeuf = i;
    numerosApartments = '';
    for (let j = 1; j <= nbApartments.length; j++) {
        numerosApartments += unANeuf; // renvoie 1111 (1+1+1+1) 
       // suiteDeChiffres += numerosApartments; // ==> renvoie 1111111111 (1 + 11 + 111 + 1111)
     tableauDeNombres[k] = parseInt(numerosApartments); 
     k += 1;
    }
}

console.log(tableauDeNombres);

// On vient ordonner et comparer le tableau pour supprimer les nombres en trop en fonction du nombre d'appartements
function compare(x, y) {
    return x - y;
}

tableauDeNombres.sort(compare);

nbApartments = parseInt(nbApartments);

for (let i = 0; i < tableauDeNombres.length; i++){
    if (tableauDeNombres[i] <= nbApartments) {
        tableauFinal[i] = tableauDeNombres[i];
    }
}

console.log(tableauFinal);



//suiteDeChiffres = tableauFinal.toString();


// for (let i = 0; i < suiteDeChiffres.length; i++){        // Permet d'avoir le nombre de sonneries max si besoin
//     if (suiteDeChiffres[i] != ',') {
//         sonneriesMax += 1;
//     }
// }

tableauFinal.sort(); // réordonne le tableau en lexical
tableauFinal = tableauFinal.toString(); // on le convertit en string pour le comptage final
tableauFinal = tableauFinal.split(','); // on le remet sous forme d'un tableau de string



console.log(tableauFinal);





// on vérifie la saisie de l'utilisateur

do {
    nombreSaisi = readlineSync.question('Tapez un nombre : ');

    for (let i = 1; i < nombreSaisi.length; i++) {
        if (nombreSaisi[i] !== nombreSaisi[i - 1] || nombreSaisi < 1 || nombreSaisi >= nbApartments) {
            isValidNumber = false;
            i = 1;
            nombreSaisi = readlineSync.question(`Vous devez saisir un nombre compris entre 1 et ${nbApartments} et comprenant les mêmes chiffres : `);
        }
        else {
            isValidNumber = true;
        }
    }


} while (isValidNumber = false)



// on utilise le tableau final pour compter le nombre de sonneries

let result = '';

for (let i = 0; i < tableauFinal.length; i++) {
    if (tableauFinal[i] === nombreSaisi) {
        result = tableauFinal[i];
        for (let j = 0; j < i; j++) {
            result = result + tableauFinal[j]; 
        }
    }
}


console.log(`L\'appartement ${nombreSaisi} a ouvert`);
console.log(`Bob a sonné ${result.length} fois`);










