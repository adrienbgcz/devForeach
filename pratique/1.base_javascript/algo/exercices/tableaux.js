const readlineSync = require('readline-sync');


function affichageMenu() {
    console.log('1 - exercice1')
    console.log('2 - exercice2')
    console.log('3 - exercice3')
    console.log('3b - exercice3b')
    console.log('4 - exercice4')
    console.log('4b - exercice4b')
    console.log('5 - exercice5')
    console.log('6 - exercice6')
    console.log('7 - exercice7')
    console.log('8a - exercice8a')
    console.log('8b - exercice8b')
    console.log('9 - exercice9')
    console.log('10 - exercice10')
    console.log('10b - exercice10b')
    console.log('11 - exercice11')
    console.log('12 - exercice12')
    console.log('13 - exercice13')
    console.log('14 - exercice14')
    console.log('14b - exercice14b')
    console.log('15 - exercice15')
    console.log('16 - exercice16')
    console.log('16b - solutionForceBrutExo16')
    console.log('17 - exercice17')
    console.log('18 - exercice18')
    console.log('19 - exercice19')
}

let quitter = false;

do {
    affichageMenu();
    const menu = readlineSync.question('Lancer l\'exercice...')

    switch (menu) {

        case '1': {
            exercice1();
            break;
        }

        case '2': {
            exercice2();
            break;
        }

        case '3': {
            exercice3();
            break;
        }

        case '3b': {
            exercice3b();
            break;
        }

        case '4': {
            exercice4();
            break;
        }

        case '4b': {
            exercice4b();
            break;
        }

        case '5': {
            exercice5();
            break;
        }

        case '6': {
            exercice6();
            break;
        }

        case '7': {
            exercice7();
            break;
        }

        case '8a': {
            exercice8a();
            break;
        }

        case '8b': {
            exercice8b();
            break;
        }

        case '9': {
            exercice9();
            break;
        }

        case '10': {
            exercice10();
            break;
        }

        case '10b': {
            exercice10b();
            break;
        }

        case '11': {
            exercice11();
            break;
        }

        case '12': {
            exercice12();
            break;
        }

        case '13': {
            exercice13();
            break;
        }


        case '14': {
            exercice14();
            break;
        }


        case '14b': {
            exercice14b();
            break;
        }


        case '15': {
            exercice15();
            break;
        }


        case '16': {
            exercice16();
            break;
        }


        case '17': {
            exercice17();
            break;
        }


        case '18': {
            exercice18();
            break;
        }

        case '19': {
            exercice19();
            break;
        }

        case '0': {
            quitter = true;
            break;
        }

        default: {
            console.log("Votre saisie ne correspond pas au menu");
            break;
        }

    }

} while (!quitter);







function getMoyenneTableau(tableau) {
    let somme = 0;

    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    return somme / tableau.length;
}


function getTableauSaisi() {
    const tableau = [];
    saisie = 0;
    i = 0;
    while (!isNaN(saisie)) {
        saisie = readlineSync.question();
        if (!isNaN(saisie)) {
            tableau(i++) = saisie;
        }
        return tableau;
    }

}

function exercice1() {

    const tableau1 = [0, 0, 0, 0, 0, 0, 0];

    const tableau2 = [];
    for (let i = 0; i < 7; i++) {
        tableau2[i] = 0;
    }

    console.log(tableau2);


}


function exercice2() {
    const tableau1 = [];
    tableau1[0] = ['a'];
    tableau1[1] = ['e'];
    tableau1[2] = ['i'];
    tableau1[3] = ['o'];
    tableau1[4] = ['u'];
    tableau1[5] = ['y'];

    console.log(tableau1);
}


function exercice3() {

    const tableau1 = [];

    for (let i = 0; i < 9; i++) {
        const valeur = readlineSync.question('Entrez une valeur : ');
        tableau1[i] = valeur;
    }

    console.log(tableau1);
}


function exercice3b() {
    const tableau1 = [];
    let valeur = 1; // possibilité de laisser undefined
    let i = 0;

    while (valeur != 0) {

        valeur = readlineSync.question('Entrez une valeur : ');

        if (valeur != 0) {
            tableau1[i] = valeur;
            i += 1;
        }
    }

    console.log(tableau1);
}


// Que fait cet algorithme ? 
// Peut-on simplifier cet algorithme avec le même résultat ?
function exercice4() {
    const nb = [];
    let i;
    for (i = 0; i < 5; i++) {
        nb[i] = i * i;

    }
    for (i = 0; i < 5; i++) {
        console.log(nb[i])
    }
}

