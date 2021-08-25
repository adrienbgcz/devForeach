const readlineSync = require('readline-sync');

function algo1(tutu, tata, toto) {
    if (tutu > toto + 4 || tata === "OK") {
        tutu += 1;
    }
    else {
        tutu -= 1
    }
    console.log(tutu)
}
// IF equivalent avec inversion de condition
// if(i == 1){
//     //condition vrai
//     console.log('HAHAH')
// }
// else {
//     //condition fausse
//     console.log('OHOH')
// }
// if(i != 1){
//     //condition vrai
//     console.log('OHOH')
// }
// else {
//     //condition fausse
//     console.log('HAHAH')
// }
function algo2(tutu, tata, toto) {
    // A || B
    //!(A || B) 
    // A && B -> faux
    // !A && !B -> ok, loi de Morgan
    if (tutu <= toto + 4 && tata !== "OK") {
        tutu -= 1;
    }
    else {
        tutu += 1
    }
    console.log(tutu)
}

function exercice1() {
    let tutu, tata, toto;
    tutu = readlineSync.questionInt("Veuillez saisir tutu (nombre): ");
    toto = readlineSync.questionInt("Veuillez saisir toto (nombre): ");
    tata = readlineSync.question("Veuillez saisir tata: ");
    algo1(tutu, tata, toto)
    algo2(tutu, tata, toto)

}



function exercice2() {
    let hour = readlineSync.questionInt('Renseignez le chiffre de l\'heure : ');
    let minutes = readlineSync.questionInt('Renseignez le chiffre des minutes : ');


    if (minutes == 59) {
        hour += 1;
        minutes = 0;
        if (hour == 24) {
            hour = 00;
        }
    } else {
        minutes += 1;
    }

    console.log(`Dans une minute, il sera ${hour} heures ${minutes} minutes`);

}



function exercice3() {

    let hour = readlineSync.questionInt('Renseignez le chiffre de l\'heure : ');
    let minutes = readlineSync.questionInt('Renseignez le chiffre des minutes : ');
    let seconds = readlineSync.questionInt('Renseignez le chiffre des secondes : ');

    if (seconds == 59) {
        minutes += 1;
        seconds = 00;
        if (minutes == 60) {
            hour += 1;
            minutes = 00;
        } if (hour == 24) {
            hour = 00
        }

    } else {
        seconds += 1
    }

    console.log(`Dans une seconde, il sera ${hour} heures ${minutes} minutes et ${seconds} secondes`);

}



function exercice4() {
    let number = readlineSync.questionInt('Combien de photocopies souhaitez-vous ? ')
    const prixDixCents = 0.10;
    const prixNeufCents = 0.09;
    const prixHuitCents = 0.08;
    let facture = 0;

    if (isNaN(number) || number <= 0) {
        console.log('Veuillez saisir un nombre supérieur à 0 : ')
    }
    else if (number <= 10) {
        facture = number * prixDixCents;
    } else if (number > 10 && number <= 30) {
        facture = (prixDixCents * 10) + (number - 10) * prixNeufCents;
    } else if (number > 30) {
        facture = (prixDixCents * 10) + (prixNeufCents * 20) + (number - 30) * prixHuitCents;
    }

    if (facture < 1) {
        facture *= 100;
        console.log(`Votre facture s\'élève à ${Math.facture} centimes.`);
    } else {
        console.log(`Votre facture s\'élève à ${facture} euros.`);
    }
}


