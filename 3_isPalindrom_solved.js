/*
    Difficulty: Easy
    
    Write a function that accepts a String as its only parameter, and returns true if the string reads the same when reversed, ignoring case.

    solution("rotator")                   === true
    solution("Rats live on no evil star") === true
    solution("Never odd or even")         === false
    solution("Hello, world")              === false
*/

function solution1(str) {
    let lowercased = str.toLowerCase();
    
    return lowercased == lowercased.split("").reverse().join("")
}

console.assert(solution1("rotator")                   === true,  `Error: solution1a() failed`);
console.assert(solution1("Rats live on no evil star") === true,  `Error: solution1b() failed`);
console.assert(solution1("Never odd or even")         === false, `Error: solution1c() failed`);
console.assert(solution1("Hello, world")              === false, `Error: solution1d() failed`);

function solution2(str) {
    let lowercased = str.toLowerCase();
    let reversed   = "";

    for (let i of lowercased) reversed = i + reversed;
    
    return lowercased == reversed;
}

console.assert(solution2("rotator")                   === true,  `Error: solution2a() failed`);
console.assert(solution2("Rats live on no evil star") === true,  `Error: solution2b() failed`);
console.assert(solution2("Never odd or even")         === false, `Error: solution2c() failed`);
console.assert(solution2("Hello, world")              === false, `Error: solution2d() failed`);

// provides earliest exit
function solution3(str) {
    let lowercased = str.toLowerCase();
    let strMid = Math.ceil(str.length / 2);

    for (let i = 0; i <= strMid; i++) {
        if (lowercased[i] != lowercased[lowercased.length - i - 1]) return false
    }

    return true
}

console.assert(solution3("rotator")                   === true,  `Error: solution3() failed`);
console.assert(solution3("Rats live on no evil star") === true,  `Error: solution3() failed`);
console.assert(solution3("Never odd or even")         === false, `Error: solution3() failed`);
console.assert(solution3("Hello, world")              === false, `Error: solution3() failed`);

/*
************************* PERFORMANCE TESTS *************************
*/

// import huge string
const Bigstring = require("./bigString");
const bigString = new Bigstring();
const text      = bigString.getText();
const palindrom = bigString.getPalindrom();

// test solution1()
let startTime = new Date().getTime();

solution1(text);
solution1("rotator");
solution1("Rats live on no evil star");
solution1(palindrom);

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000

console.log(`Performance of solution1() is: `, performance + " sec");

// test solution2()
startTime = new Date().getTime();

solution2(text);
solution2("rotator");
solution2("Rats live on no evil star");
solution2(palindrom);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000

console.log(`Performance of solution2() is: `, performance + " sec");

// test solution3()
startTime = new Date().getTime();

solution3(text);
solution3("rotator");
solution3("Rats live on no evil star");
solution3(palindrom);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000

console.log(`Performance of solution3() is: `, performance + " sec");


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is:  0.119 sec
Performance of solution2() is:  0.118 sec
Performance of solution3() is:  0.004 sec
*/