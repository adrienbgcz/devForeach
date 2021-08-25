
const readlineSync = require('readline-sync');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max + 1));
}



// On souhaite maintenant faire la recherche à l'aide d'un algorithme. 
// Le programme décide d'un nombre aléatoire entre 1 et 50 et essaie ensuite de deviner ce nombre. 
// On affiche alors le nombre de tentative qu'il a fallu et les nombre qui ont été testé avant de trouver la solution.

function solutionForceBrutExo16(randomNumber) {


    let propositions = [];
    let continueBoucle = true;

    for (let i = 1; i <= 50 && continueBoucle; i++) {
        propositions[propositions.length] = i; // pour mettre 1 à l'index 0;
        if (i === randomNumber) {
            continueBoucle = false;
            console.log(`Trouvé ! Le nombre était le ${randomNumber}`);
            console.log(`Vos propositions : ${propositions}`);
            console.log(`Il vous a fallu ${propositions.length} tentatives`);
        }

    }
}



function solutionAleatoireExo16(randomNumber) {

    let propositions = [0];
    let solutionAleatoire = 0;
    let i = 0;

    do {
        solutionAleatoire = getRandomInt(50);

        if (solutionAleatoire !== propositions[i - 1]) { // ICI PROBLEME : je ne rentre pas 2 nombres similiares consécutivement mais ils peuvent encore être proposés
            propositions[i] = solutionAleatoire;         // Solution pour revérifier tout le tableau ? 
            i++;
            if (solutionAleatoire === randomNumber) {
                console.log('Trouvé !');
                console.log(propositions);
            }
        }
    } while (solutionAleatoire !== randomNumber)
}




// function solutionAleatoireExo16(randomNumber) {
//     let propositions = [];
//     let derniereValeur = 0;
//     let continueBoucle = true;

//     do {
//         for (let i = 0; i < propositions.length; i++) {
//             derniereValeur = getRandomInt(50); // enlever les propositions déjà enregistrées ?
//             propositions[i] = derniereValeur;
//             if (propositions[i] !== randomNumber) {
//                 propositions[i] = derniereValeur;
//             }
//         else if (derniereValeur === randomNumber) {
//             console.log(`\nTrouvé ! Le nombre était le ${randomNumber}\n`);
//             console.log(`Vos propositions : ${propositions}\n`);
//             console.log(`Il vous a fallu ${propositions.length} tentatives\n`);
//             continueBoucle = false;
//         }

//     } while (continueBoucle);
// }






function solutionDichotomieExo16(randomNumber) {
    let propositions = [25];
    let derniereValeur = 0;
    let i = 1;

    do {
        if (derniereValeur === randomNumber) {
            console.log(`Trouvé ! Le nombre était le ${randomNumber}`);
            console.log(`Vos propositions : ${propositions}`);
            console.log(`Il vous a fallu ${propositions.length} tentatives`);
        } else if (derniereValeur > randomNumber) {
            derniereValeur = (propositions[i] - propositions[i - 1]) / 2
            propositions[i++] = derniereValeur;
        } else {
            derniereValeur = (propositions[i - 1] - propositions[i]) / 2
            propositions[i++] = derniereValeur;
        }
    }
    while (derniereValeur !== randomNumber);
}





function exercice16() {
    let randomNumber = getRandomInt(50);
    // 1ere solution, force brute for 1 - 50 
    // solutionForceBrutExo16(randomNumber);
    // 2eme solution, aleatoire
    solutionAleatoireExo16(randomNumber);
    // 3eme soltuion, algo de recherche dichotomique 
    // https://fr.wikipedia.org/wiki/Recherche_dichotomique
    // solutionDichotomieExo16(randomNumber);
}




// Correction exercice16 ==> trouver des cas test avant de tester l'aléatoire, créer une fonction à part pour pouvoir tester le code par morceaux,
// utiliser une fonction pour passer les nombres positifs en négatifs


function milieuDuTableau(x, y) {
    return Math.ceil(Math.abs((x - y) / 2))
}

// console.log(milieuDuTableau(1,7)) // 3
// console.log(milieuDuTableau(1,12)) // 6
// console.log(milieuDuTableau(25, 50)) // 13
// console.log(milieuDuTableau(1,50)) // 25

function solutionDichotomieExo16(randomNumber) {
    console.log('il faut trouver:' + randomNumber)
    let choix = milieuDuTableau(1, 50) // 1) 25
    console.log('Premier choix: ' + choix)
    let avantDernier = 0

    //tant que choix != randomNumber
    //1) 42 - 25 - 0
    //2) 42 - 38 - 25
    //3) 42 - 
    while (randomNumber != choix) {
        if (randomNumber > choix) {
            let temp = choix
            if (avantDernier === 0) {
                avantDernier = 50
            }
            choix = choix + milieuDuTableau(choix, avantDernier)
            avantDernier = temp
        } else if (randomNumber < choix) {
            let temp = choix
            if (avantDernier === 0) {
                avantDernier = 1
            }
            choix = choix - milieuDuTableau(avantDernier, choix)
            avantDernier = temp
        }
        console.log(`Choix : ${choix}`) // 13
        //console.log(avantDernier) //25
        console.log('***********************')
    }
}
//test(1)
//test(getRandomInt(50));
//test(50)







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
    // déclarer 2 tableaux 
    const tableau1 = [4, 8, 7, 12];
    const tableau2 = [3, 6];
    // déclarer une variable résultat
    let result = 0;

    // Parcourir le tableau 1
    for (let i = 0; i < tableau1.length; i++) {
        //Parcourir le tableau 2
        for (let j = 0; j < tableau2.length; j++)
            // Commencer par multiplier l'index 0 du tableau1 par chaque index du tableau 2
            // Revenir au tableau 1 et passer à l'index suivant
            // ajouter le résultat dans une variable
            result += (tableau1[i] * tableau2[j]);
    }
    // Afficher le résultat
    console.log(result);

}


// 1) i=0 ==> j=0 ==> 3*4 ==> somme ==> j=1
// 2)         j=1 ==> 6*4 ==> somme ==> j=2 ==> i=1
// 3) i=1 ==> j=0 ==> 3*8 ==> somme ==> j=1
// 4)         j=1 ==> 6*8 ==> somme ==> j=2 ==> i=2
// etc.










exercice16();
// exercice17();
// exercice18();
