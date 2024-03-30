function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3);
    if (compChoice == 1) {
        return "Rock";
    } else if (compChoice == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
let userChoice;
let choice;
function getUserChoice(){
    userChoice = prompt("Write your choice (Rocks, Paper, Scissors");
    userChoice = userChoice.toLowerCase();
    
    switch (userChoice) {
        case'rocks':
            choice = 1;
            break;
        case 'paper':
            choice = 2;
            break;
        case 'scissors':
            choice = 3;
            break;
        default:
            alert('That is not a valid option');
            getUserChoice();

    }    
        return choice;        
    }
    // if (userChoice != "rocks" || userChoice != "paper" || userChoice != "scissors") {
    //     alert("Your choice is invalid");
    //     getUserChoice();
    // } else if (userChoice == "rocks") {
    //     choice = 1;
    // } else if (userChoice == "paper") {
    //     choice = 2;
    // } else {
    //     choice = 3;
    // }
    // return choice;


// function play() {
//     getComputerChoice();
//     getUserChoice();
//     if (compChoice == choice) {
//         alert("You draw!");
//     } else if (compChoice == 1 )
// }
// }