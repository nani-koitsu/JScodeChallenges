/*
    Difficulty: Tricky    

    Write an extension for array that reimplements the "map()" method.

    Samples:
    [1, 2, 3].solution(e => `${e}`)                == ['1', '2', '3']
    ['1', '2', '3'].solution(e => parseInt(e))     == [1, 2, 3]
    [8, 3, 6].solution((e, i) => `${i}: ${e * 2}`) == ['0: 16', '1: 6', '2: 12']
    
*/

// solution
Array.prototype.solution = function(callback) {
    let arr = [];

    for (let i = 0; i < this.length; i++) arr.push(callback(this[i], i, this));

    return arr;
}

console.assert([1, 2, 3].solution(e => `${e}`).join("")                == ['1', '2', '3'].join(""), `assertion1 failed!`);
console.assert(['1', '2', '3'].solution(e => parseInt(e)).join("")     == [1, 2, 3].join(""), `assertion2 failed!`);
console.assert([8, 3, 6].solution((e, i) => `${i}: ${e * 2}`).join("") == ['0: 16', '1: 6', '2: 12'].join(""), `assertion3 failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test
const Numbers = require('./numbers');
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000);

const BigStr = require('./bigString');
const bigStr = new BigStr();
const text1  = bigStr.getText().split(" ");


// test solution()
let startTime = new Date().getTime();

testNum.solution((e, i) => `${i}: ${e}`);
text1.solution((e, i) => `${i}: ${e}`);

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution() is ${ performance } sec`);

// test default map()
startTime = new Date().getTime();

testNum.map((e, i) => `${i}: ${e}`);
text1.map((e, i) => `${i}: ${e}`);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of default map() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution()    is 0.373 sec
Performance of default map() is 0.384 sec
*/