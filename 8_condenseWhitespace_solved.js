/*
    Write a function that returns a string with any consecutive spaces replaced with a single space.

    solution("a   b   c") === "a b c"
    solution("    a")     === " a"
    solution("abc")       === "abc"
*/

// loop
function solution1(str){
    if (str.length == 0) return str;

    let returnVal = "";
    let seenSpace = false;

    for (let letter of str) {
        if (letter != " ") {
            returnVal += letter;
            seenSpace = false;
        } else {
            if (!seenSpace) returnVal += letter

            seenSpace = true
        }
    }
    
    return returnVal;
}

console.assert(solution1("a   b   c") === "a b c", `solution1a() failed!`);
console.assert(solution1("    a")     === " a",    `solution1a() failed!`);
console.assert(solution1("abc")       === "abc",   `solution1a() failed!`);


// regExp
function solution2(str) {
    if (str.length == 0) return str;

    let regExp = new RegExp(" +", "g");
    
    return str.replace(regExp, " ");
}

console.assert(solution2("a   b   c") === "a b c", `solution2a() failed!`);
console.assert(solution2("    a")     === " a",    `solution2a() failed!`);
console.assert(solution2("abc")       === "abc",   `solution2a() failed!`);

/*
************************* PERFORMANCE TESTS *************************
*/

// import huge strings for performance tests
const BigStr = require("./bigString");
const bigStr = new BigStr();
const text1  = bigStr.getText();
const text2  = bigStr.getPalindrom();

// test solution1()
let startTime = new Date().getTime()

solution1(text1);
solution1(text2);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${performance} sec`);

// test solution2()
startTime = new Date().getTime()

solution2(text1);
solution2(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${performance} sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.122 sec
Performance of solution2() is 0.017 sec
*/
