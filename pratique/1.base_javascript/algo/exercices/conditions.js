const readlineSync = require('readline-sync');

function exercice1() {
    let number = readlineSync.question('Donner un nombre :');
    if (number < 0) {                                                //Pourquoi number est un string et ça fonctionne quand même ?
        console.log(number, 'est négatif');
    } else if (number > 0) {
        console.log(number, 'est positif');
    }
}






function exercice2() {
    let firstNumber = readlineSync.question('Donner un premier nombre : ');
    let secondNumber = readlineSync.question('Donner un second nombre : ');
    if ((firstNumber > 0 && secondNumber > 0) || (firstNumber < 0 && secondNumber < 0)) {
        console.log('Le produit des 2 nombres est positif');
    } else if ((firstNumber < 0 && secondNumber > 0) || (firstNumber > 0 && secondNumber < 0)) {
        console.log('Le produit des 2 nombres est négatif');
    } else {
        console.log('Le produit des 2 nombres est nul');
    }
}







function exercice3() {
    let firstName = readlineSync.question('Donner un premier nom : ');
    let secondName = readlineSync.question('Donner un second nom : ');
    let thirdName = readlineSync.question('Donner un troisième nom : ');

    if (firstName.toUpperCase() < secondName.toUpperCase() && secondName.toUpperCase() < thirdName.toUpperCase()) {
        console.log('Les noms sont rangés dans l\'ordre alphabétique');
    } else {
        console.log('Les noms ne sont pas rangés dans l\'ordre alphabétique');
    }
}






function exercice4() {
    let number = readlineSync.question('Donner un nombre :');
    if (number < 0) {
        console.log(number, 'est négatif');
    } else if (number > 0) {
        console.log(number, 'est positif');
    } else {
        console.log('Le nombre vaut 0');
    }
}

function exercice5() {
    let firstNumber = readlineSync.question('Donner un premier nombre : ');
    let secondNumber = readlineSync.question('Donner un second nombre : ');
    if (firstNumber > 0 && secondNumber > 0) {
        console.log('Le produit des 2 nombres est positif');
    } else if (firstNumber < 0 && secondNumber > 0) {
        console.log('Le produit des 2 nombres est négatif');
    } else if (firstNumber > 0 && secondNumber < 0) {
        console.log('Le produit des 2 nombres est négatif');
    } else if (firstNumber < 0 && secondNumber < 0) {
        console.log('Le produit des 2 nombres est positif');
    } else if (firstNumber == 0 || secondNumber == 0) {
        console.log('Le produit des 2 nombres est nul');
    }
}


function exercice6() {
    let childrenAge = readlineSync.question('Entrez l\'âge de votre enfant : ');
    if (childrenAge >= 6 && childrenAge < 8) {
        console.log('Poussin');
    } else if (childrenAge >= 8 && childrenAge < 10) {
        console.log('Pupille');
    } else if (childrenAge >= 10 && childrenAge < 12) {
        console.log('Minime');
    } else if (childrenAge >= 12) {
        console.log('Cadet');
    } else {
        console.log('Vous devez entrer un chiffre supérieur ou égal à 6');
    }
}



function isLeapYear(yearEntered) {
    return yearEntered % 400 == 0 || (yearEntered % 100 == 0 && yearEntered % 4 != 0) // retourne un boolean
}

function exercice7() {
    let month = readlineSync.question('Mois : ');

    if (isNaN(month)) {
        console.log('Veuillez renseigner un nombre');
    } else if (month > 12 || month < 1) {
        console.log('Veuillez renseigner un nombre entre 1 et 12');
    } else if (month == 2) {
        let year = readlineSync.question('Année : ');
        if (isLeapYear(year)) {
            console.log('En', year + ', le mois de février comprend 29 jours');
        } else {
            console.log('En', year + ', le mois de février comprend 28 jours');
        }
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        console.log('Ce mois contient 31 jours');
    } else {
        console.log('Ce mois contient 30 jours');
    }

}



// exercice 8 :
// Écrire un algorithme qui simule le jeu de pile ou face.
// Déroulement du jeu : l'utilisateur saisit la lettre P pour pile, et F pour face, puis valide sa saisie . Le programme, lui, choisit aléatoirement un nombre entre 0 et 1 (0 pour pile, 1 pour face).
// Le programme affiche un message : gagné ou perdu.
// indication: regarder la documentation mdn de Math.random()


// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }

// function exercice8() {
//     let result = readlineSync.question('Tapez P pour pile ou F pour face : ');
//     if (result == 'P' || result == 'p') {
//         result = 1;
//         let randomNumber = getRandomInt(2);
//         if (randomNumber == result) {
//             console.log('Gagné !');
//         } else {
//             console.log('Perdu !');
//         }
//     } else if (result == 'F' || result == 'f') {
//         result = 0;

//         let randomNumber = getRandomInt(2);
//         if (randomNumber == result) {
//             console.log('Gagné !');
//         } else {
//             console.log('Perdu !');
//         }
//     } else {
//         console.log('Tapez P ou F');
//     }

//     console.log(getRandomInt(2));
// }



// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max + 1));
// }

// function affichageResultat(expectedResult){
//     let randomNumber = getRandomInt(1);
//     if (randomNumber == expectedResult) {
//         console.log('Gagné !');
//     } else {
//         console.log('Perdu !');
//     }

