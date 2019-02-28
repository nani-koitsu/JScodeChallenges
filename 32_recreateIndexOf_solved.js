/*
    Difficulty: Easy    

    Write an extension for array that reimplements the indexOf method.

    Tip: This is one of the easiest standard library methods to reimplement, so please give it an especially good try before reading any hints.

    Samples:
    [1, 2, 3].solution(1) == 0
    [1, 2, 3].solution(3) == 2
    [1, 2, 3].solution(5) == null
*/

// solution1
Array.prototype.solution1 = function(element) {
    for (let i in this) if (this[i] == element) return i; 
        
    return null;
}

console.assert([1, 2, 3].solution1(1) == 0,    `solution1a() failed!`);
console.assert([1, 2, 3].solution1(3) == 2,    `solution1b() failed!`);
console.assert([1, 2, 3].solution1(5) == null, `solution1c() failed!`);


// solution2
Array.prototype.solution2 = function(element) {
    if (!this.includes(element)) return null;

    for (let i in this) if (this[i] == element) return i; 
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test
const Numbers = require('./numbers');
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000);


// test solution1()
let startTime = new Date().getTime();

testNum.solution1(testNum[testNum.length - 1]);
testNum.solution1(20);

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

// test solution2()
startTime = new Date().getTime();

testNum.solution2(testNum[testNum.length - 1]);
testNum.solution2(20);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.484 sec
Performance of solution2() is 0.238 sec
*/