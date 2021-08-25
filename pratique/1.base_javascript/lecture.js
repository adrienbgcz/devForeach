const readlineSync = require('readline-sync');

// const nom = readlineSync.question('qui es-tu ?');

// console.log('je suis', nom);


// let val = 231;
// let double = val * 2;




function exercice2(){

    let nombre = readlineSync.question('Donner un nombre');

    function carre(reponse){
        let carreNombre = reponse*reponse;
        console.log(carreNombre);
    }

carre(nombre);
}


function exercice3(){

let prenom = readlineSync.question('Quel est votre prénom ?');
console.log('Bonjour', prenom);

}

exercice2();
exercice3();



