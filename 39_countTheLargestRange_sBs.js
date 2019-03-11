/*
    Difficulty: Tricky    

    Write an extension for array of positive and negative numbers and returns a closed range containing the position of the contiguous positive numbers that sum to the highest value, or nil if nothing were found.

    Samples:
    [0, 1, 1, -1, 2, 3, 1].solution()         == [4, 5, 6]
    [10, 20, 30, -10, -20, 10, 20].solution() == [0, 1, 2]
    [1, -1, 2, -1].solution()                 == [2]
    [2, 0, 2, 0, 2].solution()                == [0]
    [].solution()                             == null
*/

// solution
Array.prototype.solution = function() {
    if (this.length == 0) return null;
    // 1. return "null" if initial array is empty

    let bestRange = [];
    let currRange = [];
    let bestSum   = 0;
    let currSum   = 0;

    // create function updateBest

    for (let i = 0; i < this.length; i++) {
        if (this[i] > 0) {
            currRange.push(i);
            currSum += this[i];
        } else {
            if (currSum > bestSum) {
                bestSum   = currSum;
                bestRange = currRange;
            }
    
            currSum   = 0;
            currRange = [];
        }
    }

    if (currSum > bestSum) {
        bestSum   = currSum;
        bestRange = currRange;
    }

    return bestRange;
}

/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test

// add negative numbers to test array

// test solution()


/*
************************* PERFORMANCE RESULTS *************************

*/