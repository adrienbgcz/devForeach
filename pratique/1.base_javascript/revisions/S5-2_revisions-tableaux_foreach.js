const readlineSync = require('readline-sync');

function getTableauSaisi() {
    const tableau = [];
    let saisie = 0;
    let i = 0;

    while (!isNaN(saisie)) {
        saisie = readlineSync.question('Tapez un nombre : ');
        if (!isNaN(saisie))
            tableau[i++] = parseInt(saisie);

    }
    return tableau;
}



function getSommeTableau(tableau) {
    let somme = 0

    tableau.forEach(element => {
        somme += element;
    });

    // for (i = 0; i < tableau.length; i++) {
    //     somme += tableau[i];
    // }
    return somme;
}

function getMoyenne(somme, tableau) {

    return somme / tableau.length;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max + 1));
}





function exercice1() {
    const tableau1 = [];

    for (i = 0; i < 7; i++) {
        tableau1[i] = 0;
    }
    console.log(tableau1);
}


function exercice2() {
    const tableau1 = [];

    tableau1[0] = 'a';
    tableau1[1] = 'b';
    tableau1[2] = 'c';
    tableau1[3] = 'd';
    tableau1[4] = 'e';
    tableau1[5] = 'f';

    console.log(tableau1);
}


function exercice3() {
    const tableau1 = [];

    for (let i = 0; i < 9; i++) {
        tableau1[i] = readlineSync.questionInt('Tapez un nombre : ');
    }

    console.log(tableau1);
}







function exercice3b() {
    console.log(getTableauSaisi())

}


function exercice6() {
    const tableau1 = [2];

    for (let i = 0; i < 8; i++) {
        tableau1[i] = i + 2;
        console.log(tableau1[i]);
    }
}


function exercice7() { // avec une multiplication
    const tableau1 = [];

    for (let i = 1; i <= 10; i++) {
        tableau1[i - 1] = i * 5;
    }
    console.log(tableau1);
}



function exercice8a() {
    const tableau1 = [];

    for (let i = 1; i <= 10; i++) {
        tableau1[i - 1] = i * 5 + 3;
    }
    console.log(tableau1); // même que précédemment en ajoutant + 3 après la multiplication
}


function exercice9() {
    const tableau1 = [0, 1];

    for (let i = 2; i < 7; i++) {
        tableau1[i] = tableau1[i - 1] + tableau1[i - 2];
    }
    console.log(tableau1)
}







function exercice10() {

    //Ecrire un algorithme qui calcule et affiche la somme des valeurs renseignées par l'utilisateur (cf. exercice 3b), ainsi que la moyenne.

    const tableau1 = getTableauSaisi();
    const somme = getSommeTableau(tableau1);
    const moyenne = getMoyenne(somme, tableau1);

    console.log(`La somme des nombres saisis est de : ${somme}`);
    console.log(`La moyenne des nombres saisis est de : ${moyenne}`);


}


function exercice11() {
    const tableau1 = getTableauSaisi();
    nbPositifs = 0;
    nbNegatifs = 0;

    tableau1.forEach(element => {
        if (element < 0) {
            nbNegatifs += 1;
        } else {
            nbPositifs += 1;
        }
    });

    // for (let i = 0; i < tableau1.length; i++) {
    //     if (tableau1[i] < 0) {
    //         nbNegatifs += 1;
    //     } else {
    //         nbPositifs += 1;
    //     }
    // }
    console.log(`Vous avez saisi ${nbPositifs} nombres positifs et ${nbNegatifs} nombres négatifs`)
}



function exercice12() {
    const tableau1 = getTableauSaisi();

    for (let i = 0; i < tableau1.length; i++) {
        tableau1[i] += 1;
    }

    console.log(tableau1);

}




