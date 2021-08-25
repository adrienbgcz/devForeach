// momentjs.com

// Date.now()
// new Date()
// new Date().getTime()    // transformer une date en timestamp, obligatoire pour tester l'égalité

// const moment = require('moment');
// moment().format("DD//MM/YY")

// moment('15/03/2020', DD/MM/YYYY).format('dddd DD MMMM YYYY')  je saisi une date, je dis quel format j'ai utilisé et j'utilise .format pour afficher une chaine de caractere comme je veux.    
// moment.locale('fr') ==> pour afficher la date en français, mais bien souvent on ira rechercher la locale du client


let date1 = new Date('2021-01-10')
let date2 = new Date('2020-01-10')

console.log(`la date 2 au ${date2} est avant la date 1 au ${date1}`, date2.getTime() < date1.getTime());
date2 = new Date('2022-01-10')

console.log(`la date 2 au ${date2} est apres la date 1 au ${date1}`, date2.getTime() > date1.getTime());
date2 = new Date('2021-01-10')

console.log(`les dates ${date1} et ${date2} sont égales`, date1.getTime() == date2.getTime());