function exercice5() {

    let gender;
    let age = readlineSync.questionInt('Renseignez votre âge : ');
    if (isNaN(age) || age < 18) {   // isNan pas utile
        console.log('Renseignez un âge supérieur ou égal à 18 ans : ')
    } else {                                                                    // boucle
        gender = readlineSync.question('Renseignez votre sexe en tapant H ou F : ');

        if (gender != 'F' && gender != 'f' && gender != 'H' && gender != 'h') {
            console.log('Renseignez votre sexe en tapant H ou F : ')
        }
    }

    if (gender == 'H' || gender == 'h') {// && age .... || cas des femmes sur la même ligne ==> pour regrouper age et sexe ) {
        if (age >= 20) {
            console.log('Vous êtes imposable')
        } else {
            console.log('Vous n\'êtes pas imposable')
        }
    } else if (gender == 'F' || gender == 'f') {
        if (age >= 18 && age <= 35) {
            console.log('Vous êtes imposable')
        } else {
            console.log('Vous n\'êtes pas imposable') // laisser un else à la fin
        }
    }
}


function exercice6() {
    let firstNumber = readlineSync.questionInt(' Score candidat 1 : ')
    let secondNumber = readlineSync.questionInt(' Score candidat 2 : ')
    let thirdNumber = readlineSync.questionInt(' Score candidat 3 : ')
    let fourthNumber = readlineSync.questionInt(' Score candidat 4 : ')

    if (firstNumber >= 50) {
        console.log('Elu !');
    } else if (firstNumber < 12.5) {
        console.log('Battu !');
    } else if (firstNumber > 12.5 && firstNumber < 50) {
        if (firstNumber < secondNumber || firstNumber < thirdNumber || firstNumber < fourthNumber) {
            console.log('Ballotage défavorable');
        } else {
            console.log('Ballotage favorable')
        }
    }
}



function exercice7() {
    let couleur = 0;


    let age = readlineSync.questionInt('Tapez 1 si vous avez plus de 25 ou tapez 0 si vous avez moins de 25 ans : ');
    let permis = readlineSync.questionInt('Tapez 1 si vous avez le permis depuis plus de 2 ans, sinon tapez 0 : ');
    let accidents = readlineSync.questionInt('Renseignez votre nombre d\'accidents : ');
    let fidelite = readlineSync.questionInt('Tapez 1 si votre contrat a plus de 5 ans et sinon tapez 0 : ')

    if (age == 1 && permis == 1) {
        if (accidents == 0) {
            couleur = 3;
        } else if (accidents == 1) {
            couleur = 2;
        } else if (accidents == 2) {
            couleur = 1;
        } else if (accidents > 2) {
            couleur = 0;
        }
        if (fidelite == 1) {
            couleur += 1;
        }
    } else if ((age == 1 && permis == 0) || (age == 0 && permis == 1)) {
        if (accidents == 0) {
            couleur = 2;
        } else if (accidents == 1) {
            couleur = 1;
        } else if (accidents > 1) {
            couleur = 0;
        }
    } else if (age == 0 && permis == 0) {

        if (accidents < 1) {
            couleur = 1;
        } else {
            couleur = 0;
        }
    }

    if (fidelite == 1) {
        couleur += 1;
    }




    if (couleur == 0) {
        console.log('Vous êtes refusé')
    } else if (couleur == 1) {
        console.log(`Vous bénéficiez du tarif rouge`);
    } else if (couleur == 2) {
        console.log(`Vous bénéficiez du tarif orange`);
    } else if (couleur == 3) {
        console.log(`Vous bénéficiez du tarif vert`)
    } else if (couleur = 4) {
        console.log(`Vous bénéficiez du tarif bleu`)
    }

    // switch(couleur) {
    //     case 0 : {
    //         console.log('Vous êtes refusé');
    //         break;
    //     }
    //     case 1 : {
    //         console.log('Vous bénéficiez du tarif rouge');
    //         break;
    //     }
    //     case 2 : {
    //         console.log('Vous bénéficiez du tarif orange');
    //         break;
    //     }
    //     case 3 : {
    //         console.log('Vous bénéficiez du tarif vert');
    //         break;
    //     }
    //     case 4 : {
    //         console.log('Vous bénéficiez du tarif bleu');
    //         break;
    //     }
    // }

}




// exercice1();
// exercice2();
// exercice3();
// exercice4();
exercice5();
// exercice6();
// exercice7();
