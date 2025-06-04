const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hello", name, "welcome to our game!")

const shouldWePlay = prompt("Do you want to play?")

if (shouldWePlay.toLowerCase() === "yes") {
    console.log("Okay we will play!")
} else {
    console.log("Exit")
}