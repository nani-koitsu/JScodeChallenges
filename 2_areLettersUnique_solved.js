/*
Write a function that accepts a String as its only parameter, and returns true if the string has only unique letters, taking letter case into account.

    solution("No duplicates")               == true
    solution1("abcdefghijklmnopqrstuvwxyz") == true
    solution1("AaBbCc")                     == true
    solution1("Hello, world")               == false
*/

function solution1(str) {
    let unique = "";

    for (let letter of str) if (unique.indexOf(letter) == -1) unique += letter;

    return str == unique;
}

console.assert(solution1("No duplicates")              == true,  `Error: solution1a() failed`);
console.assert(solution1("abcdefghijklmnopqrstuvwxyz") == true,  `Error: sUnique1b() failed`);
console.assert(solution1("AaBbCc")                     == true,  `Error: sUnique1c() failed`);
console.assert(solution1("Hello, world")               == false, `Error: sUnique1d() failed`);

function solution2(str) {
    return str == str.split("").reduce(
        function(acc, e, i) {
            if (acc.indexOf(e) == -1) acc += e;

            return acc;
        }, ""
    );
}

console.assert(solution2("No duplicates")              == true,  `Error: solution2a() failed`);
console.assert(solution2("abcdefghijklmnopqrstuvwxyz") == true,  `Error: solution2b() failed`);
console.assert(solution2("AaBbCc")                     == true,  `Error: solution2c() failed`);
console.assert(solution2("Hello, world")               == false, `Error: solution2d() failed`);

function solution2short(str) {
    return str == str.split("").reduce((acc, e) => acc += acc.indexOf(e) == -1 ? e : "", "");
}

console.assert(solution2short("No duplicates")              == true,  `Error: solution2shortA() failed`);
console.assert(solution2short("abcdefghijklmnopqrstuvwxyz") == true,  `Error: solution2shortB() failed`);
console.assert(solution2short("AaBbCc")                     == true,  `Error: solution2shortC() failed`);
console.assert(solution2short("Hello, world")               == false, `Error: solution2shortD() failed`);

function solution3(str) {
    return str == [... new Set(str.split(""))].join("");
}

console.assert(solution3("No duplicates")              == true,  `Error: solution3a() failed`);
console.assert(solution3("abcdefghijklmnopqrstuvwxyz") == true,  `Error: solution3b() failed`);
console.assert(solution3("AaBbCc")                     == true,  `Error: solution3c() failed`);
console.assert(solution3("Hello, world")               == false, `Error: solution3d() failed`);


/*
************************* PERFORMANCE TESTS *************************
*/


// import huge string for performance tests
const BigString = require("./bigString");
const bigString = new BigString();
const text1     = bigString.getText();
const text2     = bigString.getPalindrom();

// test solution1()
let startTime = new Date().getTime();

solution1(text1);
solution1(text2);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${performance} sec`);

// test solution2()
startTime = new Date().getTime();

solution2(text1);
solution2(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${performance} sec`);

// test solution2short()
startTime = new Date().getTime();

solution2short(text1);
solution2short(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2short() is ${performance} sec`);

// test solution3()
startTime = new Date().getTime();

solution3(text1);
solution3(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution3() is ${performance} sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is      0.033 sec
Performance of solution2() is      0.048 sec
Performance of solution2short() is 0.049 sec
Performance of solution3() is      0.036 sec
*/