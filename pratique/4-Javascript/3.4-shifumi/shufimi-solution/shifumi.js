const opponentDomNode = document.querySelector("#opponent");

const userIcons = document.querySelectorAll(".user-icons");

let userChoice = "";
let opponentChoice = "";
let userScore = 0;
let opponentScore = 0;
const winLevel = 2;
let winMsg = "";
const winColor = "green";
const failColor = "red";
const drawColor = "orange";

let playerColor = "";
let opponentColor = "";

const symbols = [
  {
    name: "rock",
    img: "./img/rock.png",
  },
  {
    name: "paper",
    img: "./img/paper.png",
  },
  {
    name: "scissors",
    img: "./img/scissors.png",
  },
  {
    name: "lizard",
    img: "./img/lizard.png",
  },
  {
    name: "spock",
    img: "./img/spock.png",
  },
];

const setUserChoice = (event) => {
  userChoice = event.target.id;
  wipeColors();
};

const setOpponentChoice = () => {
  const randomValue = Math.floor(Math.random() * symbols.length);
  opponentChoice = symbols[randomValue];
};

setRoundWinner = (event) => {
  if (userChoice === "rock") {
    if (opponentChoice.name === "rock") {
      setPlayerDrawColor();
    } else if (opponentChoice.name === "paper") {
      opponentScore += 1;
      setPlayerFailColor();
    } else if (opponentChoice.name === "scissors") {
      userScore += 1;
      setPlayerWinColor();
    } else if (opponentChoice.name === "lizard") {
      userScore += 1;
      setPlayerWinColor();
    } else if (opponentChoice.name === "spock") {
      opponentScore += 1;
      setPlayerFailColor();
    }
  } else if (userChoice === "paper") {
    if (opponentChoice.name === "rock") {
      userScore += 1;
      setPlayerWinColor();
    } else if (opponentChoice.name === "paper") {
      setPlayerDrawColor();
    } else if (opponentChoice.name === "scissors") {
      opponentScore += 1;
      setPlayerFailColor();
    } else if (opponentChoice.name === "lizard") {
      opponentScore += 1;
      setPlayerFailColor();
    } else if (opponentChoice.name === "spock") {
      userScore += 1;
      setPlayerWinColor();
    }
  } else if (userChoice === "scissors") {
    if (opponentChoice.name === "rock") {
      opponentScore += 1;
      setPlayerFailColor();
    } else if (opponentChoice.name === "paper") {
      userScore += 1;
      setPlayerWinColor();
    } else if (opponentChoice.name === "scissors") {
      setPlayerDrawColor();
    } else if (opponentChoice.name === "lizard") {
      userScore += 1;
      setPlayerWinColor();
    } else if (opponentChoice.name === "spock") {
      opponentScore += 1;
      setPlayerFailColor();
    }
  } else if (userChoice === "lizard") {
    if (opponentChoice.name === "rock") {
      opponentScore += 1;
      setPlayerFailColor();
    } else if (opponentChoice.name === "paper") {
      userScore += 1;
      setPlayerWinColor();
    } else if (opponentChoice.name === "scissors") {
      opponentScore += 1;
      setPlayerFailColor();
    } else if (opponentChoice.name === "lizard") {
      setPlayerDrawColor();
    } else if (opponentChoice.name === "spock") {
      userScore += 1;
      setPlayerWinColor();
    }
  } else if (userChoice === "spock") {
    if (opponentChoice === "rock") {
      userScore += 1;
      setPlayerWinColor();
    } else if (opponentChoice.name === "paper") {
      opponentScore += 1;
      setPlayerFailColor();
    } else if (opponentChoice.name === "scissors") {
      setPlayerWinColor();
      userScore += 1;
    } else if (opponentChoice.name === "lizard") {
      opponentScore += 1;
      setPlayerFailColor();
    } else if (opponentChoice.name === "spock") {
      setPlayerDrawColor();
    }
  }
};

const setGameWinner = (event) => {
  setTimeout(() => {
    if (userScore === 2) {
      userScore = opponentScore = 0;
      winMsg = "YOU WIN THE GAME :)";
      alert(winMsg);
      wipeColors(event);
      clearOpponentDisplay();
    } else if (opponentScore === 2) {
      userScore = opponentScore = 0;
      winMsg = "YOU LOOSE THE GAME :/";
      alert(winMsg);
      wipeColors(event);
      clearOpponentDisplay();
    }
  }, 200);
};

const updateDisplay = (event) => {
  clearOpponentDisplay();
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", opponentChoice.img);
  imgEl.setAttribute("alt", opponentChoice.name + " icon");
  opponentDomNode.append(imgEl);
  setColors(event);
};

const throwGame = (event) => {
  setUserChoice(event);
  setOpponentChoice(event);
  setRoundWinner(event);
  setGameWinner(event);
  updateDisplay(event);
};

userIcons.forEach((userIcon) => {
  userIcon.addEventListener("click", throwGame);
});

const setColors = (event) => {
  wipeColors(event);
  opponentDomNode.childNodes[1].classList.add(opponentColor);
  event.target.classList.add(playerColor);
};

const setPlayerWinColor = (event) => {
  playerColor = winColor;
  opponentColor = failColor;
};

const setPlayerDrawColor = (event) => {
  playerColor = opponentColor = "orange";
};

const setPlayerFailColor = (event) => {
  playerColor = failColor;
  opponentColor = winColor;
};

const wipeColors = () => {
  userIcons.forEach((userIcon) => {
    userIcon.classList = "";
  });
};

const clearOpponentDisplay = () => {
  opponentDomNode.querySelectorAll("*").forEach((node) => node.remove());
};
