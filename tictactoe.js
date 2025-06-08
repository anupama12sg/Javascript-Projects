const prompt = require("prompt-sync")()

function makeMove(turn, board) {
    const row = parseInt(prompt("Enter row: "))
    const col = parseInt(prompt("Enter col: "))

    if (isNaN(row) || row < 1 || row > 3) console.log("Invalid row.")
    else if (isNaN(col) || col < 1 || col > 3) console.log("Invalid column.")
}

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

