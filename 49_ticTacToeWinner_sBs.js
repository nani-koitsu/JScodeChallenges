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
    // 1. loop from 0 up to 3 
        // 2. return "true" if items at current index in each row is the same and not equal to empty string
        // 3. return "true" if items at current index in each column is the same and not equal to empty string

    // 4. return "true" if items, checking diagonally top left to bottom right, is the same and not equal to empty string
    // 5. return "true" if items, checking diagonally bottom left to top right, is the same and not equal to empty string

    // 6. return "false"

    
// solution2
    // 7. create nested function "isWin" accepting three arguments(first, second and third)
        // 8. return if "first" is an empty string

        // 9. return if "first" is equal to "second" and "third"

    // 10. loop from 0 up to 3
        // 11. return "true" if "isWin() == true" passing items at current index in each column
        // 12. return "true" if "isWin() == true" passing items at current index in each row 

    // 13. return "true" if "isWin() == true" passing items diagonally top left to bottom right 
    // 14. return "true" if "isWin() == true" passing items diagonally bottom left to top right 

    // 15. return "false"