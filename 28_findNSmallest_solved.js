/*
    Difficulty: Easy    

    Write an extension for array that returns the N smallest elements as an array, sorted smallest first, where N is an integer parameter.

    Samples:
    [1, 2, 3, 1002, 4].solution(3) == [1, 2, 3]
    ["q", "f", "k"].solution(10)   == ["f", "k", "q"]
    [250, 15].solution(3)          == [15, 250]
    [].solution(3)                 == []
*/


Array.prototype.solution1 = function(count) {
    if (this.length == 0) return this;

    if (typeof this[0] == "number") this.sort((e1, e2) => e1 - e2);
    else this.sort();

    return this.slice(0, count);
}

console.assert([1, 2, 3, 1002, 4].solution1(3).join("") == [1, 2, 3].join(""),       `solution1a() failed!`);
console.assert(["q", "f", "k"].solution1(10).join("")   == ["f", "k", "q"].join(""), `solution1b() failed!`);
console.assert([250, 15].solution1(3).join("")          == [15, 250].join(""),       `solution1c() failed!`);
console.assert([].solution1(3).join("")                 == [].join(""),              `solution1d() failed!`);


Array.prototype.solutionJoe = function(count) {
    let result = [];

    if (typeof this[0] == "number") this.sort((a, b) => a - b);
    else this.sort();
    
    for (let i = 0; i < count; i++) {
        if (this[i] == null) break;
        
        result.push(this[i]);
    } 
    
    return result;
}


console.assert([1, 2, 3, 1002, 4].solutionJoe(3).join("") == [1, 2, 3].join(""),       `solutionJoea() failed!`);
console.assert(["q", "f", "k"].solutionJoe(10).join("")   == ["f", "k", "q"].join(""), `solutionJoeb() failed!`);
console.assert([250, 15].solutionJoe(3).join("")          == [15, 250].join(""),       `solutionJoec() failed!`);
console.assert([].solutionJoe(3).join("")                 == [].join(""),              `solutionJoed() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test
const Numbers = require('./numbers');
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000);
testNum.reverse();

// import big string for test
const BigStr  = require('./bigString');
const bigStr  = new BigStr();
const testStr = bigStr.getText().split("");

// test solution1()
let startTime = new Date().getTime();

testNum.solution1(testNum.length);
testStr.solution1(testStr.length);

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);


// test solutionJoe
startTime = new Date().getTime();

testNum.solutionJoe(testNum.length);
testStr.solutionJoe(testStr.length);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionJoe() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1()   is 0.342 sec
Performance of solutionJoe() is 0.063 sec
*/