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
function solution(board, queensNumber) {
    if (board.length == queensNumber) {
        // we hit a solution - print it out
        console.log(board)

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board.length; col++) {
                if (board[row] == col) process.stdout.write(`${" ♛ "}`)
                else process.stdout.write(`${" . "}`)
            } 
            console.log(``)
        }
        console.log(``)

        return 1
    } else {
        let count = 0
    
        // loop over every column
        boardLoop: for(let column = 0; column < board.length; column++) {
            //check only queens that are placed already
            for (let row = 0; row < queensNumber; row++) {
                // find where this queens was placed
                let otherQueenColumn = board[row]
    
                if (otherQueenColumn == column) continue boardLoop
    
                // calculate the difference in our row/column and the checking queen's row/column
                let deltaRow = queensNumber - row
                let deltaCol = otherQueenColumn - column
                
                // if we are on a diagonal with this queen, stop checking other queens and proceed to the next column
                if (deltaRow == deltaCol) continue boardLoop
                if (deltaRow == -deltaCol) continue boardLoop
            }
    
            let boardCopy = board.slice()

            boardCopy[queensNumber] = column
            
            // now call ourselves recursively, placing one queen number higher, and additing it return value to our solution counter
            count += solution(boardCopy, queensNumber + 1)
        }
        
        // return solution counter to the caller
        return count
    }
}

let board  = new Array(8)
let queens = 0

console.assert(solution(board, queens) == 92, `assertion_1 failed! 😱`)

board  = new Array(10)
queens = 0

console.assert(solution(board, queens) == 724, `assertion_2 failed! 😱`)

// solutionGreg
solutionGreg = function(n) {
    //Symmetry will not work for N=1 and N=0 because the one solution's mirror image is itself
    if(n === 0 || n === 1) return 1;
    //Keeps track of the # of valid solutions
    var count = 0;
    //Helps identify valid solutions
    var done  = (1 << n) -1;
    //Determines the positions in the first row that will be excluded from our search
    //Also applies to the second row when N is odd and the first queen is in the middle
    var excl  = (1 << ((n/2)^0))-1;
    //Checks all possible board configurations
    var innerRecurse = function(leftDiagonal, columns, rightDiagonal, ex1, ex2) {
        //All columns are occupied, so the solution must be complete
        if (columns === done) {
            count++;
            return;
        }
        //Gets a bit sequence with "1"s
        //where there is an open "slot"
        //ex1 filters out right half or row
        var possible = ~(leftDiagonal | rightDiagonal | columns | ex1) & done;
        //Loops as long as there is a valid
        //place to put another queen.
        while ( possible ) {
            var bit  = possible & -possible;
            possible = possible^bit;
            //ex2 will become the next row's ex1
            //all rows after that will have ex1 =0
            innerRecurse((leftDiagonal|bit)>>1, columns|bit, (rightDiagonal|bit)<<1, ex2, 0);
            //after we are past the middle square in the first row, disable filter for second row
            ex2 = 0;
        }
    };
    //second row filter active only for odd N
    innerRecurse(0,0,0, excl, n%2 ? excl : 0);
        //Multiply count by 2
    return count << 1;
};

console.assert(solutionGreg(8)  == 92,  `assertionGreg_1 failed!😱`)
console.assert(solutionGreg(10) == 724, `assertionGreg_2 failed! 😱`)

/*
************************* PERFORMANCE TESTS *************************
*/


// test solution(11x11)
board           = new Array(11)
queens          = 0
let startTime   = new Date().getTime()
let result      = solution(board, queens)
let finishTime  = new Date().getTime()
let performance = (finishTime - startTime) / 1000

console.log(`${result} solutions found!`)
console.log(`Performance of solution(11x11) is ${ performance } sec`)

// test solutionGreg(11x11)
startTime = new Date().getTime()

solutionGreg(11)

finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000

console.log(`Performance of solutionGreg() is ${ performance } sec`)

// test solution(12x12)
board       = new Array(12)
startTime   = new Date().getTime()
result      = solution(board, queens)
finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000

console.log(`${result} solutions found!`)
console.log(`Performance of solution(12x12) is ${ performance } sec`)

// test solutionGreg(12x12)
startTime = new Date().getTime()

solutionGreg(12)

finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000

console.log(`Performance of solutionGreg() is ${ performance } sec`)

// test solution(13x13)
board       = new Array(13)
startTime   = new Date().getTime()
result      = solution(board, queens)
finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000

console.log(`${result} solutions found!`)
console.log(`Performance of solution(13x13) is ${ performance } sec`)

// test solutionGreg(13x13)
startTime = new Date().getTime()

solutionGreg(13)

finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000

console.log(`Performance of solutionGreg() is ${ performance } sec`)

// test solution(14x14)
board       = new Array(14)
startTime   = new Date().getTime()
result      = solution(board, queens)
finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000

console.log(`${result} solutions found!`)
console.log(`Performance of solution(14x14) is ${ performance } sec`)

// test solutionGreg(14x14)
startTime = new Date().getTime()

solutionGreg(14)

finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000

console.log(`Performance of solutionGreg() is ${ performance } sec`)

/*
************************* PERFORMANCE RESULTS *************************

2_680 solutions found!
Performance of solution(11x11) is 0.036 sec
Performance of solutionGreg()  is 0.001 sec
14_200 solutions found!
Performance of solution(12x12) is 0.191 sec
Performance of solutionGreg()  is 0.006 sec
73_712 solutions found!
Performance of solution(13x13) is 1.165 sec
Performance of solutionGreg()  is 0.032 sec
365_596 solutions found!
Performance of solution(14x14) is 7.437 sec
Performance of solutionGreg()  is 0.196 sec
*/