//Todo: Variables // done

let playingUser;
const restartButton = document.getElementById("restartBtn");
const choices = document.querySelectorAll("#rock, #paper, #scissors");
const showUserSelection = document.getElementById("userSelection");
const showCoSelection = document.getElementById("coSelection");
const startGameBtn = document.getElementById("startGameBtn");
const userNameInput = document.getElementById("userName");

// TODO: Add arrays of strings that will be used when the anyone wins, make about 4-5 and randomly choose one of them, than change the text under computer wins // Done

const userLines = ["Good game", "Almost lost", "POWER", "Eh. na"];
const coLines = ["Sad innit?", "Oopsie", "Computer good", "Ha, you lost"];

function getRandomWin(arr) {
  return arr[(Math.random() * arr.length) | 0];
}

//? Game start

startGameBtn.addEventListener("click", () => {
  getUserName();
});

userNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getUserName();
  }
});

function hideGameStart() {
  const hideGameStart = document.getElementById("startGame");
  hideGameStart.classList.add("hidden");
}

// Todo: Ask for user name when the page loads, only runs when the page loads // Done
//? Capitulize the first letter of each word ( if multiple mwords are inputed ) and trigget the game start only if input field has value
function getUserName() {
  const userName = userNameInput.value.trim();
  playingUser = capitulize(userName);

  if (userName === "") {
    alert("Please enter player's name.");
    return;
    //? Hide the game start has been added to the if statement, to prevent the game start wrapper to be hidden if the input it's empty
  } else {
    hideGameStart();
  }
}

function capitulize(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

//Todo: Score // done

userScore = 0;
coScore = 0;

//Todo: User selection  and initiation of game // done

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playRound(userChoice);
    // console.log(getRandomWin(userLines), getRandomWin(coLines));
  });
});

//Todo: The whole game // done

function playRound(userChoice) {
  // ? Computer's selection
  const coChoice = getRandomChoice();

  // ? Output user's selection and computer's selection
  showUserSelection.innerText = `You chose ${userChoice}`;
  showCoSelection.innerText = `Computer chose ${coChoice}`;

  //? Output the user's and computer's selection and round's winner
  let roundWinner = document.getElementById("roundWinner");

  // ? Update user's and computers score based on round winner
  let displayUserScore = document.getElementById("userScore");
  let displayCoScore = document.getElementById("coScore");

  // ? Compare results and decide the winner of the round
  if (userChoice === coChoice) {
    roundWinner.innerText = `There is a tie :) `;
  } else if (
    (userChoice === "rock" && coChoice === "scissors") ||
    (userChoice === "paper" && coChoice === "rock") ||
    (userChoice === "scissors" && coChoice === "paper")
  ) {
    roundWinner.innerText = `${playingUser} wins`;
    userScore++;
    displayUserScore.innerText = `${playingUser}: ${userScore}`;
  } else {
    roundWinner.innerText = "Computer wins";
    coScore++;
    displayCoScore.innerText = `Co: ${coScore}`;
  }

  //Todo: The game runs until someone reaches a score of 5 // Done
  if (userScore === 5) {
    const winner = document.getElementById("winner");
    const winnerText = document.getElementById("winnerText");
    const overallWinner = document.getElementById("overallWinner");

    winner.classList.add("winner");
    winnerText.classList.add("winnerText");

    overallWinner.classList.remove("hidden");

    winner.innerText = `${playingUser} WINS !!`;
    winnerText.innerText = `${getRandomWin(userLines)}`;
  } else if (coScore === 5) {
    const winner = document.getElementById("winner");
    const winnerText = document.getElementById("winnerText");
    const overallWinner = document.getElementById("overallWinner");

    winner.classList.add("winner");
    winnerText.classList.add("winnerText");

    overallWinner.classList.remove("hidden");

    winner.innerText = "Computer WINS !!";
    winnerText.innerText = `${getRandomWin(coLines)}`;
  }
}

//Todo: Computer's selection and return the index's value  // Done

const coChoices = ["rock", "paper", "scissors"];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * coChoices.length);
  return coChoices[randomIndex];
}

//Todo: Option to restart the game  // done

function gameRestart() {
  userScore = 0;
  coScore = 0;
  const overallWinner = document.getElementById("overallWinner");
  let displayUserScore = document.getElementById("userScore");
  let displayCoScore = document.getElementById("coScore");
  const winner = document.getElementById("winner");
  const winnerText = document.getElementById("winnerText");
  let roundWinner = document.getElementById("roundWinner");

  winner.classList.remove("winner");
  winnerText.classList.remove("winnerText");
  overallWinner.classList.add("hidden");

  roundWinner.innerText = " ";
  showUserSelection.innerText = " ";
  showCoSelection.innerText = " ";
  winner.innerText = " ";
  winnerText.innerText = " ";
  displayCoScore.innerText = " ";
  displayUserScore.innerText = " ";
}
restartButton.addEventListener("click", gameRestart);
