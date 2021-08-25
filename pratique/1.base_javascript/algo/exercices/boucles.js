const readlineSync = require('readline-sync');

// function afficheMenu() {
//     console.log('Bonjour, Veuillez choisir un nombre:')
//     console.log('1 - exercice 1')
//     console.log('2 - exercice 2')
//     console.log('3 - exercice 3')
//     console.log('4 - exercice 4')
//     console.log('0 - quitter')
//     console.log('\n')
// }

// let quitter = false;
// let nombreExercice = 0;
// do {

//     afficheMenu();
//     const elementMenu = readlineSync.question('?');

//     switch(elementMenu) {
//         case '1': {
//             exercice1();
//             nombreExercice++;
//             break;
//         }
//         case '2': {
//             exercice2();
//             nombreExercice++;
//             break;
//         }
//         case '3': {
//             exercice3();
//             nombreExercice++;
//             break;
//         }
//         case '4': {
//             exercice4();
//             nombreExercice++;
//             break;
//         }
//         case '0': {
//             quitter = true;
//             break;
//         }
//         default: {
//             console.log("votre saisie ne correspond pas au menu");
//             break;
//         }
//     }
// }
// while(!quitter);

// console.log("Au revoir, vous avez executer", nombreExercice, "exercices");


// exercice 1 :
// Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.

function exercice1() {

    let number;

    do {
        number = readlineSync.question('Saisir un nombre entre 1 et 3 : ');
        if (isNaN(number)) {
            console.log('Vous devez saisir un nombre');
        }

    } while (isNaN(number) || (number < 1 || number > 3)); // mettre bien les conditions dans l'ordre pour tester d'abord que ce n'est pas un nombre


    console.log('OK');
}







// exercice 2 :
// Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, 
// on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.
function exercice2() {

    let number;

    do {
        number = readlineSync.question('Saisir un nombre compris entre 10 et 20 : ');
        if (isNaN(number)) {
            console.log('Veuillez saisir un nombre compris entre 10 et 20 : ');
        } else if (number > 20) {
            console.log('Plus petit !');
        } else if (number < 10) {
            console.log('Plus grand !');
        }
    } while (isNaN(number) || number < 10 || number > 20)

    console.log('OK');


}



// exercice 3 :
// Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, 
// le programme affichera les nombres de 18 à 27.

function exercice3() {
    let number = readlineSync.questionInt('Saisissez un nombre : ');
    let number2 = number;

    do {
        if (isNaN(number)) {
            console.log('Veuillez saisir un nombre : ');
        } else {
            number = number + 1;
            console.log(number);
        }
    } while (number < number2 + 10);
}




// exercice 4 :
// Réécrire l'algorithme précédent, en utilisant cette fois l'instruction Pour

function exercice4() {
    let number = readlineSync.questionInt('Saisissez un nombre : ');
    for (let i = 0; i < 10; i++) {
        number = number + 1;
        console.log(number);
    }
}



function exercice5() {

    let tableNumber = readlineSync.questionInt('Quelle table souhaitez-vous ? ')
    let result;
    let multiplicateur = 0 // utiliser le i pour enlever une variable

    console.log('Table de', tableNumber, ':');

    for (let i = 0; i < 10; i++) {
        multiplicateur = multiplicateur + 1;
        result = tableNumber * multiplicateur;

        console.log(tableNumber, 'x', multiplicateur, '=', result);
    }
}




function exercice6() {
    let number = readlineSync.questionInt('Saisissez un nnombre : ');
    let jeSuisLeNombreAdditionne = 0;

    // for (let i = 0; i < number; i++) {
    //     jeSuisLeNombreAdditionne += number - i;
    // }

    for (let i = 1; i <= number; i++) {
        jeSuisLeNombreAdditionne += i;
    }

    console.log(jeSuisLeNombreAdditionne);

}


function exercice7() {
    let number = readlineSync.questionInt('Saisissez un nombre : ');
    let multiplication = 1;

    // for (i = 0; i < number; i++) {
    //     multiplication *= i + 1;
    // }

    for (i = 1; i <= number; i++) {
        multiplication *= i;
    }
    console.log(multiplication);

}





function exercice8() {

    let jeSuisLePlusGrand = -1;
    let jeSuisLaPosition;

    for (let i = 0; i < 4; i++) {
        number = readlineSync.questionInt('Entrez le nombre ' + (i + 1) + ' : ');
        if (number > jeSuisLePlusGrand) {
            jeSuisLePlusGrand = number;
            jeSuisLaPosition = i + 1;

        }
    }
    console.log(`Le numéro le plus grand est le ${jeSuisLePlusGrand} et il arrive en position ${jeSuisLaPosition}`);
}








