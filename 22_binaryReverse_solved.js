/*
    Difficulty: Tricky    

    Create a function that accepts an unsigned 8-bit integer and returns its binary reverse, padded so that it holds precisely eight binary digits.

    Tip: When you get the binary representation of a number, JavaScript will always use as few bits as possible – make sure you pad to eight binary digits before reversing.

    Samples:
    1) The number 32 is 100000 in binary, and padded to eight binary digits that’s 00100000. Reversing that binary sequence gives 00000100, which is 4. So, when given the input 32 your function should return 4.
    solution(32) == 4

    2) The number 41 is 101001 in binary, and padded to eight binary digits that 00101001. Reversing that binary sequence gives 10010100, which is 148. So, when given the input 41 your function should return 148.
    solution(41) == 148

    3) It should go without saying that your function should be  symmetrical: when fed 4 it should return 32, and when fed 148 it should return 41.
    solution(4)   == 32
    solution(148) == 41
*/


function solution1(number) {
    let binary = number.toString(2); 

    while(binary.length < 8) binary = "0" + binary;
    
    let reversed = binary.split("").reverse().join("");

    return parseInt(reversed, 2);
}

console.assert(solution1(32)  == 4,   `solution1a() failed!`);
console.assert(solution1(41)  == 148, `solution1b() failed!`);
console.assert(solution1(4)   == 32,  `solution1c() failed!`);
console.assert(solution1(148) == 41,  `solution1d() failed!`);

function solutionGreg(num) {
    let n = num.toString(2);
    n     = "00000000".substr(n.length) + n;
    rev   = n.split("").reverse().join("");

    return parseInt(rev,2);
}

console.assert(solutionGreg(32)  == 4,   `solutionGrega() failed!`);
console.assert(solutionGreg(41)  == 148, `solutionGregb() failed!`);
console.assert(solutionGreg(4)   == 32,  `solutionGregc() failed!`);
console.assert(solutionGreg(148) == 41,  `solutionGregd() failed!`);


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

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;
console.log(`Performance of solution1() is ${ performance } sec`);


// test solutionGreg()
startTime  = new Date().getTime();

for(let n of testNum) solutionGreg(n);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;
console.log(`Performance of solutionGreg() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is    0.959 sec
Performance of solutionGreg() is 0.955 sec
*/