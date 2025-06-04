const prompt = require("prompt-sync")()

const number1 = parseFloat(prompt("Enter number 1: "))
const number2 = parseFloat(prompt("Enter number 2: "))
const operator = prompt("Enter sign: ")

let result;
switch (operator) {
    case "+":
        result = number1 + number2     //8 + 9 = 89
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

