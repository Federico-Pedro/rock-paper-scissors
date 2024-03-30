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
      
    // switch (userChoice) {
    //     case 'rocks':
    //     case 'paper':
    //     case 'scissors':
    //         return userChoice;
    //         break;
    //     default:  
    //     alert('That is not a valid option');
    //     getUserChoice();          
    // }
}
   


let computerSelection = getComputerChoice();
let playerSelection = getUserChoice();



function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return `That was a tie between your ${playerSelection} and computer's ${computerSelection}`;
        } else if ((playerSelection === 'rocks' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rocks') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return `You win!!!! "${playerSelection}" beats "${computerSelection}"`;
        } else {
            return `You lose!!! "${computerSelection}" beats "${playerSelection}"`;
        }
      }





    