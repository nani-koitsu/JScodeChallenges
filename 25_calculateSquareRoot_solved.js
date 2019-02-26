/*
    Difficulty: Taxing    

    Write a function that returns the square root of a positive integer, rounded down to the nearest integer, without using Math.sqrt().

    Samples:
    solution(9)        == 3
    solution(16777216) == 4096
    solution(16)       == 4
    solution(15)       == 3
*/


function solution1(number) {
    if (number == 1) return 1;
    
    for (let i = 0; i < number / 2 + 1; i++) {
        if (i * i > number) return i - 1;
    }

    return 0
}

console.assert(solution1(9)        == 3,    `solution1a() failed!`);
console.assert(solution1(16777216) == 4096, `solution1b() failed!`);
console.assert(solution1(16)       == 4,    `solution1c() failed!`);
console.assert(solution1(15)       == 3,    `solution1d() failed!`);


function solution2(number) {
    if (number == 1) return 1;    
    
    let lowerBound = 0;
    let upperBound = number / 2 + 1;

    while (lowerBound + 1 < upperBound) {
        let middle = Math.round(lowerBound + ((upperBound - lowerBound) / 2));
        let squareMiddle = middle * middle;

        if (squareMiddle == number) return middle;
        else if (squareMiddle < number) lowerBound = middle;
        else upperBound = middle;
    }
    
    return lowerBound;
}

console.assert(solution2(9)        == 3,    `solution2a() failed!`);
console.assert(solution2(16777216) == 4096, `solution2b() failed!`);
console.assert(solution2(16)       == 4,    `solution2c() failed!`);
console.assert(solution2(15)       == 3,    `solution2d() failed!`);

function solution3(number) {
    if (number == 1) return 1;

    return Math.floor(Math.pow(number, 0.5));
}

console.assert(solution3(9)        == 3,    `solution3a() failed!`);
console.assert(solution3(16777216) == 4096, `solution3b() failed!`);
console.assert(solution3(16)       == 4,    `solution3c() failed!`);
console.assert(solution3(15)       == 3,    `solution3d() failed!`);

function solution4(number) {
    if (number == 1) return 1;  

    return Math.floor(number ** 0.5);
}

// console.assert(solution4(9)        == 3,    `solution4a() failed!`);
// console.assert(solution4(16777216) == 4096, `solution4b() failed!`);
// console.assert(solution4(16)       == 4,    `solution4c() failed!`);
// console.assert(solution4(15)       == 3,    `solution4d() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test
const Numbers = require("./numbers");
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000);

// test solution1()
let startTime  = new Date().getTime();

for (let n of testNum) solution1(n);
for (let n = 2; n < 10*1000*1000; n += 2) solution1(n);

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);


// test solution2()
startTime  = new Date().getTime();

for (let n of testNum) solution2(n);
for (let n = 2; n < 10*1000*1000; n += 2) solution2(n);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);

// test solution3()
startTime  = new Date().getTime();

for (let n of testNum) solution3(n);
for (let n = 2; n < 10*1000*1000; n += 2) solution3(n);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution3() is ${ performance } sec`);

// test solution4()
startTime  = new Date().getTime();

for (let n of testNum) solution4(n);
for (let n = 2; n < 10*1000*1000; n += 2) solution4(n);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution4() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 13.666 sec
Performance of solution2() is 0.656  sec
Performance of solution3() is 0.026  sec
Performance of solution4() is 0.448  sec
*/