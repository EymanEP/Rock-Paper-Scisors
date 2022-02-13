//Player variables
let playerInput;
//Computer variables

//Array for translation
let computerArr = [
    "Rock",
    "Paper",
    "Scisors"
];
//Let the computer pick a random number with the array
let computerSelection = Math.floor(Math.random() * computerArr.length);
//Translate the number picked to an actual word
switch (computerSelection) {
    case 0:
        computerSelection = "Rock";
        break;
    case 1:
        computerSelection = "Paper";
        break;
    case 2:
        computerSelection = "Scisors";
};
/*----------------------------------------------------*/
//Players score
let playerScore = 0;
let computerScore = 0;

//Round function
function roundStart() {
    //Starts the input
    playerInput = prompt("What do you want to play: rock, paper or scisors").toLowerCase();
    //Starting the round
    console.log("You picked " + playerInput + " and the computer picked " + computerSelection);
    //Messages
    //win
    function winMessage() {
        console.log("You won, congratulations!");
    }
    //lose
    function loseMessage() {
        console.log("You lost, sorry :(");
    }
    //tie
    function tieMessage() {
        console.log("It's a tie!");
    }
    //invalid
    function invalidMessage() {
        console.log("That is an invalid pick");
    }
    //<--------------------------------------------------------------->
    //Play
    //Computer picked rock
    if (computerSelection === "Rock") {
        if (playerInput === "rock") {
            tieMessage();
        } else if (playerInput === "paper") {
            winMessage();
            playerScore++;
        } else if (playerInput === "scisors") {
            loseMessage();
            computerScore++;
        } else {
            invalidMessage()
        }
        //Computer picked paper
    } else if (computerSelection === "Paper") {
        if (playerInput === "rock") {
            loseMessage();
            computerScore++;
        } else if (playerInput === "paper") {
            tieMessage();
        } else if (playerInput === "scisors") {
            winMessage();
            playerScore++;
        } else {
            invalidMessage();
        }
    }
}

//Determine if you lost or won
let someoneWon = false;
let winScore = 3;
//Detect if someoneWon changes to repeat the round
roundStart();