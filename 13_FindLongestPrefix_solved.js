/*
    Write a function that accepts a string of words with a similar prefix, separated by spaces, and returns the longest substring that prefixes all words.
    
    solution("swift switch swill swim") == "swi"
    solution("flip flap flop")          == "fl"
*/

function solution1(str) {
    let words = str.split(" ");
    let fWord = words.shift();
    let currentPrefix = "";
    let bestPrefix    = ""; 

    for (let letter of fWord) { 
        currentPrefix += letter;
        
        for (let word of words) if (!word.startsWith(currentPrefix)) return bestPrefix;

        bestPrefix = currentPrefix;
    }

    return bestPrefix;
}

console.assert(solution1("swift switch swill swim") == "swi", `solution1a() failed!`);
console.assert(solution1("flip flap flop")          == "fl",  `solution1b() failed!`);

function solutionGreg(str) {
    const words = str.split(" ");
    const fWord = words[0];
    const lWord = words[words.length - 1];
    let i       = 0;

    while (i < fWord.length && fWord[i] === lWord[i]) i++;

    return fWord.substring(0, i);
}

console.assert(solutionGreg("swift switch swill swim") == "swi", `solutionGrega() failed!`);
console.assert(solutionGreg("flip flap flop")          == "fl",  `solutionGregb() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import huge strings for performance tests
const BigStr = require("./bigString");
const bigStr = new BigStr();
const text1  = bigStr.getText();
const text2  = bigStr.getPalindrom();

// test solution1()
let startTime = new Date().getTime();

solution1(text1);
solution1(text2);

let finishTime   = new Date().getTime();
let performance  = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${performance} sec`);

// test solutionGreg()
startTime = new Date().getTime();

solutionGreg(text1);
solutionGreg(text2);

finishTime   = new Date().getTime();
performance  = (finishTime - startTime) / 1000;

console.log(`Performance of solutionGreg() is ${performance} sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is    0.03 sec
Performance of solutionGreg() is 0 sec
*/