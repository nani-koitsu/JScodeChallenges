/*
    Write a function that accepts a string as its input, and returns the same string just with duplicate letters removed.

    solution("wombat")      === "wombat"
    solution("hello")       === "helo"
    solution("Mississippi") === "Misp"
*/

// Loop
function solution1(str){
    let unique = "";

    for (let letter of str) if (unique.indexOf(letter) == -1) unique += letter;

    return unique;
}

console.assert(solution1("wombat")      === "wombat", `solution1a() failed`);
console.assert(solution1("hello")       === "helo",   `solution1b() failed`);
console.assert(solution1("Mississippi") === "Misp",   `solution1c() failed`);


// reduce
function solution2(str) {
    return str.split("").reduce(
        function(acc, e) {
            if (acc.indexOf(e) == -1) acc += e;
        
            return acc;
        }, ""
    );
}

console.assert(solution2("wombat")      === "wombat", `solution2a() failed`);
console.assert(solution2("hello")       === "helo",   `solution2b() failed`);
console.assert(solution2("Mississippi") === "Misp",   `solution2c() failed`);

// reduce (short)
function solution3(str) {
    return str.split("").reduce((acc, e) => acc += acc.indexOf(e) == -1 ? e : "", "");
}

console.assert(solution3("wombat")      === "wombat", `solution3a() failed`);
console.assert(solution3("hello")       === "helo",   `solution3b() failed`);
console.assert(solution3("Mississippi") === "Misp",   `solution3c() failed`);

// filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
function solution4(str) {
    return str.split("").filter(
        function(letter, index, array){
            return array.indexOf(letter) == index;
        }
    ).join("");
}

console.assert(solution4("wombat")      === "wombat", `solution4a() failed`);
console.assert(solution4("hello")       === "helo",   `solution4b() failed`);
console.assert(solution4("Mississippi") === "Misp",   `solution4c() failed`);

// filter short
function solution5(str) {
    return str.split("").filter((e, i, arr) => arr.indexOf(e) == i).join("");
}

console.assert(solution5("wombat")      === "wombat", `solution5a() failed`);
console.assert(solution5("hello")       === "helo",   `solution5b() failed`);
console.assert(solution5("Mississippi") === "Misp",   `solution5c() failed`);

function solutionKeon(str) {
    return [... new Set(str)].join("");
}

console.assert(solutionKeon("wombat")      === "wombat", `solutionKeona() failed`);
console.assert(solutionKeon("hello")       === "helo",   `solutionKeonb() failed`);
console.assert(solutionKeon("Mississippi") === "Misp",   `solutionKeonc() failed`);

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

// test solution3()
startTime = new Date().getTime();

solution3(text1);
solution3(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution3() is ${performance} sec`);

// test solution4()
startTime = new Date().getTime();

solution4(text1);
solution4(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution4() is ${performance} sec`);

// test solution5()
startTime = new Date().getTime();

solution5(text1);
solution5(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution5() is ${performance} sec`);

// solutionKeon
startTime = new Date().getTime();

solutionKeon(text1);
solutionKeon(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionKeon() is ${performance} sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.03 sec
Performance of solution2() is 0.068 sec
Performance of solution3() is 0.063 sec
Performance of solution4() is 4.118 sec
Performance of solution5() is 4.169 sec
Performance of solutionKeon() is 0.039 sec
*/