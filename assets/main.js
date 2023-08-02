//Todo: Variables

let playingUser;
const restartButton = document.getElementById("restartBtn");
const choices = document.querySelectorAll("#rock, #paper, #scissors");

// Todo: Ask for user name when the page loads, only runs when the page loads // Done

// window.addEventListener("load", () => {
//   playingUser = prompt("And who am I playing against ?", "");
// });

//Todo: Score

userScore = 0;
coScore = 0;

//Todo: User selection  // done

//Todo: Select the winner

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // ? User's selection
    const userChoice = choice.id;

    // ? Computer's selection
    const coChoice = getRandomChoices();

    // ? Output user's selection and computer's selection
    const showUserSelection = document.getElementById("userSelection");
    const showCoSelection = document.getElementById("coSelection");

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

    //Todo: The game runs till someone reaches score of 5
    if (userScore === 5) {
      const winner = document.getElementById("winner");
      const winnerText = document.getElementById("winnerText");
      const overallWinner = document.getElementById("overallWinner");

      winner.classList.add("winner");
      winnerText.classList.add("winnerText");

      winner.innerText = `${playingUser} WINS !!`;
      winnerText.innerText = "Congrats ";
      overallWinner.classList.remove("hidden");
    } else if (coScore === 5) {
      winner.classList.add("winner");
      winnerText.classList.add("winnerText");

      winner.innerText = "Computer WINS !!";
      overallWinner.classList.remove("hidden");
      winnerText.innerText = "Congrats ";
    }
  });
});

//Todo: Computer's selection and return the index's value  // Done

const coChoices = ["rock", "paper", "scissors"];

function getRandomChoices() {
  const randomIndex = Math.floor(Math.random() * coChoices.length);
  return coChoices[randomIndex];
}

//Todo: Option to restart the game  // Done

function gameRestart() {
  const overallWinner = document.getElementById("overallWinner");
  let displayUserScore = document.getElementById("userScore");
  let displayCoScore = document.getElementById("coScore");
  const winner = document.getElementById("winner");
  const winnerText = document.getElementById("winnerText");

  winner.classList.remove("winner");
  winnerText.classList.remove("winnerText");
  overallWinner.classList.add("hidden");

  winner.innerText = " ";
  winnerText.innerText = " ";
  displayCoScore.innerText = " ";
  displayUserScore.innerText = " ";
}
restartButton.addEventListener("click", gameRestart);
