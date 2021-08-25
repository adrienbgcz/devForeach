const btn = document.querySelector(".toto")
const message = document.querySelector(".msg-box")
const input = document.querySelector("#user-age")

const ageMin = 18
const ageMax = 70























































// const ageInput = () => {
   
//     const age = parseInt(input.value);
//     if (isNaN(age)){
//         message.innerHTML = "Veuillez saisir un nombre"
//     } else {
      
//     //const age = +input.value // chaine de caractere en nombre
//     message.innerHTML = selectMessage(age)
//     input.value = '';

//     }
    
// }


// const checkKey = (event) => {
//     if (event.keyCode === 13) {
//        ageInput()
//     }
// }


// btn.addEventListener("click", ageInput);
// input.addEventListener("keyup",  checkKey)


// const selectMessage = (age) => {

//     if (age < 18) {
//         return (`Vous avez ${age} ans, désolé, revenez quand vous en aurez ${ageMin} ans`)
//     }

//     else if (age >= 18 && age < 70) {
//         return (`Vous avez ${age} ans, vous êtes donc majeur et notre limite est ${ageMax} ans , bienvenue.`)
//     }

//     else if (age >= 70) {
//         return (`Vous avez ${age} ans. Désolé nous n'acceptons pas les personnes qui ont plus de ${ageMax} ans`)
//     }
// }








// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });