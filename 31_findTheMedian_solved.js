/*
    Difficulty: Easy    

    Write an extension to array that accepts an array of Int and returns the median average, or null if there are no values.

    Tip: The mean average is the sum of some numbers divided by how many there are. The median average is the middle of a sorted list. If there is no single middle value – e.g. if there are eight numbers - then the median is the mean of the two middle values.

    Samples:
    [1, 2, 3].solution()          == 2
    [1, 2, 9].solution()          == 2
    [1, 3, 1007, 5, 9].solution() == 5
    [1, 2, 3, 4].solution()       == 2.5
*/

// solution1
Array.prototype.solution1 = function() {
    if (this.length == 0) return null;

    let middle = this.length / 2;
    let sorted = this.sort((e1, e2) => e2 - e1);

    if (middle % 2 != 0) return sorted[Math.floor(middle)];
    else                 return (sorted[middle - 1] + sorted[middle]) / 2;
}

console.assert([1, 2, 3].solution1()          == 2,   `solution1a() failed!`);
console.assert([1, 2, 9].solution1()          == 2,   `solution1b() failed!`);
console.assert([1, 3, 1007, 5, 9].solution1() == 5,   `solution1c() failed!`);
console.assert([1, 2, 3, 4].solution1()       == 2.5, `solution1d() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test
const Numbers = require('./numbers');
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000).reverse();


// test solution1()
let startTime = new Date().getTime();

testNum.solution1();

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.009 sec
*/