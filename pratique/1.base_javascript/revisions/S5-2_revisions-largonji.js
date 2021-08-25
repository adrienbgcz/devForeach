const readlineSync = require('readline-sync');

// Le louchébem est un langage crypté que l'on parle pour ne pas se faire comprendre des clients. D'après ce qu'on en sait, il serait né 
// dans la première moitié du XIXe siècle, mais on n'en est pas vraiment sûr tant peu de chose ont été écrites à son sujet.

// Plus concrètement, cela consiste à remplacer le premier son (consonnes) d'un mot par un L, prendre cette consonne, l'attacher à la fin 
// du mot puis rajouter un suffixe (em, é, ji, oc, ic, uche, ès).

// Exemple : Douce devient Loucedé, ou encore Fou qui devient Loufoc

// Si on le mot est constitué d'une seule lettre (ex: à), il ne subira aucun changement
// Si le mot commence par une voyelle, aucun changement de syllabe. Il faudra cependant ajouter le L au début et un suffixe à la fin.
// Le suffixe sera choisi d'une façon aléatoire depuis la liste suivante :
// ['em', 'é', 'ji', 'oc', 'ic', 'uche', 'ès'];



let phrase = readlineSync.question('Saisir une phrase : ');
phrase = phrase.toLowerCase();
phraseTab = phrase.split(' ')

let newPhraseTab = [];
phraseTab.forEach(mot => {


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const randomChoice = getRandomInt(7);
    let randomSuffixe = '';

    switch (randomChoice) {

        case 0: {
            randomSuffixe = 'em';
            break;
        }
        case 1: {
            randomSuffixe = 'é';
            break;
        }
        case 2: {
            randomSuffixe = 'ji';
            break;
        }
        case 3: {
            randomSuffixe = 'oc';
            break;
        }
        case 4: {
            randomSuffixe = 'ic';
            break;
        }
        case 5: {
            randomSuffixe = 'uche';
            break;
        }
        case 6: {
            randomSuffixe = 'ès';
            break;
        }

    }


    let newMot = '';

    if (mot.length === 1) {
        newMot = mot;
    }
    else if (mot[0] !== 'a' && mot[0] !== 'e' && mot[0] !== 'i' && mot[0] !== 'o' && mot[0] !== 'u' && mot[0] !== 'y') {
        for (let i = 0; i < mot.length; i++) {
            newMot = mot.replace(mot[0], 'L') + randomSuffixe;
        }
    }
    else if (mot[0] === 'a' || mot[0] === 'e' || mot[0] === 'i' || mot[0] === 'o' || mot[0] === 'u' || mot[0] === 'y') {
        for (let i in mot) {
            newMot = 'L' + mot + randomSuffixe;
        }
    }

    newPhraseTab.push(newMot);

})


let newPhraseTabUpper = newPhraseTab.map(mot => {
   return mot.toUpperCase()
})

newPhrase = newPhraseTabUpper.join(' ');



console.log(newPhrase)











