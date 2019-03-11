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
Array.prototype.solution1 = function() {
    if (this.length == 0) return null;

    let bestRange = [];
    let currRange = [];
    let bestSum   = 0;
    let currSum   = 0;

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

console.assert([0, 1, 1, -1, 2, 3, 1].solution1().join("")         == [4, 5, 6].join(""), `solution1a() failed!`);
console.assert([10, 20, 30, -10, -20, 10, 20].solution1().join("") == [0, 1, 2].join(""), `solution1b() failed!`);
console.assert([1, -1, 2, -1].solution1().join("")                 == [2].join(""), `solution1c() failed!`);
console.assert([2, 0, 2, 0, 2].solution1().join("")                == [0].join(""), `solution1d() failed!`);
console.assert([].solution1()         == null, `solution1e() failed!`);


// solution2
Array.prototype.solution2 = function() {
    if (this.length == 0) return null;

    let bestRange = [];
    let currRange = [];
    let bestSum   = 0;
    let currSum   = 0;

    function updateBest() {
        if (currSum > bestSum) {
            bestSum   = currSum;
            bestRange = currRange;
        }
    }

    for (let i = 0; i < this.length; i++) {
        if (this[i] > 0) {
            currRange.push(i);
            currSum += this[i];
        } else {
            updateBest();
    
            currSum   = 0;
            currRange = [];
        }
    }

    updateBest();

    return bestRange;
}

console.assert([0, 1, 1, -1, 2, 3, 1].solution2().join("")         == [4, 5, 6].join(""), `solution2a() failed!`);
console.assert([10, 20, 30, -10, -20, 10, 20].solution2().join("") == [0, 1, 2].join(""), `solution2b() failed!`);
console.assert([1, -1, 2, -1].solution2().join("")                 == [2].join(""), `solution2c() failed!`);
console.assert([2, 0, 2, 0, 2].solution2().join("")                == [0].join(""), `solution2d() failed!`);
console.assert([].solution2()         == null, `solution2e() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test
const Numbers = require('./numbers');
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000);
const testArr = [];

console.log(`testNum.length:`, testNum.length);

// add negative numbers to test array
for (let i of testNum) {
    testArr.push(i);

    if (Math.random() > 0.5) testArr.push(-i);
}

console.log(`testArr.length:`, testArr.length);


// test solution1()
let startTime = new Date().getTime();

testArr.solution1();

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

// solution2()
startTime = new Date().getTime();

testArr.solution2();

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.017 sec
Performance of solution2() is 0.048 sec
*/