const readlineSync = require('readline-sync');

function exercice3() {

    let choice = readlineSync.questionInt('Saisissez un nombre : ')
    let i = 0;

    do {
        choice = choice + 1;
        i++;
        console.log(choice);
    } while (i < 10)

}


function exercice4() {

    const choice = readlineSync.questionInt('Saisissez un nombre : ')

    for (let i = 1; i < 11; i++) {
        console.log(choice + i);
    }

}


function exercice5() {

    const choice = readlineSync.questionInt('Saisissez un nombre : ')
    console.log(`Table de ${choice} : \n`)
    for (let i = 0; i < 11; i++) {
        const result = choice * i;
        console.log(`${choice} x ${i} = ${result}`)
    }

}

function exercice6() {
    const choice = readlineSync.questionInt('Saisissez un nombre : ')
    let somme = 0;
    for (let i = 0; i <= choice; i++) {
        somme += i;
    }
    console.log(somme);

}


function exercice7() {
    const choice = readlineSync.questionInt('Saisissez un nombre : ')
    // let produit = 1;
    // for (let i = 1; i <= choice; i++) {
    //     produit *= i;
    // }
    // console.log(produit);

    factorielle(choice);

}

function factorielle(n) {
    const result = n * (n - 1);
    return result;
}


function exercice8() {
    let choice = 0;
    let plusGrand = 0;
    let position = 0;
    let i = 1;


    do {
        choice = readlineSync.questionInt(`Saisissez le nombre ${i} : `)
        if (choice > plusGrand) {
            plusGrand = choice;
            position = i;
        }
        i++
    } while (choice !== 0)

    console.log(`Le plus grand nombre est le ${plusGrand}, il était en position ${position}`)


}




function exercice9() {

    let prix = 0;
    let somme = 0;
    let billetsDix = 0;
    let billetsCinq = 0;
    let pieces = 0

    do {
        prix = readlineSync.questionInt(`Saisissez un prix (tapez 0 pour terminer): `)
        somme += prix;
    } while (prix !== 0)

    console.log(`Vous devez régler ${somme}.\n`)

    let montantPaye = readlineSync.questionInt(`Saisissez le montant que vous souhaitez donner :`)

    let aRendre = montantPaye - somme;

    console.log(`A rendre : ${aRendre}`);

    billetsDix = Math.floor(aRendre / 10);

    if (aRendre - billetsDix * 10 < 5) {
        pieces = aRendre - billetsDix * 10
    } else if (aRendre - billetsDix * 10 >= 5)
        billetsCinq = Math.floor((aRendre - billetsDix * 10) / 5)

    pieces = aRendre - (billetsDix * 10 + billetsCinq * 5);


    for (let i = 0; i < billetsDix; i++) {
        console.log('10 euros');
    }

    for (let j = 0; j < billetsCinq; j++) {
        console.log('5 euros');
    }

    for (let k = 0; k < pieces; k++) {
        console.log('1 euro');
    }


}




function exercice11(){

    const chevauxPartants = readlineSync.questionInt(`Chevaux partants : `);
    const chevauxJoues = readlineSync.questionInt(`Chevaux joués : `);

    const ordre = factorielle(chevauxPartants) / (chevauxPartants - chevauxJoues);
    const desordre = factorielle(chevauxPartants) / ((factorielle(chevauxJoues)) * (factorielle(chevauxPartants - chevauxJoues)));

    console.log(`Dans l’ordre : une chance sur ${ordre} de gagner\nDans le désordre : une chance sur ${desordre} de gagner`);
}





function exercice12(){
    const min = readlineSync.questionInt('Min : ');
    const max = readlineSync.questionInt('Max : ');
    let tab = [];

    // for (let i = min; i <= max; i++) {
    //     if (i % 3 === 0 && i % 5 === 0) {
    //         console.log('FizzBuzz');
    //     } else if (i % 5 === 0) {
    //         console.log('Buzz');
    //     } else if (i % 3 === 0) {
    //         console.log('Fizz');
    //     } else {
    //         console.log(i);
    //     }
    // }

    for (let i = min; i <= max; i++) {
        tab.push(i);
    }
    console.log(tab);

   

}



exercice12();