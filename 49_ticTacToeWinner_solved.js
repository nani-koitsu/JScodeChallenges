/*
    Difficulty: Tricky    

    Create array extension that detects whether either player has won in a game of Tic-Tac-Toe.

    Tip: A tic-tac-toe board is 3x3, containing single letters that are either X, O, or empty. A win is three Xs or Os in a straight line.

    Samples:
    1) [["X", "",  "O"], 
        ["",  "X", "O"], 
        ["",  "",  "X"]].solution() == true
    2) [["O", "",  "X"], 
        ["O", "",  "X"], 
        ["O", "",  ""]].solution() == true
    3) [["",  "X", ""], 
        ["O", "X", ""], 
        ["O", "",  "X"]].solution() == false
    4) [["",  "",  ""], 
        ["",  "",  ""], 
        ["",  "",  ""]].solution() == false
*/


// solution1
Array.prototype.solution1 = function() {
    for (let i = 0; i < 3; i++) {
        if (this[i][0] != "" && this[i][0] == this[i][1] && this[i][0] == this[i][2]) return true
        if (this[0][i] != "" && this[0][i] == this[1][i] && this[0][i] == this[2][i]) return true
    }
    
    if (this[0][0] != "" && this[0][0] == this[1][1] && this[0][0] == this[2][2]) return true
    if (this[0][2] != "" && this[0][2] == this[1][1] && this[0][2] == this[2][0]) return true
    
    return false
}

console.assert([["X", "",  "O"], 
                ["",  "X", "O"], 
                ["",  "",  "X"]].solution1() == true, `solution1_a failed!`)
console.assert([["O", "",  "X"], 
                ["O", "",  "X"], 
                ["O", "",  ""]].solution1() == true, `solution1_b failed!`)
console.assert([["",  "X", ""], 
                ["O", "X", ""], 
                ["O", "",  "X"]].solution1() == false, `solution1_c failed!`)
console.assert([["",  "",  ""], 
                ["",  "",  ""], 
                ["",  "",  ""]].solution1() == false, `solution1_d failed!`)

    
// solution2
Array.prototype.solution2 = function() {
    function isWin(first, second, third) {
        if (first == "") return

        return first == second && first == third
    }

    for (let i = 0; i < 3; i++) {
        if (isWin(this[0][i], this[1][i], this[2][i])) return true
        if (isWin(this[i][0], this[i][1], this[i][2])) return true
    }

    if (isWin(this[0][0], this[1][1], this[2][2])) return true
    if (isWin(this[0][2], this[1][1], this[2][0])) return true

    return false
}

console.assert([["X", "",  "O"], 
                ["",  "X", "O"], 
                ["",  "",  "X"]].solution2() == true, `solution2_a failed!`)
console.assert([["O", "",  "X"], 
                ["O", "",  "X"], 
                ["O", "",  ""]].solution2() == true, `solution2_b failed!`)
console.assert([["",  "X", ""], 
                ["O", "X", ""], 
                ["O", "",  "X"]].solution2() == false, `solution2_c failed!`)
console.assert([["",  "",  ""], 
                ["",  "",  ""], 
                ["",  "",  ""]].solution2() == false, `solution2_d failed!`)