function exercice9() {

    let number;
    let jeSuisLePlusGrand = -1;
    let jeSuisLaPosition = 0;
    let i = 0;   // mettre un deuxième index 

    do {
        number = readlineSync.questionInt('Entrez un nombre : ')
        i += 1;

        if (number > jeSuisLePlusGrand) {
            jeSuisLePlusGrand = number;
            jeSuisLaPosition = i;
        }

    } while (number != 0)

    console.log(`Le numéro le plus grand est le ${jeSuisLePlusGrand} et il arrive en position ${jeSuisLaPosition}`);
}







function exercice10() {
    let facture = 0;
    let add;
    do {
        add = readlineSync.questionInt('Ajouter le prix d\'un article : ');
        facture += add;
        console.log(facture);
    } while (add != 0)

    let prixPaye = readlineSync.questionInt('Combien souhaitez-vous donner ? ')
    let difference = prixPaye - facture;

    while (difference >= 10) {
        console.log('10 euros');
        difference -= 10;
    }

    while (difference >= 5) {
        console.log('5 euros');
        difference -= 5;
    }

    while (difference >= 1) {
        console.log('1 euros');
        difference -= 1;
    }
}


function exercice10b() {
    let facture = 0;
    let add;
    let dixEuros = 0;
    let cinqEuros = 0;
    let unEuro = 0;


    do {
        add = readlineSync.questionInt('Ajouter le prix d\'un article : ');
        facture += add;
        console.log(facture);
    } while (add != 0)

    let prixPaye = readlineSync.questionInt('Combien souhaitez-vous donner ? ')
    let difference = prixPaye - facture;

    while (difference >= 10) {
        difference -= 10;
        dixEuros += 1;
    }

    while (difference >= 5) {
        difference -= 5;
        cinqEuros += 1;
    }

    while (difference >= 1) {
        difference -= 1;
        unEuro +=1;
    }

    console.log(`${dixEuros} billets de 10 euros`);
    console.log(`${cinqEuros} billets de 5 euros`);
    console.log(`${unEuro} pièce de 1 euro`);

}



function exercice10c() {
    let facture = 0;
    let add;
    let dixEuros = 0;
    let cinqEuros = 0;
    


    do {
        add = readlineSync.questionInt('Ajouter le prix d\'un article : ');
        facture += add;
        console.log(facture);
    } while (add != 0)

    let prixPaye = readlineSync.questionInt('Combien souhaitez-vous donner ? ')
    let difference = prixPaye - facture;

    while (difference >= 10) {
        difference -= 10;
        dixEuros += 1;
    }

    if (difference >= 5) {
        difference -= 5;
        cinqEuros = 1;
    }

    
    console.log(`${dixEuros} billets de 10 euros`);
    console.log(`${cinqEuros} billets de 5 euros`);
    console.log(`${difference} pièce de 1 euro`);

}















function factoriellePartants(partants, multiplication) {
    for (i = 0; i < partants; i++) {                            // les return valent 1, le i n'est pas initialisé, pourtant ça marchait au 7
        return multiplication *= i + 1;
    }
}

function factorielleJoues(joues, multiplication) {
    for (i = 0; i < joues; i++) {
        return multiplication *= i + 1;
    }
}

function factoriellePartantsMoinsJoues(partants, joues, multiplication) {
    let difference = partants - joues;
    for (i = 0; i < difference; i++) {
        return multiplication *= i + 1;
    }
}

function exercice11() {


    let chevauxPartants = readlineSync.questionInt('Nombre de chevaux partants : ');
    let chevauxJoues = readlineSync.questionInt('Nombre de chevaux joués : ');
    let multiplication = 1;

    let X = factoriellePartants(chevauxPartants, multiplication) / factoriellePartantsMoinsJoues(chevauxPartants, chevauxJoues, multiplication);
    let Y = factoriellePartants(chevauxPartants, multiplication) / (factorielleJoues(chevauxJoues, multiplication) * (factoriellePartantsMoinsJoues(chevauxPartants, chevauxJoues, multiplication)));

    console.log(`Dans l'ordre : une chance sur ${X} de gagner`);
    console.log(`Dans le désordre : une chance sur ${Y} de gagner`);

}


function exercice12() {
    let minNumber = readlineSync.questionInt('Tapez le nombre minimal : ');
    let maxNumber = readlineSync.questionInt('Tapez le nombre maximal : ')

    console.log(minNumber);

    for (i = minNumber; i < maxNumber; i++) {

        minNumber += 1;
        if (minNumber % 3 == 0 && minNumber % 5 == 0) {
            console.log('FizzBuzz');
        } else if (minNumber % 3 == 0) {
            console.log('Fizz')
        } else if (minNumber % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(minNumber);
        }
    }

}








// exercice1();
// exercice2();
// exercice3();
// exercice4();
// exercice5();
// exercice6();
// exercice7();
// exercice8();
// exercice9();
// exercice10();
// exercice10b();
exercice10c();
// exercice11();
// exercice12();


