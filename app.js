let playerScore = 0;
let computerScore = 0;
// use underscore to differentiate DOM elements
// this is caching the DOM aka storing const for future use
let playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreKeeper_div = document.querySelector(".score-keeper");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");
let result; 


// create restart function
let restartButtion = document.getElementById('restart-button');
restartButtion.addEventListener('click', gameRestart );
function gameRestart(){
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Play`
}

// make a function for the computer to pick randomly, Math.random will pick any number between 0 and 1,
// adding Math.floor to Math.random gives us a round number 


function getcomputerChoice (){
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const randomNumber = Math.floor(Math.random() * 5);
    return choices [randomNumber];
}

// create  a function that tells if you win or lose and make a statement on how you win or lose.
function win1(playerChoice, computerChoice){
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = playerChoice + " crushes " + computerChoice + ". You win!";
}function win2(playerChoice, computerChoice){
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = playerChoice + " covers " + computerChoice + ". You win!";
}
function win3(playerChoice, computerChoice){
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = playerChoice + " poisons " + computerChoice + ". You win!";
}
function win4(playerChoice, computerChoice){
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = playerChoice + " smashes " + computerChoice + ". You win!";
}
function win5(playerChoice, computerChoice){
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = playerChoice + " disproves " + computerChoice + ". You win!";
}
function win6(playerChoice, computerChoice){
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = playerChoice + " vaporizes " + computerChoice + ". You win!";
}
function win7(playerChoice, computerChoice){
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = playerChoice + " eats " + computerChoice + ". You win!";
}
function win8(playerChoice, computerChoice){
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = playerChoice + " decapitates " + computerChoice + ". You win!";
}
function win9(playerChoice, computerChoice){
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = playerChoice + " smashes " + computerChoice + ". You win!";
}
function win10(playerChoice, computerChoice){
    playerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = playerChoice + " cuts " + computerChoice + ". You win!";
}


function lose1(playerChoice, computerChoice){
    computerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} crushes ${playerChoice}. You lose!`;
}
function lose2(playerChoice, computerChoice){
    computerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} covers ${playerChoice}. You lose!`;
}
function lose3(playerChoice, computerChoice){
    computerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} poisons ${playerChoice}. You lose!`;
}
function lose4(playerChoice, computerChoice){
    computerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} smashes ${playerChoice}. You lose!`;
}
function lose5(playerChoice, computerChoice){
    computerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} disproves ${playerChoice}. You lose!`;
}
function lose6(playerChoice, computerChoice){
    computerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} vaporizes ${playerChoice}. You lose!`;
}
function lose7(playerChoice, computerChoice){
    computerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} eats ${playerChoice}. You lose!`;
}
function lose8(playerChoice, computerChoice){
    computerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} decapitates ${playerChoice}. You lose!`;
}
function lose9(playerChoice, computerChoice){
    computerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} smashes ${playerChoice}. You lose!`;
}
function lose10(playerChoice, computerChoice){
    computerScore += 1;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} cuts ${playerChoice}. You lose!`;
}

function draw(playerChoice, computerChoice){
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${playerChoice} equals to ${computerChoice}. It's a draw!`
}


// Game function
function play(playerChoice){
    const computerChoice = getcomputerChoice();
    // instead of if statements, we'll use switch statements because it is more efficient to use with fixed values. 
    // if-else statements are good to use with Boolean values like true or false
    switch (playerChoice + computerChoice){
        case "rockscissors":
            win1(playerChoice, computerChoice);
            break;
        case "paperrock":
            win2(playerChoice, computerChoice);
            break;
        case "lizardspock":
            win3(playerChoice, computerChoice);
            break;
        case "spockscissors":
            win4(playerChoice, computerChoice);
            break;
        case "paperspock":
            win5(playerChoice, computerChoice);
            break;
        case "spockrock":
            win6(playerChoice, computerChoice);
            break;
        case "lizardpaper":
            win7(playerChoice, computerChoice);
            break;
        case "scissorslizard":
            win8(playerChoice, computerChoice);
            break;
        case "rocklizard":
            win9(playerChoice, computerChoice);
            break;
        case "scissorpaper":
            win10(playerChoice, computerChoice);
            break;
        case "scissorsrock":
            lose1(playerChoice, computerChoice);
        break;
        case "rockpaper":
            lose2(playerChoice, computerChoice);
        break;
        case "spocklizard":
            lose3(playerChoice, computerChoice);
        break;
        case "scissorsspock":
            lose4(playerChoice, computerChoice);
        break;
        case "spockpaper":
            lose4(playerChoice, computerChoice);
        break;
        case "rockspock":
            lose6(playerChoice, computerChoice);
        break;
        case "paperlizard":
            lose7(playerChoice, computerChoice);
        break;
        case "lizardscissors":
            lose8(playerChoice, computerChoice);
        break;
        case "lizardrock":
            lose9(playerChoice, computerChoice);
        break;
        case "paperscissors":
                lose10(playerChoice, computerChoice);
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            draw(playerChoice,computerChoice);
            break;
            }

        }
// create a function that ends the game
function endGame (){
    if (playerScore === 10){
        result_p.innerHTML = `YOU ARE THE WINNER!!!!`
    }
    else if(computerScore === 10){
        result_p.innerHTML = `You lost to a computer loser!`
    }
    
}


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
