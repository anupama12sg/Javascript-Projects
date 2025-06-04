const prompt = require("prompt-sync")()

const number1 = parseFloat(prompt("Enter number 1: "))
const number2 = parseFloat(prompt("Enter number 2: "))
const operator = prompt("Enter sign: ")

let result;
let valid = true; 
switch (operator) {
    case "+":
        result = number1 + number2     //8 + 9 = 89
        break;
    case "-":
        result = number1 - number2
        break;
    case "*":
        result = number1 * number2
        break;
    case "/":
        result = number1 / number2
        break;
    default:
        console.log("Invalid")
        valid = false;
        break;
}
if (valid) 
    console.log(number1, operator, number2, "=", result)

