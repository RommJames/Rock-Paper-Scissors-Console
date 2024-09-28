// Global Variables
let random
let humanScore = 0
let computerScore = 0
let overallMessage = ""

function randomNum(limit){
    random = Math.ceil(Math.random() * limit)
}


function getComputerChoice(){
    let result    
    randomNum(3) 

    switch (random) {
        case 1:
            result = "Rock"
            break;
        case 2:
            result = "Paper"
            break;
        case 3:
            result = "Scissors"
            break;
        default:
            randomNum(3)
            break;
    }

    return result
}

function playRound(humanChoice, computerChoice){
    let rock = humanChoice == "ROCK"
    let paper = humanChoice == "PAPER"
    let scissors = humanChoice == "SCISSORS"
    let cRock = computerChoice == "Rock"
    let cPaper = computerChoice == "Paper"
    let cScissors = computerChoice == "Scissors"
    let loseMessage = `You Lose! ${computerChoice.toUpperCase()} beats ${humanChoice}`
    let winMessage = `You Win! ${humanChoice} beats ${computerChoice.toUpperCase()}`
    let tieMessage = "It's a tie!"
   
    console.log(
        `Your Choice: ${humanChoice} \nComputer Choice: ${computerChoice.toUpperCase()}
        `
    )

    if(rock){

        if(rock == cPaper){
            computerScore++
            console.log(loseMessage)
            overallMessage = loseMessage
        }else if(rock == cScissors){
            humanScore++
            console.log(winMessage)
            overallMessage = winMessage
        }else{
            console.log(tieMessage)
            overallMessage = tieMessage
        }
        

    }else if(paper){

        if(paper == cScissors){
            computerScore++
            console.log(loseMessage)
            overallMessage = loseMessage
        }else if(paper == cRock){
            humanScore++
            console.log(winMessage)
            overallMessage = winMessage
        }else{
            console.log(tieMessage)
            overallMessage = tieMessage
        }

    }else if(scissors){

        if(scissors == cRock){
            computerScore++
            console.log(loseMessage)
            overallMessage = loseMessage
        }else if(scissors == cPaper){
            humanScore++
            console.log(winMessage)
            overallMessage = winMessage
        }else{
            console.log(tieMessage)
            overallMessage = tieMessage
        }
        
    }else{

        console.log("Invalid Choices! Try Again!")
        overallMessage = "Invalid Choices! Try Again!"

    }

    console.log(
        `
        Computer Attack: ${computerChoice.toUpperCase()}
        Scoreboard:
            - Your Score: ${humanScore}
            - Computer Score: ${computerScore}
        `
    )

    updateScoreBoard(overallMessage, humanChoice, computerChoice);
}
let ctrRounds

function playGame(rounds){    
    
    for(let ctr = 1; ctr <= rounds; ctr++){        
        getHumanChoice = prompt("What's your attack? Rock-Paper-Scissors")
        if(!getHumanChoice){
            alert("Please make an attack. Rock-Paper-Scissors")
            playGame(rounds)
        }
        let computerChoice = getComputerChoice()
        playRound(getHumanChoice.toUpperCase(), computerChoice)
        overallMessage == "Invalid Choices! Try Again!" && ctr-- 
    }

}   

function main(){
    const userConfirmed = confirm("Welcome to Rock-Paper-Scissor Game! Do you want to play?")
    if(userConfirmed){
        alert("Great! Let's play!")
        gameRound()
        // console.log(gameRound)
        playGame(gameRound)
    }else{
        alert("Okay, Bye!")
        window.location.href = "https://w0.peakpx.com/wallpaper/955/383/HD-wallpaper-inside-out-emotion-sadness.jpg"
        window.close();
    }
}

// DOM Manipulations
//----- get all elements needed
//get scoreboard elements
const userScoreHTML = document.querySelector("#user-score");
const computerScoreHTML = document.querySelector("#computer-score");
const currentRoundHTML = document.querySelector("#current-round");
const totalRoundHTML = document.querySelector("#total-round");

// get game-field elements
const userAttackHTML = document.querySelector("#user-attack");
const gameResultHTML = document.querySelector("#game-result");
const computerAttackHTML = document.querySelector("#computer-attack");

// controls
const optionsHTML = document.querySelector("#options")

// Trigger User Attack
optionsHTML.addEventListener("click", (event)=>{
    let target = defaultRounds != currentRound ? event.target : "disable";
    let computerChoice = getComputerChoice()

    switch(target.id) {
        case 'op-rock':
            playRound("ROCK", computerChoice);
            break;
        case 'op-paper':
            playRound("PAPER", computerChoice);
            break;            
        case 'op-scissors':
            playRound("SCISSORS", computerChoice);
            break;     
        default:
            gameOver()
            break;   
    }
})

// Dynamic Scoreboard
function updateScoreBoard(message, userAttack, computerAttack){
    userScoreHTML.textContent = humanScore;
    computerScoreHTML.textContent = computerScore;
    gameResultHTML.textContent = message;  
    gameAnimation(userAttack, computerAttack);
    checkRounds();
}

// Trigger Animation

function gameAnimation(userAttack, computerAttack){
    
    gameResultHTML.classList.add("game-result-animation");
    userAttackHTML.classList.add("attack-animation");
    computerAttackHTML.classList.add("attack-animation");

    gameResultHTML.style.opacity = "1";
    gameResultHTML.style.transform = "scale(1)";
    // Can be loop but for now I make it like sequence
    userAttackHTML.style.opacity = "1";
    userAttackHTML.style.transform = "translateY(0%)"
    computerAttackHTML.style.opacity = "1";
    computerAttackHTML.style.transform = "translateY(0%)"
    setTimeout(() => {
        gameResultHTML.classList.remove
        ('game-result-animation');        
        userAttackHTML.classList.remove("attack-animation");
        computerAttackHTML.classList.remove("attack-animation");
    }, 500);

    attackAnimation(userAttack, computerAttack)

}

function attackAnimation(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    userAttackHTML.innerHTML = 
    `
        <img src="media/${humanChoice}.png" alt="${humanChoice} attack">
    `   
    computerAttackHTML.innerHTML =
    `
        <img src="media/${computerChoice}.png" alt="${computerChoice} attack">
    `
}

// Dynamic Rounds
let defaultRounds = 5
let currentRound = 0
checkRounds();
function checkRounds(){
    currentRound++
    currentRoundHTML.textContent = currentRound
    totalRoundHTML.textContent = defaultRounds
    defaultRounds == currentRound && alert("Game over");    
}

// Edit Rounds
totalRoundHTML.addEventListener("click", (e)=>{
    let target = e.target
    const input = document.createElement("input");
    input.type = "number";
    input.setAttribute("class", "number-input")
    input.value = target.textContent

    input.addEventListener('blur', () => {
        updateRounds(target, input)
    });

    input.addEventListener('keyup', (e)=>{
        e.key == "Enter" && updateRounds(target, input);
    })

    target.style.display = 'none';
    target.parentNode.insertBefore(input, target);
    input.focus();
})

function updateRounds(target, input){
    target.textContent = input.value;
    defaultRounds = input.value
    target.style.display = 'inline';
    input.remove();
}

// Game Over
function gameOver(){
    console.log("Game Over");
}