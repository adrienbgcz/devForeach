const readlineSync = require('readline-sync');
// exercice 1 :
// Ecrire un algorithme qui demande un nombre à l’utilisateur, et l’informe ensuite si ce nombre est positif ou négatif (on laisse de côté le cas où le nombre vaut
// zéro).

function exercice1() {
    let number = readlineSync.question('Donnez un nombre : ');

    if (isNaN(number)) {
        console.log('Veuillez saisir un nombre');
    } else if (number < 0) {
        console.log('NEGATIF');
    } else {
        console.log('POSITIF');
    }
}



// exercice 2 :
// Ecrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si leur produit est négatif ou 
//positif (on laisse de côté le cas où le produit est nul). Attention toutefois : on ne doit pas calculer le produit des deux nombres.

function exercice2() {
    let firstNumber = readlineSync.question('Donner un premier nombre : ');
    let secondNumber = readlineSync.question('Donner un second nombre : ');

    produit(firstNumber, secondNumber);
}

function produit(number1, number2) {
    let result = number1 * number2;
    if (result < 0) {
        console.log('NEGATIF');
    } else {
        console.log('POSITIF');
    }
}


// exercice 3 :
// Ecrire un algorithme qui demande trois noms à l’utilisateur et l’informe ensuite s’ils sont rangés ou non dans l’ordre alphabétique.
function exercice3() {
    let firstName = readlineSync.question('Donner un premier nom : ');
    let secondName = readlineSync.question('Donner un second nom : ');
    let thirdName = readlineSync.question('Donner un troisième nom : ');

    if (isNaN(firstName) && isNaN(secondName) && isNaN(thirdName)) {
        if (firstName.localeCompare(secondName) < 0 && secondName.localeCompare(thirdName) < 0) {
            console.log('Les noms sont dans l\'ordre alphabétique');
        } else {
            console.log('Les noms ne sont pas dans l\'ordre alphabétique');
        }
    }
}



// exercice 4 :
// Ecrire un algorithme qui demande un nombre à l’utilisateur, et l’informe ensuite si ce nombre est positif ou négatif (on inclut cette fois le traitement du cas où le nombre vaut zéro).
function exercice4() {
    let number = readlineSync.question('Donnez un nombre : ');

    if (isNaN(number)) {
        console.log('Veuillez saisir un nombre');
    } else if (number == 0) {
        console.log('NUL');
    }
    else if (number < 0) {
        console.log('NEGATIF');
    } else {
        console.log('POSITIF');
    }
}
// exercice 5 :
// Ecrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si le produit est négatif ou positif (on inclut cette fois le traitement du cas où le produit peut être nul). Attention toutefois, on ne doit pas calculer le produit !



// exercice 6 :
// Ecrire un algorithme qui demande l’âge d’un enfant à l’utilisateur. Ensuite, il l’informe de sa catégorie : "Poussin" de 6 à 7 ans "Pupille" de 8 à 9 ans "Minime" de 10 à 11 ans "Cadet" après 12 ans Peut-on concevoir plusieurs algorithmes équivalents menant à ce résultat ?


// exercice 7 :
// Ecrire un algorithme qui demande un mois (nombre entre 1 et 12), une année et affiche le nombre de jour de ce mois.
// indication: L’année est bissextile si elle est divisible par quatre mais pas par 100. Touefois, les années divisibles par 400 le sont.
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

function nombreAleatoire(max) {
    return Math.floor(Math.random() * Math.floor(max + 1));
}

function affichageResultat(choixUtilisateur) {
    let choixAleatoire = nombreAleatoire(1)
    if (choixUtilisateur == choixAleatoire) {
        console.log('Gagné !');
    } else {
        console.log('Perdu !');
    }
}


function exercice8() {
    let result = readlineSync.question('Tapez P ou F : ');
    if (result == 'P' || result == 'p') {
        affichageResultat(1);
    } else if (result == 'F' || result == 'f') {
        affichageResultat(0);
    } else (console.log('Tapez P ou F : '));
}







// exercice 9 :
// L'utilisateur saisit la date au format jj/mm/aaaa, et le programme affiche la date avec le mois en lettres.
// Exemple : si l'utilisateur saisit 15/10/2020, alors le programme affiche : Aujourd'hui, nous sommes le 15 Octobre 2020.
// exercice 10 :
// Écrire un algorithme qui propose un menu affiché à l'écran, et qui, en fonction du choix fait par l'utilisateur, effectue soit la somme, soit le produit, soit la moyenne de 2 nombres saisis.








// exercice1();
// exercice2();
// exercice3();
// exercice4();
// exercice5();
// exercice6();
// exercice7();
exercice8();
// exercice9();
// exercice10();
