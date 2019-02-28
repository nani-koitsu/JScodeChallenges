/*
    Difficulty: Easy    

    Extend arrays with a function that accepts an array of numbers from 0 to 100 where zero or more numbers might be missing, and returns an array of the missing numbers.

    Samples:
    let arr = [...Array(100).keys()];
    arr.splice(35, 1);
    arr.splice(20, 1);
    arr.splice(7, 1);
    arr.solution() == [7, 20, 35];
*/

let arr = [...Array(100).keys()];
arr.splice(35, 1);
arr.splice(20, 1);
arr.splice(7, 1);

Array.prototype.solution1 = function() {
    let diff =[];
    let controlArr = [...Array(10000).keys()];

    for (let i of controlArr) if (!this.includes(i)) diff.push(i);

    return diff
}


console.assert(arr.solution1().join("") == [7, 20, 35].join(""), `solution1a() failed!`);
    

arr = [...Array(100).keys()];
arr.splice(35, 1);
arr.splice(20, 1);
arr.splice(7, 1);

Array.prototype.solution2 = function() {
    let diff = [];
    let controlArr = [...Array(10000).keys()];
    let thisSet = new Set(this);

    for (let i of controlArr) if (!thisSet.has(i)) diff.push(i);
 
    return diff
}

console.assert(arr.solution2().join("") == [7, 20, 35].join(""), `solution2a() failed!`);


arr = [...Array(100).keys()];
arr.splice(35, 1);
arr.splice(20, 1);
arr.splice(7, 1);

Array.prototype.solution3 = function() {
    let contolArr = [...Array(10000).keys()];

    return contolArr.filter(e => !this.includes(e));
}

console.assert(arr.solution3().join("") == [7, 20, 35].join(""), `solution3a() failed!`);


arr = [...Array(100).keys()];
arr.splice(35, 1);
arr.splice(20, 1);
arr.splice(7, 1);

Array.prototype.solutionJoe = function() {
    let result = [];

    for (let i = 0; i < 10000; i++) {
        if (this[i] !== i) {
            result.push(i);
            this.splice(i, 0, '');
        }  
    } 
    
    for (let i = 0; i < this.length; i++) {
        if (this[i] == '') this.splice(i, 1);
    }

    return result;
}

console.assert(arr.solutionJoe().join("") == [7, 20, 35].join(""), `solutionJoe() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test
const Numbers = require('./numbers');
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000);


// test solution1()
let startTime = new Date().getTime();

testNum.solution1();

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

// test solution2()
startTime = new Date().getTime();

testNum.solution2();

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);

// test solution3()
startTime = new Date().getTime();

testNum.solution3();

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution3() is ${ performance } sec`);


// test solutionJoe
startTime = new Date().getTime();

testNum.solutionJoe();

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionJoe() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1()   is 5.761 sec
Performance of solution2()   is 0.082 sec
Performance of solution3()   is 5.736 sec
Performance of solutionJoe() is 8.849 sec
*/