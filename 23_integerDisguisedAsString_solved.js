/*
    Difficulty: Tricky    

    Write a function that accepts a string and returns true if it contains only numbers, i.e. the digits 0 through 9.

    Samples:
    solution("01010101")            == true
    solution("123456789")           == true
    solution("8353372039254775863") == true
    solution("1.01")                == false
*/


function solution1(str) {
    let set     = new Set(str);
    let numbers = "0123456789";

    for (let i of set) if (!numbers.includes(i)) return false

    return true;
}

console.assert(solution1("01010101")            == true,  `solution1a() failed!`);
console.assert(solution1("123456789")           == true,  `solution1b() failed!`);
console.assert(solution1("8353372039254775863") == true,  `solution1c() failed!`);
console.assert(solution1("1.01")                == false, `solution1d() failed!`);


function solution2(str) {
    return parseInt(str) == str;
}

console.assert(solution2("01010101")            == true,  `solution2a() failed!`);
console.assert(solution2("123456789")           == true,  `solution2b() failed!`);
console.assert(solution2("8353372039254775863") == true,  `solution2c() failed!`);
console.assert(solution2("1.01")                == false, `solution2d() failed!`);


function solutionGreg1(str) {
    return str.match(/^[0-9]+$/) != null;
}

console.assert(solutionGreg1("01010101")            == true,  `solutionGreg1a() failed!`);
console.assert(solutionGreg1("123456789")           == true,  `solutionGreg1b() failed!`);
console.assert(solutionGreg1("8353372039254775863") == true,  `solutionGreg1c() failed!`);
console.assert(solutionGreg1("1.01")                == false, `solutionGreg1d() failed!`);


function solutionGreg2(str) {
    return [...str].every(c => '0123456789'.includes(c));
}

console.assert(solutionGreg2("01010101")            == true,  `solutionGreg2a() failed!`);
console.assert(solutionGreg2("123456789")           == true,  `solutionGreg2b() failed!`);
console.assert(solutionGreg2("8353372039254775863") == true,  `solutionGreg2c() failed!`);
console.assert(solutionGreg2("1.01")                == false, `solutionGreg2d() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test
const Numbers = require("./numbers");
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000);

// test solution1()
let startTime  = new Date().getTime();

for(let n of testNum) solution1(`${n}`);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);


// test solution2()
startTime  = new Date().getTime();

for(let n of testNum) solution2(`${n}`);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;
console.log(`Performance of solution2() is ${ performance } sec`);


// test solutionGreg1()
startTime  = new Date().getTime();

for(let n of testNum) solutionGreg1(`${n}`);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionGreg1() is ${ performance } sec`);


// test solutionGreg2()
startTime  = new Date().getTime();

for(let n of testNum) solutionGreg2(`${n}`);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionGreg2() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is     0.455 sec
Performance of solution2() is     0.17 sec
Performance of solutionGreg1() is 0.116 sec
Performance of solutionGreg2() is 0.209 sec
*/