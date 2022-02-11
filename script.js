//Global variables
let userInput = prompt("What do you want to play: rock, paper or scisors");
let playerSelection = userInput.toLowerCase();
let computerArr = [
    "Rock",
    "Paper",
    "Scisors"
];
let computerSelection =  Math.floor(Math.random() * computerArr.length);
//Traduction of computer selection
switch (computerSelection) {
    case 0:
        computerSelection = "Rock";
        break;
    case 1:
        computerSelection = "Paper";
        break;
    case 2:
        computerSelection = "Scisors";
}
let playerScore = 0;
let computerScore = 0;
//Function for the round
function startRound() {
//Starting the round
    console.log("You picked " + playerSelection + " and the computer picked " + computerSelection);
//Messages
    //win
    function winMessage(){
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
        if (playerSelection === "rock") {
            tieMessage();
        } else if (playerSelection === "paper") {
            winMessage();
            playerScore++;
        } else if (playerSelection === "scisors") {
            loseMessage();
            computerScore++;
        } else {
            invalidMessage()
        }
    //Computer picked paper
    } else if (computerSelection === "Paper") {
        if (playerSelection === "rock") {
            loseMessage();
            computerScore++;
        } else if (playerSelection === "paper") {
            tieMessage();
        } else if (playerSelection === "scisors") {
            winMessage();
            playerScore++;
        } else {
            invalidMessage();
        }
    //Computer picked scisors
    } else if (computerSelection === "Scisors") {
        if (playerSelection === "rock") {
            winMessage();
            playerScore++;
        } else if (playerSelection === "paper") {
            loseMessage();
            computerScore++;
        } else if (playerSelection === "scisors") {
            tieMessage();
        } else {
            invalidMessage();
        }
    }
    endMatch()
}

//Determines who won or lost
function endMatch() {
    if (playerScore == 3) {
        console.log("You won the match!");
    } else if (computerScore == 3) {
        console.log("You lost, we'll get 'em next time");
    }
}

//Game starts
function game() {
    for (let i = 0; playerScore <= 3 || computerScore <= 3; i++) {
        startRound();
        endMatch();
    }
    /*startRound();
    endMatch();*/
    
}

game();