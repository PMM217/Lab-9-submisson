// Declaring constants
const playerText = document.querySelector("#playerText"); // Element showing players choice
const computerText = document.querySelector("#computerText"); // Element showing computer choice
const resultText = document.querySelector("#resultText"); // Element showingg the game result
const chooseBtns = document.querySelectorAll(".chooseBtn"); // List of Buttons for player to pick from


// Below are Veriables which stores the choice of player and computer choice and the game result respectively
let player;
let computer;
let result;

//Added to be able to set a number of rounds to be Played of RPS
let roundsPlayed = 0;

//Add Event Listener for all button options to the player
chooseBtns.forEach(button => button.addEventListener("click", () => {

    //Here we set the players choice
    player = button.textContent;

    computerTurn();

    //Display players and computer choice + To note here the use of a placeholder or $ symbol is use to represent a value which will be replaced by data once it is used - https://www.w3schools.com/tags/att_input_placeholder.asp
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;

    //Here we call the fucntion checkWinner function and update the screen with appreipriate text of result
    resultText.textContent = checkWinner();

}));

//Creating function to give result of game
function checkWinner() {

    //Here we are adding a counter to game to achieve the Task assigned for Lab 9 also can be presented as roundsPlayed += 1
    roundsPlayed++;

    //Create if statement to check how many rounds have been played
    if (roundsPlayed ===4) {
        chooseBtns.forEach(button=> button.disabled=true);

        //After the 3 rounds have been played - The button will be disabled to prevent further Games being played
        return " Sorry you have played the Maximum amount of Games (3) - Thanks For Playing :)";

    }

    //Here the use of === is a comparison operator which can be found https://www.w3schools.com/jsref/jsref_operators.asp - This states if the players choice is of equal value to Computer the result DRAW! will be returned
    if (player === computer) {
        return "Draw!";

    //else if the players choice wins the computer it will return You Win!
    } else if (player === "ROCK" && computer === "SCISSORS" || //player picks rock computer picks scissors 
               player === "PAPER" && computer === "ROCK" || // the use of "||" translates to OR - Or if player picks Paper and computer picks ROCK
               player === "SCISSORS" && computer === "PAPER") { // OR if the player picks scissors and computer picks paper

        return "You Win!";
}
    //if none of the above turns out to be true the player will lose and the game will return "You Lose!"    
     else {
        return "You Lose!";
    }
}

//Here we create a function for the computers choice in the game
function computerTurn() {

    //Math Random function generates random number between 0 and 1 we then multiple by 3 - the function Math.floor will round up or down to the nearest integer which is then why we add 1 which makes our Random choice range to be between 1 - 3
    const randNum = Math.floor(Math.random() * 3) + 1;

   
    //https://www.w3schools.com/js/js_switch.asp
    //Here we intrduce a switch - the purpose of the switch is to perform different actions with different conditions - in our code 1 represents Rock | 2 Paper | 3 Scissors
    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;

        case 2:
            computer = "PAPER";
            break;

        case 3:
            computer = "SCISSORS";
            break;
    }
}