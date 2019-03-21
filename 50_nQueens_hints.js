/*
    Difficulty: Taxing    

    There are "M" different ways you can place "N" queens on an "NxN" chessboard so that none of them are able to capture others. Write a function that calculates them all and prints them to the screen as a visual board layout, and returns the number of solutions it found.

    Tip: A queen moves in straight lines vertically, horizontally, or diagonally. You need to place all eight queens so that no two share the same row, column, or diagonal.

    Samples:
    1) In an 8x8 board you need to place 8 queens. There are 92 possible arrangements, so your function should print each of them then return 92.
    let board  = new Array(8)
    let queens = 0
    solution(board, queens) == 92
    2) In a 10x10 board you need to place 10 queens. There are 724 possible arrangements, so your function should print each of them then return 724.
    board  = new Array(10)
    queens = 0
    solution(board, queens) == 724
*/

// solution1
    // 1. if length of the board is equal to "queensNumber"
        // we hit a solution - print it out
        // 2. console.log "board"

        // 3. loop 0..<board.length and name current item "row" 
            // 4. loop 0..<board.length and name current item "col"
                // 5. if element of board at "row" is equal to "col"
                    // 6. print in line "Q"
                    // 7. else print in line "."
            // 8. console.log empty string
        // 9. console.log empty string
    // else
    // 10. create variable "count" = 0

    // loop over every column
    // 11. (label loop "boardLoop") loop 0..<board.length and name current item "column"
        //check only queens that are placed already
        // 12. loop 0..<queensNumber and name current item "row"
            // find where this queens was placed
            // 13. create variable "otherQueenColumn" equal to element of the board at position "row"

            // 14. if this queen is placed in the column we are checking, stop checking other queens and go to the next column (continue boardLoop)

            // calculate the difference in our row/column and the checking queen's row/column
            // 15. create variable "deltaRow" equal to diff between "queensNumber" and "row"
            // 16. create variable "deltaCol" equal to diff between "otherQueenColumn" and "column"
            
            // if we are on a diagonal with this queen, stop checking other queens and proceed to the next column
            // 17. continue boardLoop if "deltaRow" is equal to "deltaCol"
            // 18. continue boardLoop if "deltaRow" is equal to "-deltaCol"

        // 20. if we're still here it means this move is valid, so take a copy of the board ("boardCopy") and make the move on the copy
        // 21. assign "column" to "boardCopy[queensNumber]"
        
        // now call ourselves recursively, placing one queen number higher, and additing it return value to our solution counter
        // 22. increase "count" by calling solution(boardCopy, queensNumber + 1)
    
    // return solution counter to the caller

let board  = new Array(4)
let queens = 0


// board  = new Array(10)
// queens = 0

/*
************************* PERFORMANCE TESTS *************************
*/


/*
************************* PERFORMANCE RESULTS *************************

*/