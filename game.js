let humanScore = 0;
let computerScore = 0;

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}


function getComputerChoice() {
    let randomInt = getRandomInt();
    if(randomInt===0){
        return "rock";
    }
    if(randomInt===1){
        return "paper";
    }
    if(randomInt===2){
        return "scissors";
    }
}


function getHumanChoice() {
    return prompt("pick your play").toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        console.log("It's a tie");
    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! rock beats scissors");
        humanScore ++;
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! paper beats rock");
        humanScore ++;
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! scissors beat paper");
        humanScore ++;
    }else {
        console.log("You lose! " + computerChoice + " beats" + " " + humanChoice);
        computerScore ++;
    }
}





function playGame() {
    let humanPlay;
    let computerPlay;
    for(let i = 0; i<5; i++){
        computerPlay = getComputerChoice();
        humanPlay = getHumanChoice();
        playRound(humanPlay,computerPlay);
    }
    if(humanScore > computerScore){
        console.log("You won!");
    }else if(humanScore===computerScore) {
        console.log("It's a tie!");
    }
    else {
        console.log("You lost! Better luck next time.");
    }
}

playGame();