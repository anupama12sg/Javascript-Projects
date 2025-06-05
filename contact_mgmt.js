const prompt = require("prompt-sync")()

function printInfo() {
    console.log("Contact Management System")
    console.log("-------------------------")
    console.log("1. Add a contact")
    console.log("2. Delete a contact")
    console.log("3. View Contacts")
    console.log("Search Contacts")
    console.log("5. Exit")
}

printInfo()

while (true) {
const number = prompt("Enter an operation (1-5): ")
switch (number) {
    case "1":
        break;

    case "2":
        break;

    case "3":
        break;

    case "4":
        break;

    case "5":
        break;

    default:
        console.log("Unknown")
        break;
}
}