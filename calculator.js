const prompt = require("prompt-sync")()

const number1 = prompt("Enter number 1: ")
const number2 = prompt("Enter number 2: ")
const operator = prompt("Enter sign: ")

let result;
switch (operator) {
    case "+":
        result = number1 + number2
        console.log(result)
        break;
    case "-":
        result = number1 - number2
        console.log(result)
        break;
    case "*":
        result = number1 * number2
        console.log(result)
        break;
    case "/":
        result = number1 / number2
        console.log(result)
        break;

}

