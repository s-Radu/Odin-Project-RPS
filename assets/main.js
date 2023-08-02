//Todo: Variables

let playingUser;
const restartButton = document.getElementById("restartBtn");
const choices = document.querySelectorAll("#rock, #paper, #scissors");

// Todo: Ask for user name when the page loads, only runs when the page loads // Done

// window.addEventListener("load", () => {
//   playingUser = prompt("And who am I playing against ?", "");
// });

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

    // ? Compare results and decide the winner of the round

    if (userChoice === coChoice) {
      roundWinner.innerText = `There is a tie :) `;
    } else if (
      (userChoice === "rock" && coChoice === "scissors") ||
      (userChoice === "paper" && coChoice === "rock") ||
      (userChoice === "scissors" && coChoice === "paper")
    ) {
      roundWinner.innerText = `${playingUser} wins`;
    } else {
      roundWinner.innerText = "Computer wins";
    }

    //Todo: The game runs till someone reaches score of 5
  });
});

//Todo: Computer's selection and return the index's value  // Done

const coChoices = ["rock", "paper", "scissors"];

function getRandomChoices() {
  const randomIndex = Math.floor(Math.random() * coChoices.length);
  return coChoices[randomIndex];
}

//Todo: Option to restart the game  // Done

//? Testing functions / console logs, or whatever else we need to test till we finish the project

function nameTest() {
  console.log(playingUser);
}

restartButton.addEventListener("click", nameTest);