// }

// function exercice8b() {
//     let result = readlineSync.question('Tapez P pour pile ou F pour face : ');
//     if (result == 'P' || result == 'p') {
//         affichageResultat(1);
//     } else if (result == 'F' || result == 'f') {
//         affichageResultat(0);
//     } else {
//         console.log('Tapez P ou F');
//     }
// }



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max + 1));
}

function exercice8c() {
    let result = readlineSync.question('Tapez P pour pile ou F pour face : ');
    const nombreAleatoire = getRandomInt(1);
    if (result.toUpperCase() != 'P' && result.toUpperCase() != 'F') {
        console.log('Tapez P ou F');
    } else {
        if ((result.toUpperCase() == 'P' && nombreAleatoire == 1) || (result.toUpperCase == 'F' && nombreAleatoire == 0)) {
            console.log('Gagné !');
        } else {
            console.log('Perdu !');
        }
    }
}





    // exercice 9 :
    // L'utilisateur saisit la date au format jj/mm/aaaa, et le programme affiche la date avec le mois en lettres.
    // Exemple : si l'utilisateur saisit 15/10/2020, alors le programme affiche : Aujourd'hui, nous sommes le 15 Octobre 2020.

    function exercice9() {
        let date = readlineSync.question('Saisissez une date au format jj/mm/aaaa : ');

        let day = date.substring(0,2);  //date.charAt(0) + date.charAt(1);
        let month = date.substring(3,5); // date.charAt(3) + date.charAt(4);
        let year = date.substring(8,10); // date.charAt(8) + date.charAt(9);

        

        // function monthToString(month) {
        //     if (month == 01) {
        //         return month.replace(01, 'janvier')  
        //     } else if (month == 02) {
        //         return month.replace(02, 'février')
        //     } else if (month == 03) {
        //         return month.replace(03, 'mars')
        //     } else if (month == 04) {
        //         return month.replace(04, 'avril')
        //     } else if (month == 05) {
        //         return month.replace(05, 'mai')
        //     } else if (month == 06) {
        //         return month.replace(06, 'juin')
        //     } else if (month == 07) {
        //         return month.replace(07, 'juillet')
        //     } else if (month == 08) {
        //         return month.replace(08, 'aout')
        //     } else if (month == 09) {
        //         return month.replace(09, 'septembre')
        //     } else if (month == 10) {
        //         return month.replace(10, 'octobre')
        //     } else if (month == 11) {
        //         return month.replace(11, 'novembre')
        //     } else if (month == 12) {
        //         return month.replace(12, 'décembre')
        //     }
        // }


        function monthToString2(month) {                // possibilité d'utiliser un switch
                if (month == 01) {
                    return 'janvier';  
                } else if (month == 02) {
                    return 'février';
                } else if (month == 03) {
                    return 'mars';
                } else if (month == 04) {
                    return 'avril';
                } else if (month == 05) {
                    return 'mai';
                } else if (month == 06) {
                    return 'juin';
                } else if (month == 07) {
                    return 'juillet';
                } else if (month == 08) {
                    return 'aout';
                } else if (month == 09) {
                    return 'septembre';
                } else if (month == 10) {
                    return 'octobre';
                } else if (month == 11) {
                    return 'novembre';
                } else if (month == 12) {
                    return 'décembre';
                }
            }

        console.log('Aujourd\'hui, nous sommes le', day, monthToString2(month), year);
    }




    // exercice 10 :
    // Écrire un algorithme qui propose un menu affiché à l'écran, et qui, en fonction du choix fait par l'utilisateur, effectue soit la somme, soit le produit, soit la
    // moyenne de 2 nombres saisis.

    function exercice10() {

        let number1 = readlineSync.questionInt('Entrez un premier nombre : '); // Number.parseInt(readlineSync.question('Entrez un premier nombre : '));
        let number2 = readlineSync.questionInt('Entrez un second nombre : ');  // utiliser {limitMessage : 'mon message'} de questionInt pour écrire notre propre message 
        let result;

        console.log('1 - Somme');
        console.log('2 - Produit');
        console.log('3 - Moyenne');


        let choice = readlineSync.question('Votre choix :')

        function somme(firstNumber, secondNumber) {
            result = firstNumber + secondNumber;                            // j'ai mis questionInt sinon le + concatène au lieu d'additionner
        }

        function produit(firstNumber, secondNumber) {
            result = firstNumber * secondNumber;                            // ici, la fonction mofifie une variable à l'extérieur de la fonction
        }

        function moyenne(firstNumber, secondNumber) {
            result = (firstNumber + secondNumber) / 2;                      // réutiliser les 2 premières fonctions
        }

        if (choice == 1) {
            somme(number1, number2);
            console.log(result);
        } else if (choice == 2) {
            produit(number1, number2);
            console.log(result);
        } else if (choice == 3) {
            moyenne(number1, number2);
            console.log(result);
        } else {
            console.log('Tapez 1, 2 ou 3');
        }
    }



    // exercice1();
    // exercice2();
    // exercice3();
    // exercice4();
    // exercice5();
    // exercice6();
exercice7();
    // exercice8();
    //exercice8b();
    //exercice8c();
// exercice9();
// exercice10();

