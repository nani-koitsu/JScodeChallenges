/*
    Difficulty: Tricky    

    Given a string that contains both letters and numbers, write a function that pulls out all the numbers then returns their sum.

    Samples:
    solution("a1b2c3")    == 6
    solution("a10b20c30") == 60
    solution("cks8al")    == 8
*/


function solution1(str) {
    let numbers = "0123456789";
    let number  = "";
    let sum     = 0;

    for (let i of str) {
        if (numbers.includes(i)) {
            number += i
        } else {
            sum += Number(number);
            number = "";
        }
    }

    sum += Number(number);

    return sum;
}

console.assert(solution1("a1b2c3")    == 6,  `solution1a() failed!`);
console.assert(solution1("a10b20c30") == 60, `solution1b() failed!`);
console.assert(solution1("cks8al")    == 8,  `solution1c() failed!`);


function solution2(str) {
    let regExp  = new RegExp("\\d+", "g");
    let matches = str.match(regExp);
    let sum     = 0;

    for (let i of matches) sum += Number(i);
    
    return sum;
}

console.assert(solution2("a1b2c3")    == 6,  `solution2a() failed!`);
console.assert(solution2("a10b20c30") == 60, `solution2b() failed!`);
console.assert(solution2("cks8al")    == 8,  `solution2c() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test
const Numbers = require("./numbers");
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000);

// test solution1()
let startTime  = new Date().getTime();

for (let n of testNum) solution1(`klwf${n}jkdf892`);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

// test solution2()
startTime  = new Date().getTime();

for (let n of testNum) solution2(`klwf${n}jkdf892`);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.585 sec
Performance of solution2() is 0.46  sec
*/