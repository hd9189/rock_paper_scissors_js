let humanScore = computerScore = 0;

function getComputerChoice(){
    let n = Math.random();
    if (n < 0.33){
        return "Rock";
    } else if (n < 0.67){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Choose Rock (R), Paper (P), or Scissors (S)");
    if (choice == "R" || choice == "r"){
        return "Rock";
    } else if (choice == "P" || choice == "p"){
        return "Paper";
    } else if (choice == "S" || choice == "s"){
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice){
    // 0 = draw, 1 = human win, 2 = comp win
    if (humanChoice == computerChoice){
        return 0;
    } else if (humanChoice == "Rock"){
        if (computerChoice == "Scissors"){
            ++humanScore

        } else { //other choice only can be paper
            ++computerScore

        }
    } else if (humanChoice == "Paper"){
        if (computerChoice == "Rock"){
            ++humanScore

        } else { //other choice only can be Scissors
            ++computerScore

        }
    }else if (humanChoice == "Scissors"){
        if (computerChoice == "Paper"){
            ++humanScore
        } else { //other choice only can be Rock
            ++computerScore
        }
    }
}


for (let i = 0; i < 5; i++){
    
    let humanChoice = getHumanChoice()
    let compChoice = getComputerChoice()
    playRound(humanChoice, compChoice)
    console.log(humanScore)
    console.log(computerScore)
}