// --> 


function exercice4b() {

}

// Que fait cet algorithme ? 
// Peut-on simplifier cet algorithme avec le même résultat ?
function exercice5() {
    const n = [];
    n[0] = 1;
    for (let k = 0; k <= 6; k++) {
        n[k] = n[k - 1] + 2;
    }
    for (let i = 0; i < 7; i++) {
        console.log(n[i])
    }
}


function exercice5b() {

}


function exercice6() {
    const nb = [];

    for (let i = 0; i < 8; i++) {
        nb[i] = 2 + i;
        console.log(nb[i]);
    }

}

// function U(n) {
//   return 2 + n; 
// }







// function exercice7() {
//     const nb = [];

//     for (let i = 0; i < 50; i += 5) { // pourquoi 50 s'affiche ?
//         nb[i] = 5 + i;
//         console.log(nb[i]);
//     }
// }



// soit la suite : 5, 10, 15, 20 ... Ecrire un algorithme qui permet de déterminer les 10 premières valeurs de cette suite et afficher les valeurs.

function exercice7() {
    const tableau1 = [0];               // affiche la suite brute


    for (let i = 1; i < 11; i++) {
        tableau1[i] = tableau1[i - 1] + 5;
        console.log(tableau1[i]);
    }

}


function exercice7b() {                 // affiche la suite sous forme de tableau
    const tableau1 = [5];

    for (let i = 1; i < 10; i++) {
        tableau1[i] = tableau1[i - 1] + 5;

    }
    console.log(tableau1);
}


// function exercice8() {
//     const nb = [];

//     for (let i = -2; i < 45; i += 5) { //idem
//         nb[i] = 5 + i;
//         console.log(nb[i]);
//     }
// }




// soit la suite : 3, 8, 13, 18 ... Ecrire un algorithme qui permet de déterminer les 10 premières valeurs de cette suite et afficher les valeurs.


function exercice8a() {             // affiche la suite brute
    const tableau1 = [-2];

    for (let i = 1; i < 11; i++) {
        tableau1[i] = tableau1[i - 1] + 5;

        console.log(tableau1[i]);
    }

}


function exercice8b() {             // affiche la suite sous forme de tableau
    const tableau1 = [3];

    for (let i = 1; i < 10; i++) {
        tableau1[i] = tableau1[i - 1] + 5;
    }
    console.log(tableau1);

}



function exercice9() {

    const tableau1 = [0, 1];


    for (let i = 2; i < 15; i++) {
        tableau1[i] = tableau1[i - 1] + tableau1[i - 2];

        console.log(tableau1[i]);
    }
}


function exercice10() {
    const tableau1 = [];
    let valeur = 1;
    let i = 0;
    let somme = 0;
    let moyenne = 0;

    while (valeur != 0) {

        valeur = readlineSync.questionInt('Entrez une valeur : ');

        if (valeur != 0) {
            tableau1[i] = valeur;
            somme += valeur;
            i += 1;
            moyenne = somme / i;

        }

    }

    console.log(somme);
    console.log(moyenne);
}



function exercice10b() {
    const tableau1 = [];
    let valeur = 1;
    let i = 0;
    let somme = 0;
    let moyenne = 0;

    while (valeur != 0) {

        valeur = readlineSync.questionInt('Entrez une valeur : ');

        if (valeur != 0) {
            tableau1[i] = valeur;
            somme += valeur;
            i += 1;
        }
    }

    moyenne = somme / tableau1.length;


    console.log(somme);
    console.log(moyenne);
}


function exercice11() {
    const nbSouhaite = readlineSync.questionInt('Entrez le nombre de valeurs souhaitées : ');
    const tableau1 = [];
    let nbPositifs = 0;
    let nbNegatifs = 0;

    for (i = 0; i < nbSouhaite; i++) {
        tableau1[i] = readlineSync.questionInt('Entrez un nombre : ');

        if (tableau1[i] < 0) {
            nbNegatifs += 1;
        } else if (tableau1[i] > 0) {
            nbPositifs += 1;
        }
    }
    console.log(`Valeurs positives : ${nbPositifs}`);
    console.log(`Valeurs négatives : ${nbNegatifs}`);


}


function exercice12() {

    const tableau1 = [];

    for (let i = 0; i < 10; i++) {
        tableau1[i] = readlineSync.questionInt('Entrez un nombre : ') + 1;
    }

    console.log(tableau1);

}