function exercice13() {
    const tableau1 = getTableauSaisi();
    let derniereValeur = 0;
    let position = 0;
    let laPlusGrande = 0;


    for (let i = 0; i < tableau1.length; i++) {

        derniereValeur = tableau1[i];
        if (derniereValeur > laPlusGrande) {
            laPlusGrande = derniereValeur;
            position = i + 1;
        }
    }
    console.log(`La valeur la plus grande est ${laPlusGrande} et elle arrive en position ${position}`)

}


function exercice14() {
    const tableau1 = getTableauSaisi();

    let somme = getSommeTableau(tableau1);
    let moyenne = getMoyenne(somme, tableau1);
    let supMoy = [];
    let j = 0;

    for (let i = 0; i < tableau1.length; i++) {
        if (tableau1[i] > moyenne) {
            supMoy[j] = tableau1[i];
            j++;
        }
    }
    console.log(`Moyenne de la classe : ${moyenne}`);
    console.log(`Liste des notes supérieures à la moyenne : ${supMoy}`);
    console.log(`Soit ${supMoy.length} notes`);

}



function exercice15() {




}


// function exercice16() {
//     let randomNumber = 10//getRandomInt(50);
//     let nombre1 = 1;
//     let nombre2 = 50;
//     let choix = 0;
//     let propositions = [];
//     let nombreDessais = 0;
//     let continueBoucle = true;
//     let temp = 0;


//     do {
//         choix = Math.ceil(Math.abs(nombre1 - nombre2) / 2);
//         nombreDessais++;
//         propositions[nombreDessais - 1] = choix;

//         if (choix === randomNumber) {
//             console.log(`Trouvé ! Le nombre était le ${randomNumber}`);
//             console.log(`Vos propositions : ${propositions}`);
//             console.log(`Il vous a fallu ${propositions.length} tentatives`);
//             continueBoucle = false;
//         } else if (randomNumber > choix) {
//             temp = choix;
//             nombre1 = temp;
//             nombre2 = 50

//         } else if (randomNumber < choix) {
//             temp = choix;
//             nombre2 = temp;
//             nombre1 = 1;

//         }
//     }
//     while (continueBoucle)

// }



function milieuIntervalle(x, y) {

    proposition = Math.ceil(Math.abs((x - y) / 2));
    return proposition;

}

function exercice16() {

    // Le programme choisi un nombre aléatoire à trouver entre  x = 1 et y = 50
    const randomNumber = 42//getRandomInt(50);


    // Le programme donne une proposition qui est la moitié de l'intervalle précédent (25)
    let proposition = milieuIntervalle(1, 50); //25

    let avantDernier = 0;
    while (proposition !== randomNumber) {
        avantDernier = proposition
        // Si la proposition est plus petite que le nombre à trouver :
        if (proposition < randomNumber) {
            //le programme passe dans l'intervalle 25 à 50   
            proposition = proposition + milieuIntervalle(proposition, 50); //38
            let temp = proposition //38
            if (temp < randomNumber) {
                proposition = proposition + milieuIntervalle(proposition, 50); // 44 
            } else if (temp > randomNumber) {
                proposition = proposition - milieuIntervalle(avantDernier, temp);
            }
        }
        if (proposition > randomNumber) {
            
        }
    }
    console.log('Trouvé !');

    // if (proposition1 > randomNumber) {
    //     proposition2 = milieuIntervalle(1, proposition1)
    // }

    // // Si la proposition est plus grande que le nombre à trouver :
    // else if (proposition > randomNumber) {
    //     //le programme passe dans l'intervalle 1 à 25 (12)
    //     derniereValeur = milieuIntervalle(1, proposition);
    // }
    // // Si la proposition est égale au nombre à trouver :
    // else if (proposition === randomNumber){
    //     console.log('Trouvé !');
    // }

    console.log(proposition);


}














