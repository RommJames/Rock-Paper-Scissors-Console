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
        `Scoreboard:
            - Your Score: ${humanScore}
            - Computer Score: ${computerScore}
        `
    )

    alert(
        `
        Computer Attack: ${computerChoice.toUpperCase()}
        Scoreboard:
            - Your Score: ${humanScore}
            - Computer Score: ${computerScore}
        -------------------------------------
        ${overallMessage}        
        `
    )
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

function gameRound(){
    gameRound = prompt("How many rounds do you want to play Rock-Paper-Scissors game with the Computer?")

    if(!gameRound){
        alert("Let's Play Please. Only 3 rounds, okay?")
        playGame(3)
    }
}

function main(){

    const userConfirmed = confirm("Welcome to Rock-Paper-Scissor Game! Do you want to play?")
    if(userConfirmed){
        alert("Great! Let's play!")
        gameRound()        
        playGame(gameRound)
    }else{
        alert("Okay, Bye!")
        window.location.href = "https://w0.peakpx.com/wallpaper/955/383/HD-wallpaper-inside-out-emotion-sadness.jpg"
        window.close();
    }
}

// main()


// playGame(5)

// main()
// console.log("Computer Attacks: ", getComputerChoice())