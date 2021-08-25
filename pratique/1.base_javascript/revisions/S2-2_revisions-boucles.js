const readlineSync = require('readline-sync');





function exercice5(){
    let tableNumber = readlineSync.questionInt('Choisissez un table de multiplication : ')
    
    console.log(`Table de ${tableNumber} : `)
    for (i = 0 ; i < 10 ; i ++){
        let result = tableNumber*i;
        console.log(`${tableNumber} x ${i} = ${result}`)
    }
}


exercice5();