/*
    Difficulty: Taxing    

    Write a function that subtract one positive integer from another, without using "-".

    Samples:
    solution(5, 9)   == 4
    solution(10, 30) == 20
*/


function solution1(subtract, from) {
    return from + -subtract;
}

console.assert(solution1(15, 9)  == -6,  `solution1a() failed!`);
console.assert(solution1(10, 30) == 20, `solution1b() failed!`);


function solution2(subtract, from) {
    return from + -1 * subtract;
}

console.assert(solution2(5, 9)   == 4,  `solution2a() failed!`);
console.assert(solution2(10, 30) == 20, `solution2b() failed!`);


function solution3(subtract, from) {
    return from + (~subtract + 1);
}

console.assert(solution3(5, 9)   == 4,  `solution3a() failed!`);
console.assert(solution3(10, 30) == 20, `solution3b() failed!`);


function solutionGreg(x, y) {
    if (y == 0) return x;

    return Math.abs(solutionGreg(x ^ y, (~x & y) << 1));
}

console.assert(solutionGreg(5, 9)   == 4,  `solutionGrega() failed!`);
console.assert(solutionGreg(10, 30) == 20, `solutionGregb() failed!`);


function solutionChrisJoe(subtract, from) {
    let diff = 0;
    
    if (from < subtract) {
        subtract = [from, (from = subtract)][0];
        var neg  = true; 
    }

    for (let i = subtract; i < from; i++) diff++

    return neg ? -diff : diff;
}

console.assert(solutionChrisJoe(9, 5)   == -4,  `solutionChrisJoea() failed!`);
console.assert(solutionChrisJoe(10, 30) == 20,  `solutionChrisJoeb() failed!`);

/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test
const Numbers = require("./numbers");
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000);


// test solution1()
let startTime  = new Date().getTime();

for (let n of testNum) solution1(217864, n);

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);


// test solution2()
startTime  = new Date().getTime();

for (let n of testNum) solution2(217864, n);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);


// test solution3()
startTime  = new Date().getTime();

for (let n of testNum) solution3(217864, n);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution3() is ${ performance } sec`);


// test solutionGreg()
startTime  = new Date().getTime();

for (let n of testNum) solutionGreg(217864, n);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionGrerg() is ${ performance } sec`);


// test solutionChrisJoe()
startTime  = new Date().getTime();

for (let n of testNum) solutionChrisJoe(217864, n);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionChrisJoe() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is        0.015 sec
Performance of solution2() is        0.015 sec
Performance of solution3() is        0.014 sec
Performance of solutionGrerg() is    0.057 sec
Performance of solutionChrisJoe() is too slow
*/