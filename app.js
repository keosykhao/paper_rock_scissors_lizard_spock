const playerScore = 0;
const computerScore = 0;
// use underscore to differentiate DOM elements
// this is caching the DOM aka storing const for future use
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreKeeper_div = document.querySelector(".score-keeper");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

// make a function for the computer to pick randomly, Math.random will pick any number between 0 and 1,
// adding Math.floor to Math.random gives us a round number 

function getcomputerChoice (){
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const randomNumber = Math.floor(Math.random() * 5);
    return choices [randomNumber];
}
function play(playerChoice){
    const computerChoice = getcomputerChoice();
    // instead of if statements, we'll use switch statements because it is more efficient to use with fixed values. 
    // if-else statements are good to use with Boolean values like true or false
    switch (playerChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "lizardspock":
        case "spockscissors":
        case "paperspock":
        case "spockrock":
        case "lizardpaper":
        case "scissorslizard":
        case "rocklizard":
        case "scissorpaper":
            console.log(
                "Player Wins!"
            );
            break;
        case "scissorsrock":
        case "rockpaper":
        case "spocklizard":
        case "scissorsspock":
        case "spockpaper":
        case "rockspock":
        case "paperlizard":
        case "lizardscissors":
        case "lizardrock":
        case "paperscissors":
                console.log("Player Loses!");
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            console.log("It's a tie!")
            break;
        

        
        
            }

        }

play("lizard");


function main() {

    rock_div.addEventListener('click', function(){
        play("rock");   
    })

    paper_div.addEventListener('click', function(){
        play("paper");   
    })

    scissors_div.addEventListener('click', function(){
        play("scissors");   
    })

    lizard_div.addEventListener('click', function(){
        play("lizard");   
    })

    spock_div.addEventListener('click', function(){
        play("spock");   
    })
}

main();