function exercice17() {
    const tableau1 = [4, 8, 7, 9, 1, 5, 4, 6];
    const tableau2 = [7, 6, 5, 2, 1, 3, 7, 4];
    const tableau3 = [];

    for (let i = 0; i < tableau1.length; i++) {
        tableau3[i] = tableau1[i] + tableau2[i];
    }
    console.log(tableau3)
}


function exercice18() {
    const tableau1 = [4, 8, 7, 12];
    const tableau2 = [3, 6];
    const tableau3 = [];

    for (let i = 0; i < tableau1.length; i++) {
        tableau3[i] = tableau2[0] * tableau1[i] + tableau2[1] * tableau1[i];
    }
    console.log(getSommeTableau(tableau3));
}








function exercice19() {
    const resultat1 = ['Yoshi', 0, 'Toad', 0, 'Peach', 0, 'Bowser', 0, 'Mario', 0, 'Luigi', 0];
    const resultat2 = ['Yoshi', 0, 'Toad', 0, 'Peach', 0, 'Bowser', 0, 'Mario', 0, 'Luigi', 0];
    const points = [6, 4, 3, 2, 1, 0];
    const course1 = ['Toad', 6, 'Yoshi', 3, 'Luigi', 2, 'Bowser', 5, 'Mario', 4, 'Peach', 1];
    const course2 = ['Yoshi', 1, 'Toad', 2, 'Peach', 3, 'Bowser', 4, 'Mario', 5, 'Luigi', 6];


    //COURSE 1 : TABLEAUX DANS LE DESORDRE
    console.log('\n')
    console.log('CLASSEMENT COURSE 1 \n')
    // Trouver le nom du coureur

    for (let indexCourse = 0; indexCourse < course1.length; indexCourse += 2) {
        const nomDuCoureur = course1[indexCourse] // Toad

        // Trouver son nombre de points
        const nbPoints = points[course1[indexCourse + 1] - 1];

        // Ajouter les points dans le tableau résultat
        for (let indexResultat = 0; indexResultat < resultat1.length; indexResultat += 2) {
            if (nomDuCoureur === resultat1[indexResultat]) {
                resultat1[indexResultat + 1] = nbPoints;
            }

        }
    }
    console.log(resultat1)


    //COURSE 2 : TABLEAUX DANS L'ORDRE (ça ne change rien)
    console.log('\n')
    console.log('CLASSEMENT COURSE 2 \n')
    // Trouver le nom du coureur
    for (let indexCourse = 0; indexCourse < course2.length; indexCourse += 2) {
        const nomDuCoureur = course2[indexCourse] // Toad

        // Trouver son nombre de points
        const nbPoints = points[course2[indexCourse + 1] - 1];

        // Ajouter les points dans le tableau résultat
        for (let indexResultat = 0; indexResultat < resultat2.length; indexResultat += 2) {
            if (nomDuCoureur === resultat2[indexResultat]) {
                resultat2[indexResultat + 1] = nbPoints;
            }

        }
    }
    console.log(resultat2);



    //CLASSEMENT GENERAL
    console.log('\n')
    console.log('CLASSEMENT GENERAL \n')

    let classementGeneral = [];
    for (i = 0; i < 12; i += 2) {
        classementGeneral[i] = resultat1[i];
    }

    for (i = 1; i < 12; i += 2) {
        classementGeneral[i] = resultat1[i] + resultat2[i];
    }


    console.log(classementGeneral);
}




function exercice19b() { // refaire le 19 avec une fonction

}





function exercice19c() { // refaire le 19b en ordonnant le classement

}



















// exercice1();
// exercice2();
// exercice3();
// exercice3b();
// exercice4();
// exercice4b();
// exercice5();
// exercice6();
// exercice7();
// exercice8a();
// exercice8b();
//exercice9();
//exercice10();
// exercice10b();
exercice11();
// exercice12();
// exercice13();
// exercice14();
// exercice14b();
// exercice15();
//exercice16();

// exercice17();
// exercice18();

// exercice19();
// exercice19b();
// exercice19c();

