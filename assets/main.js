//Todo: Variables

let playingUser;
const restartButton = document.getElementById("restartBtn");
const choices = document.querySelectorAll("#rock, #paper, #scissors");

// Todo: Ask for user name when the page loads, only runs when the page loads

// window.addEventListener("load", () => {
//   playingUser = prompt("And who am I playing against ?", "");
// });

//Todo: User selection

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    console.log(`${userChoice} was clicked`);
  });
});

//Todo: Computer's selection

const coChoices = ["rock", "paper", "scissors"];

function getRandomChoices() {
  const randomIndex = Math.floor(Math.random() * coChoices.length);
  return randomIndex;
}

//Todo: The game runs once

//Todo: Select the winner

//Todo: The game runs till someone reaches score of 5

//Todo: Option to restart the game

//? Testing functions / console logs, or whatever else we need to test till we finish the project

function nameTest() {
  console.log(playingUser);
}

restartButton.addEventListener("click", nameTest);
