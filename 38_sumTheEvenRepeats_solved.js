/*
    Difficulty: Tricky    

    Write an extension for array that works with a variadic array of integers and return the sum of all numbers that appear an even number of times.

    Samples:
    [1, 2, 2, 3, 3, 4].solution()       == 5
    [5, 5, 5, 12, 12].solution()        == 12
    [1, 1, 2, 2, 3, 3, 4, 4].solution() == 10
*/

// solution1
Array.prototype.solution1 = function() {
    let sum = 0;
    let set = new Set(this);

    for (let i of set) {
        let filtered = this.filter(e => e == i);
    
        sum += filtered.length % 2 == 0 ? i : 0;
    }

    return sum;
}

console.assert([1, 2, 2, 3, 3, 4].solution1()       == 5,  `solution1a() failed!`);
console.assert([5, 5, 5, 12, 12].solution1()        == 12, `solution1b() failed!`);
console.assert([1, 1, 2, 2, 3, 3, 4, 4].solution1() == 10, `solution1c() failed!`);


// solution2
Array.prototype.solution2 = function() {
    let sum = 0;
    let set = new Set(this);

    let appearEvenTimes = item => {
        return this.filter(e => e == item).length % 2 == 0 ? true : false;
    }

    for (let i of set) sum += appearEvenTimes(i) ? i : 0;

    return sum;
}


console.assert([1, 2, 2, 3, 3, 4].solution2()       == 5,  `solution2a() failed!`);
console.assert([5, 5, 5, 12, 12].solution2()        == 12, `solution2b() failed!`);
console.assert([1, 1, 2, 2, 3, 3, 4, 4].solution2() == 10, `solution2c() failed!`);

// solutionJoe
Array.prototype.solutionJoe = function() {
    let toAdd = []
    let nums  = {}
    let total = 0

    this.forEach(function(x) { nums[x] = (nums[x] || 0) + 1; })

    let keys = Object.keys(nums)

    for (let i = 0; i < keys.length; i++) {
        if (nums[keys[i]] % 2 == 0) toAdd.push(keys[i]);
    } 
    
    for (let i = 0; i < toAdd.length; i ++) total += Number(toAdd[i]);
    
    return total;
}

console.assert([1, 2, 2, 3, 3, 4].solutionJoe()       == 5,  `solutionJoea() failed!`);
console.assert([5, 5, 5, 12, 12].solutionJoe()        == 12, `solutionJoeb() failed!`);
console.assert([1, 1, 2, 2, 3, 3, 4, 4].solutionJoe() == 10, `solutionJoec() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test
const Numbers = require('./numbers');
const numbers = new Numbers();
const testNum = numbers.generatePrime(100*1000);
const testArr = []

console.log(`testNum.length:`, testNum.length);

// duplicate some numbers
for (let i of testNum) {
    testArr.push(i);

    if (Math.random() > 0.9) testArr.unshift(i);
}

console.log(`testArr.length:`, testArr.length);


// test solution1()
let startTime = new Date().getTime();

testArr.solution1();

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

// test solution2()
startTime = new Date().getTime();

testArr.solution2();

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);

// test solutionJoe()
startTime = new Date().getTime();

testArr.solutionJoe();

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionJoe() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1()   is 0.831 sec
Performance of solution2()   is 0.482 sec
Performance of solutionJoe() is 0.004 sec
*/