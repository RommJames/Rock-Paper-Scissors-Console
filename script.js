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
        `Human Choice: ${humanChoice} \nComputer Choice: ${computerChoice.toUpperCase()}
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

        console.log("Invalid Choices!")
        overallMessage = "Invalid Choices!"

    }

    console.log(
        `Scoreboard:
            - HumanScore: ${humanScore}
            - ComputerScore: ${computerScore}
        `
    )

    alert(
        `
        Computer Attack: ${computerChoice.toUpperCase()}
        Scoreboard:
            - HumanScore: ${humanScore}
            - ComputerScore: ${computerScore}
        -------------------------------------
        ${overallMessage}        
        `
    )
}
let ctrRounds

function playGame(rounds){    
    
    for(let ctr = 1; ctr <= rounds; ctr++){        
        getHumanChoice = prompt("What's your attack? Rock-Paper-Scissors")
        let computerChoice = getComputerChoice()
        playRound(getHumanChoice.toUpperCase(), computerChoice)
        overallMessage == "Invalid Choices!" && ctr-- 
    }

}   

playGame(5)

// main()
// console.log("Computer Attacks: ", getComputerChoice())