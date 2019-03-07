/*
    Difficulty: Tricky    

    Write an extension for array that reimplements the "Math.min()" method.

    Samples:
    [1, 2, 3].solution()       == Math.min(...[1, 2, 3])
    ["q", "f", "k"].solution() == "f"
    [4096, 256, 16].solution() == 16
    [].solution()              == null
*/

// solution1
Array.prototype.solution1 = function() {
    if (this.length == 0) return null;

    if      (typeof this[0] == "string") return this.sort()[0]
    else if (typeof this[0] == "number") return this.sort((e1, e2) => e1 -e2)[0];
}

console.assert([1, 2, 3].solution1()       == Math.min(...[1, 2, 3]), `solution1a() failed!`);
console.assert(["q", "f", "k"].solution1() == "f",                    `solution1b() failed!`);
console.assert([4096, 256, 16].solution1() == 16,                     `solution1c() failed!`);
console.assert([].solution1()              == null,                   `solution1d() failed!`);


// solution2
Array.prototype.solution2 = function() {
    if (this.length == 0) return null;
    
    let lowest = this[0];

    for (let i of this) if (i < lowest) lowest = i;
    
    return lowest;
}

console.assert([1, 2, 3].solution2()       == Math.min(...[1, 2, 3]), `solution2a() failed!`);
console.assert(["q", "f", "k"].solution2() == "f",                    `solution2b() failed!`);
console.assert([4096, 256, 16].solution2() == 16,                     `solution2c() failed!`);
console.assert([].solution2()              == null,                   `solution2d() failed!`);
    

// solution3
Array.prototype.solution3 = function() {
    if (this.length == 0) return null;

    return this.reduce((prev, curr) => prev > curr ? curr : prev);
}

console.assert([1, 2, 3].solution3()       == Math.min(...[1, 2, 3]), `solution3a() failed!`);
console.assert(["q", "f", "k"].solution3() == "f",                    `solution3b() failed!`);
console.assert([4096, 256, 16].solution3() == 16,                     `solution3c() failed!`);
console.assert([].solution3()              == null,                   `solution3d() failed!`);
        

/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test
const Numbers = require('./numbers');
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000);

// import big string for test
const BigStr = require('./bigString');
const bigStr = new BigStr();
const text1  = bigStr.getText().split(" ");

// test solution1()
let startTime = new Date().getTime();

testNum.solution1();
text1.solution1();

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

// test solution1()
startTime = new Date().getTime();

testNum.solution2();
text1.solution2();

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);

// test solution3()
startTime = new Date().getTime();

testNum.solution3();
text1.solution3();

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution3() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.113 sec
Performance of solution2() is 0.026 sec
Performance of solution3() is 0.015 sec
*/