/*
    Write a function that returns true if it is given a string that is an English pangram, ignoring letter case.

    Tip: A pangram is a string that contains every letter of the alphabet at least once.

    solution("The quick brown fox jumps over the lazy dog")  === true
    solution("The quick brown fox jumped over the lazy dog") === false
*/

// loop
function solution1(str){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowerStr = str.toLowerCase();
    
    for (let letter of lowerStr) {
        if (alphabet.indexOf(letter) != -1) {
            if (alphabet.length == 0) return true;

            alphabet = alphabet.split(letter).join("");
        }
    }
    
    return alphabet == "";
}

console.assert(solution1("The quick brown fox jumps over the lazy dog")  == true,  `solution1a() failed!`);
console.assert(solution1("The quick brown fox jumped over the lazy dog") == false, `solution1b() failed!`);


// reduce
function solution2(str) {
    let lowerStr = str.toLowerCase()

    return lowerStr.split("").reduce(
        function(acc, e) {
            return acc.indexOf(e) != -1 ? acc.split(e).join("") : acc;
        }, "abcdefghijklmnopqrstuvwxyz"
    ) == ""
}

console.assert(solution2("The quick brown fox jumps over the lazy dog")  == true,  `solution2a() failed!`);
console.assert(solution2("The quick brown fox jumped over the lazy dog") == false, `solution2b() failed!`);

// reduce short
function solution3(str) {
    return str.toLowerCase().split("").reduce((acc, e) => acc.indexOf(e) != -1 ? acc.split(e).join("") : acc, "abcdefghijklmnopqrstuvwxyz") == ""
}

console.assert(solution3("The quick brown fox jumps over the lazy dog")  == true,  `solution3a() failed!`);
console.assert(solution3("The quick brown fox jumped over the lazy dog") == false, `solution3b() failed!`);

// filter + Set
function solution4(str) {
    let arr = [... new Set(str.toLowerCase())];

    return arr.filter(
        function(letter) {
            return (letter >= "a" && letter <= "z");
        }
    ).length == 26
}

console.assert(solution4("The quick brown fox jumps over the lazy dog")  == true,  `solution4a() failed!`);
console.assert(solution4("The quick brown fox jumped over the lazy dog") == false, `solution4b() failed!`);

// filter + Set short
function solution5(str) {
    return [... new Set(str.toLowerCase())].filter((letter) => (letter >= "a" && letter <= "z")).length == 26
}

console.assert(solution5("The quick brown fox jumps over the lazy dog")  == true,  `solution5a() failed!`);
console.assert(solution5("The quick brown fox jumped over the lazy dog") == false, `solution5b() failed!`);

const solutionGreg = (str) => new Set(str.toLowerCase().match(/[a-z]/gi)).size === 26;

console.assert(solutionGreg("The quick brown fox jumps over the lazy dog")  == true,  `solutionGrega() failed!`);
console.assert(solutionGreg("The quick brown fox jumped over the lazy dog") == false, `solutionGregb() failed!`);

function solutionGreg2(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowerStr = str.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {
        if (lowerStr.indexOf(alphabet[i]) == -1) return false;
    }

    return true;
}


console.assert(solutionGreg2("The quick brown fox jumps over the lazy dog")  == true,  `solutionGreg2a() failed!`);
console.assert(solutionGreg2("The quick brown fox jumped over the lazy dog") == false, `solutionGreg2b() failed!`);

function solutionJoe(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < alphabet.length; i ++) {
        if (str.toLowerCase().includes(alphabet[i]) == false) return false;
    }

    return true;
}

console.assert(solutionJoe("The quick brown fox jumps over the lazy dog")  == true,  `solutionJoea() failed!`);
console.assert(solutionJoe("The quick brown fox jumped over the lazy dog") == false, `solutionJoeb() failed!`);


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

// test solutionGreg()
startTime = new Date().getTime();

solutionGreg(text1);
solutionGreg(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionGreg() is ${performance} sec`);

// test solutionGreg2()
startTime = new Date().getTime();

solutionGreg2(text1);
solutionGreg2(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionGreg2() is ${performance} sec`);

// test solutionJoe()
startTime = new Date().getTime();

solutionJoe(text1);
solutionJoe(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionJoe() is ${performance} sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1()     is 0.026 sec
Performance of solution2()     is 0.057 sec
Performance of solution3()     is 0.029 sec
Performance of solution4()     is 0.041 sec
Performance of solution5()     is 0.038 sec
Performance of solutionGreg()  is 0.139 sec
Performance of solutionGreg2() is 0.001 sec
Performance of solutionJoe()   is 0.015 sec
*/