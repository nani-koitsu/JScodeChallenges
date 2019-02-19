/*
    Difficulty: Taxing

    Write a function that returns a string with each of its words reversed but in the original order, without using a loop.

    solution("JavaScript Coding Challenges") == "tpircSavaJ gnidoC segnellahC";
    solution("The quick brown fox")          == "ehT kciuq nworb xof";
*/

function solution1(str) {
    let words = str.split(" ");
    let reversed = words.map(word => word.split("").reverse().join(""));
        
    return reversed.join(" ");
}

console.assert(solution1("JavaScript Coding Challenges") == "tpircSavaJ gnidoC segnellahC", `solution1a() failed!`);
console.assert(solution1("The quick brown fox")          == "ehT kciuq nworb xof", `solution1b() failed!`);

function solutionMounir(str) {
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

console.assert(solutionMounir("JavaScript Coding Challenges") == "tpircSavaJ gnidoC segnellahC", `solutionMounira() failed!`);
console.assert(solutionMounir("The quick brown fox")          == "ehT kciuq nworb xof", `solutionMounirb() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

const BigStr = require('./bigString');
const bigStr = new BigStr();
const text1  = bigStr.getText();
const text2  = bigStr.getPalindrom();

// test solution()
let startTime  = new Date().getTime();

solution1(text1);
solution1(text2);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;
console.log(`Performance of solution1() is ${ performance } sec`);

// test solutionMounir()
startTime  = new Date().getTime();

solutionMounir(text1);
solutionMounir(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;
console.log(`Performance of solutionMounir() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is      0.155 sec
Performance of solutionMounir() is 0.122 sec
*/