function exercice13() {
    const tableau1 = [];
    let valeur = 0;

    for (let i = 0; i < 5; i++) {
        tableau1[i] = readlineSync.questionInt('Entrez un nombre : ');
    }

    for (let i = 0; i < 5; i++) {
        if (tableau1[i] > valeur) {
            valeur = tableau1[i];
        }
    }
    console.log(valeur);

}



function exercice14() { // 

    const tableau1 = [];
    let valeursSup = 0;

    for (let i = 0; i < 5; i++) {
        tableau1[i] = readlineSync.questionInt('Entrez un nombre : ');
    }


    for (let i = 0; i < 5; i++) {
        if (tableau1[i] > getMoyenneTableau(tableau1)) {// mettre la méthode dans une variable sinon on va repasser dans la fonction à chaque itération alors que la moyenne ne change jamais 
            valeursSup += 1;
        }
    }
    console.log(valeursSup);
}



function exercice14b() {

    const tableau1 = [];
    let somme = 0;
    let moyenne = 0;
    let valeursSup = 0;

    for (let i = 0; i < 5; i++) {
        tableau1[i] = readlineSync.questionInt('Entrez un nombre : ');
        somme += tableau1[i];
    }

    moyenne = somme / tableau1.length;

    for (let i = 0; i < 5; i++) {
        if (tableau1[i] > moyenne) {
            valeursSup += 1;
        }
    }
    console.log(valeursSup);
}



// function exercice15() {

//     function getRandomInt(max) {
//         return Math.floor(Math.random() * Math.floor(max + 1));
//     }

//     let nombre = getRandomInt(50);

//     let propositions = [];
//     let derniereValeur = 0;
//     let tentatives = 0

//     for (let i = 0; i < 50; i++) {
//         propositions[i] = readlineSync.questionInt('Tentez de deviner un nombre entre 1 et 50 : ');
//         derniereValeur = propositions[i];
//         tentatives += 1;

//         if (derniereValeur > nombre) {
//             console.log('Plus petit !');
//         } else if (derniereValeur < nombre) {
//             console.log('Plus grand !');
//         } else {
//             console.log('Trouvé !');
//             i = 50;
//         }
//     }
//     console.log(`Vous avez trouvé le bon nombre en ${tentatives} tentatives`);
//     console.log(`Vos propositions : ${propositions}`);

// }


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max + 1));
}



function exercice15() {

    let nombre = getRandomInt(50);

    let propositions = [];
    let derniereValeur = 0;
    let i = 0;
    let continueBoucle = true;

    do {
        derniereValeur = readlineSync.questionInt('Tentez de deviner un nombre entre 1 et 50 : ');
        propositions[i++] = derniereValeur;
        // i = i + 1;
        // OU
        // i = propositions.length;
        // à la place du ++;  

        if (derniereValeur > nombre) {
            console.log('Plus petit !');
        } else if (derniereValeur < nombre) {
            console.log('Plus grand !');
        } else {
            console.log('Trouvé !');
            continueBoucle = false;
        }
    }
    // while (nombre != derniereValeur)
    while (continueBoucle);



    console.log(`Vous avez trouvé le bon nombre en ${propositions.length} tentatives`);
    console.log(`Vos propositions : ${propositions}`);

}

// function exercice16() {
//     function getRandomInt(max) {
//         return Math.floor(Math.random() * Math.floor(max + 1));
//     }

//     function getRandomArbitrary(min, max) {
//         return Math.random() * (max + 1 - min) + min;
//       }

//     let nombreATrouver = getRandomInt(50);


//     let propositions = [];
//     let derniereValeur = 0;
//     let tentatives = 0

//     for (let i = 0; i < 50; i++) {
//         propositions[i] = getRandomInt(25);
//         derniereValeur = propositions[i];
//         tentatives += 1;

//         while (derniereValeur != nombreATrouver) {

//             if(derniereValeur > nombreATrouver){
//                  getRandomArbitrary(nombreATrouver,derniereValeur)
//             } else if (derniereValeur < nombreATrouver) {
//                 getRandomArbitrary(derniereValeur,nombreATrouver)
//             } else {
//                 console.log('Trouvé !')
//             }
//         }


//     }
//     console.log(`Vous avez trouvé le bon nombre en ${tentatives} tentatives`);
//     console.log(`Vos propositions : ${propositions}`);

// }

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



// function exercice16() {




//     let nombreATrouver = getRandomInt(50);
//     let propositions = [];
//     let derniereValeur = getRandomInt(50);
//     let i = 0;


