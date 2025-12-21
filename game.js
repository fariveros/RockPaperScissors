let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let eleccionPc = Math.floor(Math.random() * (4 - 1) + 1)
    switch (eleccionPc) {
        case 1:
            return "piedra"
            break
        case 2:
            return "papel"
            break
        case 3:
            return "tijera"
            break

    }
}
function getHumanChoice() {
    let eleccion = prompt('Ingrese "Piedra" "Papel" o "Tijera"')
    let elegido = eleccion.toLowerCase()
    switch (elegido) {
        case "piedra":
            return "piedra"
            break
        case "papel":
            return "papel"
            break
        case "tijera":
            return "tijera"
            break
    }
}
function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice) {
        console.log("Haz empatado")
    }
    else if (humanChoice === "piedra" && computerChoice === "tijera") {
        console.log("Haz ganado esta ronda") 
        ++humanScore
    }
    else if (humanChoice === "papel" && computerChoice === "piedra") {
        console.log("Haz ganado esta ronda") 
        ++humanScore
    }
    else if (humanChoice === "tijera" && computerChoice === "papel") {
        console.log("Haz ganado esta ronda")
        ++humanScore
    }
    else {
        console.log("Haz perdido esta ronda")
        ++computerScore
    }
}
function playGame () {
    
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(`El valor seleccionado por el usuario es: ${humanSelection}`)
console.log(`El valor seleccionado por el computador es: ${computerSelection}`)
playRound(humanSelection, computerSelection)
console.log(humanScore)
console.log(computerScore)
