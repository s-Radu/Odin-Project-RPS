//Todo: Variables

let playingUser;
const restartButton = document.getElementById("restartBtn");

// Todo: Ask for user name when the page loads, only runs when the page loads

window.addEventListener("load", () => {
  playingUser = prompt("And who am I playing against ?", "");
});

//Todo: Computer's selectioni

//Todo: User selection

//Todo: The game runs once

//Todo: Select the winner

//Todo: The game runs till someone reaches score of 5

//Todo: Option to restart the game

//? Testing functions / console logs, or whatever else we need to test till we finish the project

function nameTest() {
  console.log(playingUser);
}

restartButton.addEventListener("click", nameTest);