//     do {

//         propositions[i++] = derniereValeur;                // min-max/2 ==> pour trouver le chiffre du milieu


//         if (derniereValeur > nombreATrouver) {
//             derniereValeur = (derniereValeur - nombreATrouver) / 2;
//             // déplacer les min et max 
//         } else if (derniereValeur < nombreATrouver) {
//             derniereValeur = (nombreATrouver - derniereValeur) / 2;
//         } else {
//             console.log('Trouvé !')

//         }
//     } while (derniereValeur != nombreATrouver)



//     console.log(`Vous avez trouvé le bon nombre en ${propositions.length} tentatives`);
//     console.log(`Vos propositions : ${propositions}`);


// }





// On souhaite maintenant faire la recherche à l'aide d'un algorithme. 
// Le programme décide d'un nombre aléatoire entre 1 et 50 et essaie ensuite de deviner ce nombre. 
// On affiche alors le nombre de tentative qu'il a fallu et les nombre qui ont été testé avant de trouver la solution.
// function solutionForceBrutExo16(randomNumber) {

//     let randomNumber = getRandomInt(50);
//     let expectedNumber = 0;

//     for (let i = 0 ; i < 50; i ++) {
//         expectedNumber
//     }


// }


// function solutionAleatoireExo16(randomNumber) {

// }



// function solutionDichotomieExo16(randomNumber) {
// }



// function exercice16() {
//     let randomNumber = getRandomInt(50);
//     // 1ere solution, force brute for 1 - 50 
//     solutionForceBrutExo16(randomNumber);
//     // 2eme solution, aleatoire
//     //solutionAleatoireExo16(randomNumber);
//     // 3eme soltuion, algo de recherche dichotomique 
//     // https://fr.wikipedia.org/wiki/Recherche_dichotomique
//     //solutionDichotomieExo16(randomNumber);
// }





// function exercice17() {

//     const tableau1 = [4, 8, 7, 9, 1, 5, 4, 6];
//     const tableau2 = [7, 6, 5, 2, 1, 3, 7, 4];
//     const tableau3 = [];
//     let somme = 0;

//     for (let i = 0; i < tableau1.length; i++) {
//         somme += tableau1[i];
//         somme += tableau2[i];
//         tableau3[i] = somme;
//         somme = 0;
//     }

//     console.log(tableau3);

// }



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
    let somme = 0;
    let sommeTotale = 0;


    for (let i = 0; i < tableau1.length; i++) {

        somme += (tableau1[i] * tableau2[0]) + (tableau1[i] * tableau2[1]);
        sommeTotale += somme;
        somme = 0;
    }
    console.log(sommeTotale);

}



// Soit le tableau resultat: ['Yoshi', 0, 'Toad', 0, 'Peach', 0, 'Bowser', 0, 'Mario', 0, 'Luigi', 0]; Soit le tableau point : [6, 4, 3, 2, 1, 0] Soit le tableau course (les coureur sont dans le meme ordre que resultat ) : [ 'Yoshi', 1, 'Toad', 2, 'Peach', 3, 'Bowser', 4, 'Mario', 5, 'Luigi', 6];
// Ecrire un algorithme permettant de retrouver pour chaque coureur le nombre de points correspondant a son classement et de mettre dans le tableau de resultat.
// b. Faite de meme avec la course suivant : [ 'Yoshi', 6, 'Toad', 3, 'Peach', 2, 'Bowser', 5, 'Mario', 4, 'Luigi', 1]; c. Calculer le vainqueur si on considère les 2 courses.

// function exercice19() {
//     const resultat = ['Yoshi', 0, 'Toad', 0, 'Peach', 0, 'Bowser', 0, 'Mario', 0, 'Luigi', 0];
//     const points = [6, 4, 3, 2, 1, 0];

//     //const course = ['Yoshi', 1, 'Toad', 2, 'Peach', 3, 'Bowser', 4, 'Mario', 5, 'Luigi', 6];
//     // const course2 = ['Yoshi', 6, 'Toad', 3, 'Peach', 2, 'Bowser', 5, 'Mario', 4, 'Luigi', 1];
//     const course3 = ['Toad', 6, 'Yoshi', 3, 'Luigi', 2, 'Bowser', 5, 'Mario', 4, 'Peach', 1];




//     // Parcourir le tableau course en augmentant de 2 l'index (indexCourse) à chaque tour
//     // ex : 'yoshi'= index 0     place yoshi = index 1
//     // ex : 'mario'= index 8     place mario = index 9  
//     for (let indexCourse = 0; indexCourse < course3.length; indexCourse += 2) {

