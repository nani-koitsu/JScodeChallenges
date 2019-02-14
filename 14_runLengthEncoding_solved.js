/*
    Write a function that accepts a string as input, then returns how often each letter is repeated in a single run, taking case into account.

    Tip: This approach is used in a simple lossless compression technique called run-length encoding.

    solution("aabbcc")      == "a2b2c2";
    solution("aaabaaabaaa") == "a3b1a3b1a3";
    solution("aaAAaa")      == "a2A2a2";
*/

function solution1(str) {
    let currentLetter = false;
    let returnVal = "";
    let letterCounter = 0;

    for (let letter of str) {
        if (letter == currentLetter) {
            letterCounter++;
        } else {
            if (currentLetter) returnVal += currentLetter + letterCounter;
            
            currentLetter = letter;
            letterCounter = 1;
        }
    }
        
    returnVal += currentLetter + letterCounter;

    return returnVal;
}

console.assert(solution1("aabbcc")      == "a2b2c2",     `solution1a() failed!`);
console.assert(solution1("aaabaaabaaa") == "a3b1a3b1a3", `solution1b() failed!`);
console.assert(solution1("aaAAaa")      == "a2A2a2",     `solution1c() failed!`);

function solution2(str) {
    let returnVal = "";
    let letterCounter = 0;
    let letterArr = str.split("");

    for (let i = 0; i < letterArr.length; i++) {
        letterCounter++;

        if (i + 1 == letterArr.length || letterArr[i] != letterArr[i + 1]) {
            returnVal += letterArr[i] + letterCounter;
            letterCounter = 0
        }
    }

    return returnVal;
}

console.assert(solution2("aabbcc")      == "a2b2c2",     `solution2a() failed!`);
console.assert(solution2("aaabaaabaaa") == "a3b1a3b1a3", `solution2b() failed!`);
console.assert(solution2("aaAAaa")      == "a2A2a2",     `solution2c() failed!`);

function solutionGreg(str) {
    return str.replace(/(.)\1*/g, function(m, p1) { return p1 + m.length});
}

console.assert(solutionGreg("aabbcc")      == "a2b2c2",     `solutionGrega() failed!`);
console.assert(solutionGreg("aaabaaabaaa") == "a3b1a3b1a3", `solutionGregb() failed!`);
console.assert(solutionGreg("aaAAaa")      == "a2A2a2",     `solutionGregc() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import huge strings for performance tests
const BigStr = require('./bigString');
const bigStr = new BigStr();
const text1  = bigStr.getText();
const text2  = bigStr.getPalindrom();

// test solution1()
let startTime  = new Date().getTime();

solution1(text1);
solution1(text2);

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution() is ${performance} sec`);

// test solution2()
startTime  = new Date().getTime();

solution2(text1);
solution2(text2);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution() is ${ performance } sec`);

// test solutionGreg
startTime  = new Date().getTime();

solutionGreg(text1);
solutionGreg(text2);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution() is 0.217 sec
Performance of solution() is 0.196 sec
Performance of solution() is 0.52  sec
*/