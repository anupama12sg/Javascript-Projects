const prompt = require("prompt-sync")()

function printInfo() {
    console.log("Contact Management System")
    console.log("-------------------------")
    console.log("1. Add a contact")
    console.log("2. Delete a contact")
    console.log("3. View Contacts")
    console.log("4. Search Contacts")
    console.log("5. Exit")
}

function addContact() {
    const name = prompt("Name: ")
    const email = prompt("Email: ")
    const contact = {
        name: name,
        email: email
    }
    contacts.push(contact)
    console.log("Added!")
}

function deleteContact() {

}

function searchContact() {

}

function listContacts(contacts) {
    for (let contact of contacts) {
        console.log("----------------")
        console.log("Name:", contact.name)
        console.log("Email", contact.email)
    }
}

const contacts = []
printInfo()

let keepGoing = true;
while (keepGoing) {
    const number = prompt("Enter an operation (1-5): ")
    console.log()
    switch (number) {
        case "1":
            addContact()
            break;

        case "2":
            deleteContact()
            break;

        case "3":
            listContacts(contacts)       //pass contacts
            break;

        case "4":
            searchContact()
            break;

        case "5":
            keepGoing = false;
            break;

        default:
            console.log("Unknown")
            break;
    }
} 