//         const nomDuCoureur = course3[indexCourse]; // Toad

//         // Trouver la place dans la course
//         const placeDansLaCourse = course3[indexCourse + 1]; // 6

//         // Aller chercher le nombre de points correspondant dans le tableau points (valeur dans le tableau points à placeDansLaCourse - 1)
//         const nbPoints = points[placeDansLaCourse - 1]; // 0

//         for (let indexResultat = 0; indexResultat < resultat.length; indexResultat += 2) {
//             if (nomDuCoureur === resultat[indexResultat]) {
//                 // Ajouter les points au tableau résultats
//                 resultat[indexResultat + 1] = resultat[indexResultat + 1] + nbPoints;

//             }

//         }
//     }
//     console.log(resultat);





    // for (let indexCourse = 0; indexCourse < course2.length; indexCourse += 2) {
    //     // Trouver la place dans la course
    //     const placeDansLaCourse = course2[indexCourse + 1];
    //     // Aller chercher le nombre de points correspondant dans le tableau points (valeur dans le tableau points à placeDansLaCourse - 1)
    //     const nbPoints = points[placeDansLaCourse - 1];
    //     // Ajouter les points au tableau résultats
    //     resultat[indexCourse + 1] = resultat[indexCourse + 1] + nbPoints;
    // }
    // console.log(resultat);

//}


    // Ajouter les index pair du tableau course à la même place dans le tableau résultat




    // Parcourir le tableau course



    // Parcourir le tableau points




    // Mettre les chiffre du tableau points, dans l'ordre, à la place des index impairs du tableau résultat





    // Afficher le tableau résultat









    // // Parcourir le tableau course
    // for (let i = 0; i < course.length; i++) {
    //     // Ajouter les index pair du tableau course à la même place dans le tableau résultat
    //     if (i % 2 === 0) {
    //         resultat[i] = course[i]
    //     }
    // }


   
    function calculPointsCourse (course, resultat) {
        const points = [6, 4, 3, 2, 1, 0];

        for (let indexCourse = 0; indexCourse < course.length; indexCourse += 2) {
    
            const nomDuCoureur = course[indexCourse]; // Toad
    
            // Trouver la place dans la course
            const placeDansLaCourse = course[indexCourse + 1]; // 6
    
            // Aller chercher le nombre de points correspondant dans le tableau points (valeur dans le tableau points à placeDansLaCourse - 1)
            const nbPoints = points[placeDansLaCourse - 1]; // 0
    
            for (let indexResultat = 0; indexResultat < resultat.length; indexResultat += 2) {
                if (nomDuCoureur === resultat[indexResultat]) {
                    // Ajouter les points au tableau résultats
                    resultat[indexResultat + 1] = resultat[indexResultat + 1] + nbPoints;
    
                }
    
            }
        }

        console.log(resultat);
    }
    
    
    
    
    
    
    
    function exercice19() {
        const resultat = ['Yoshi', 0, 'Toad', 0, 'Peach', 0, 'Bowser', 0, 'Mario', 0, 'Luigi', 0];
        
    
        //const course = ['Yoshi', 1, 'Toad', 2, 'Peach', 3, 'Bowser', 4, 'Mario', 5, 'Luigi', 6];
        // const course2 = ['Yoshi', 6, 'Toad', 3, 'Peach', 2, 'Bowser', 5, 'Mario', 4, 'Luigi', 1];
        const course3 = ['Toad', 6, 'Yoshi', 3, 'Luigi', 2, 'Bowser', 5, 'Mario', 4, 'Peach', 1];
    
    
        // Parcourir le tableau course en augmentant de 2 l'index (indexCourse) à chaque tour
        // ex : 'yoshi'= index 0     place yoshi = index 1
        // ex : 'mario'= index 8     place mario = index 9  

        
        
        calculPointsCourse(course3, resultat);
    }
    
















//     for (let i = 0; i < course.length; i++) {

//         if (i % 2 != 0) {
//             compteurCourse += 1;
//             resultat[i] = points[compteurCourse];

//         }

//         else if (i % 2 == 0) {
//             resultat[i] = course[i];
//             compteurCourse -= 1;
//         }

//     }

//     console.log(resultat);


// }









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
// exercice9();
// exercice10();
// exercice10b();
// exercice11();
// exercice12();
// exercice13();
// exercice14();
// exercice14b();
// exercice15();
//exercice16();


// exercice17();
// exercice18();

