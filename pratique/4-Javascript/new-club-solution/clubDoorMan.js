const door = document.querySelector("button");
const ageInput = document.querySelector("#user-age");
const msgBox = document.querySelector(".msg-box");



const checkPermission = () => {
  const youngAgeLimit = 18;
  const oldAgeLimit = 70;
  let myAge = 0;
  let msg = "";
  if (isNaN(parseFloat(ageInput.value))) {
    msg = "Entrée incorrecte : veuillez entrer un chiffre ou un nombre";
  } else {
    myAge = ageInput.value;
    if (myAge < youngAgeLimit) {
      msg = `Vous avez ${myAge} ans, désolé, revenez quand vous en aurez au moins ${youngAgeLimit}`;
    } else if (myAge >= youngAgeLimit && myAge < oldAgeLimit) {
      msg = `Vous avez ${myAge} ans, vous êtes donc majeur, et notre limite est de ${oldAgeLimit} ans, bienvenue`;
    } else {
      msg = `Vous avez ${myAge} ans. Désolé nous n'acceptons pas les personnes qui ont au moins ${oldAgeLimit} ans`;
    }
  }
  ageInput.value = "";
  msgBox.textContent = msg;
};

const checkKey = (event) => {
  if(event.keyCode === 13 ) checkPermission()
};

door.addEventListener("click", checkPermission);
ageInput.addEventListener("keyup", checkKey);
