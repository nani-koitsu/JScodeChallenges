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

    Hints:
    1) You can evaluate the rows and columns in a loop.
    2) You can evaluate diagonals using two checks: one from top left to bottom right, and one from bottom left to top right.
    3) You might want to use a nested function to make your code cleaner.
*/