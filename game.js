let humanScore = 0
let computerScore = 0
let rondas = 0
let humanChoice = ""

const eleccionPiedra = document.querySelector("#Piedra")
const eleccionPapel = document.querySelector("#Papel")
const eleccionTijera = document.querySelector("#Tijera")
const mostrarResultados = document.querySelector("#mostrarResultados")
const parrafoEleccion = document.createElement("p")
const parrafoRondas = document.createElement("p")
const parrafoPuntaje = document.createElement("p")
const parrafoGanador = document.createElement("p")
const parrafoGanadorCombate = document.createElement("p")
mostrarResultados.appendChild(parrafoEleccion)
mostrarResultados.appendChild(parrafoRondas)
mostrarResultados.appendChild(parrafoPuntaje)
mostrarResultados.appendChild(parrafoGanador)
mostrarResultados.appendChild(parrafoGanadorCombate)

function getComputerChoice() {
    let eleccionPc = Math.floor(Math.random() * (4 - 1) + 1)
    switch (eleccionPc) {
        case 1:
            return "piedra"
        case 2:
            return "papel"
        case 3:
            return "tijera"
    }
}

function playRound(humanChoice, computerChoice) {
    parrafoEleccion.innerHTML = `Haz elegido: <span>${humanChoice}</span>, La maquina ha elegido: <span>${computerChoice}</span>`
    parrafoRondas.textContent = `Esta es la ronda: ${rondas}`
    if (humanChoice === computerChoice) {
        parrafoGanadorCombate.textContent = "Haz empatado esta ronda"
    }
    else if (humanChoice === "piedra" && computerChoice === "tijera") {
        parrafoGanadorCombate.textContent = "Haz ganado esta ronda 🥵"
        ++humanScore
    }
    else if (humanChoice === "papel" && computerChoice === "piedra") {
        parrafoGanadorCombate.textContent = "Haz ganado esta ronda 🥵"
        ++humanScore
    }
    else if (humanChoice === "tijera" && computerChoice === "papel") {
        parrafoGanadorCombate.textContent = "Haz ganado esta ronda 🥵"
        ++humanScore
    }
    else {
        parrafoGanadorCombate.textContent = "Haz perdido esta ronda 🥶"
        ++computerScore
    }
    parrafoPuntaje.innerHTML = `Tu puntaje es: ${humanScore} <br> Puntuacion de la maquina: ${computerScore}`
}

function choiceWinner() {
    parrafoGanadorCombate.style.display = "none"
    if (humanScore > computerScore) {
        parrafoGanador.textContent = "Haz ganado el juego!🥳"
    }
    else if (humanScore === computerScore) {
        parrafoGanador.textContent = "Haz empatado el juego!"
        console.log("Haz empatado el juego")
    }
    else {
        parrafoGanador.textContent = "Haz perdido el juego😵"
    }
}

function playGame() {
    eleccionPiedra.addEventListener("click", (event) => {
        console.log(computerScore)
        if (humanScore < 5 && computerScore < 5) {
            humanChoice = "piedra"
            ++rondas
            playRound(humanChoice, getComputerChoice())
        } else {
            choiceWinner()
        }
    })
    eleccionPapel.addEventListener("click", (event) => {
        console.log(computerScore)
        if (humanScore < 5 && computerScore < 5) {
            humanChoice = "papel"
            ++rondas
            playRound(humanChoice, getComputerChoice())
        } else {
            choiceWinner()
        }
    })
    eleccionTijera.addEventListener("click", (event) => {
        console.log(computerScore)
        if (humanScore < 5 && computerScore < 5) {
            humanChoice = "tijera"
            ++rondas
            playRound(humanChoice, getComputerChoice())
        } else {
            choiceWinner()
        }
    })
}
playGame();








