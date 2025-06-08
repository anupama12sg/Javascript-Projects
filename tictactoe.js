const prompt = require("prompt-sync")()

function makeMove(turn, board) {
    while (true) {
        const row = parseInt(prompt("Enter row: "))
        const col = parseInt(prompt("Enter col: "))

        if (isNaN(row) || row < 1 || row > 3) console.log("Invalid row.")
        else if (isNaN(col) || col < 1 || col > 3) console.log("Invalid column.")
        else if (board[row - 1][col - 1] !== " ") console.log("Invalid position.")
        else {
            board[row - 1][col - 1] = turn
            break
        }
    }
}

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

let turn = "X";
let turnCount = 0;

while (turnCount < 9) {
    makeMove(turn, board)
    console.log(board)

    if (turn === "X") turn = "O"
    else turn = "X"
    turnCount++;
}