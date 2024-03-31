function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 1:
            computerChoice = 'rocks';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        
                        
        default:
            computerChoice = 'scissors';
    }
    return computerChoice;

}


function getUserChoice(){ 
    return (prompt("Write your choice (Rocks, Paper, Scissors")).toLowerCase();
      
}
   
let computerSelection;
let playerSelection;

function getChoice (){
    computerSelection = getComputerChoice();
    playerSelection = getUserChoice();
    
}


let player = 0;
let computer = 0;

function playRound(playerSelection, computerSelection) {
        
        if (playerSelection === computerSelection) {
            return `That was a tie between your "${playerSelection}" and computer's "${computerSelection}". The score is: Player: ${player} - Computer: ${computer}.`;
        } else if ((playerSelection === 'rocks' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rocks') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
            player ++;
            return `You win!!!! "${playerSelection}" beats "${computerSelection}". The score is: Player: ${player} - Computer: ${computer}.`;
        } else {
            computer ++;
            return `You lose!!! "${computerSelection}" beats "${playerSelection}". The score is: Player: ${player} - Computer: ${computer}.`;
        }
      }

function playGame(){
    for (let i = 1; i <= 5; i++){
        getChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}





