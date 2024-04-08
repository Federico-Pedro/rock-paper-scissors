let computerSelection;
let playerSelection;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        
                        
        default:
            computerChoice = 'scissors';
    }
    return computerChoice;
}

let player = 0;
let computer = 0;

function playRound(playerSelection, computerSelection) {
        
        if (playerSelection === computerSelection) {
            player ++;
            computer ++;
            return `You chose "${playerSelection}" <br> The computer chose "${computerSelection}" <br> That is a Tie`;
            
        } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
            player ++;
            return `You chose "${playerSelection}" <br> The computer chose "${computerSelection}" <br> You win!!!`;
        } else {
            computer ++;
            return `You chose "${playerSelection}" <br> The computer chose "${computerSelection}" <br> Sorry! You lose:`;
        }
      }

    
const buttons = document.querySelectorAll(".btn");
const results = document.querySelector(".results");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    playerSelection = (button.innerText).toLowerCase();
  computerSelection = getComputerChoice();
  results.innerHTML = playRound(playerSelection, computerSelection);
  score.innerText = `Player: ${player} ----- Computer: ${computer}`;
  final();
  });
});

function final(){
    if (player === 5){
        score.innerText = 'YOU ARE THE WINNER!!!!!!';
        results.innerHTML = '';
        player = 0;
        computer = 0; 
      } else if (computer === 5){
        score.innerText = 'BETTER LUCK NEXT TIME';
        results.innerHTML = '';
        player = 0;
        computer = 0;
      }
      
}