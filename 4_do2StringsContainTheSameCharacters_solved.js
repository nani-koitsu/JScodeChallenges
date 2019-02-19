/*
    Write a function that accepts two String parameters, and returns true if they contain the same characters in any order taking into account letter case.

    solution("abca", "abca")     == true
    solution("abc", "cba")       == true
    solution(" a1 b2 ", "b1 a2") == true
    solution("abc", "abca")      == true
    solution("abc", "Abc")       == false
    solution("abc", "cbAa")      == false
*/

function solution1(str1, str2){
    let checkStr = str2;

    for (let i in str1) {
        if (checkStr.indexOf(str1[i]) != -1) checkStr = checkStr.split(str1[i]).join("");
    }

    return checkStr.length == 0;
}

console.assert(solution1("abca", "abca")     == true,  `Error: solution1a() failed!`);
console.assert(solution1("abc", "cba")       == true,  `Error: solution1b() failed!`);
console.assert(solution1(" a1 b2 ", "b1 a2") == true,  `Error: solution1c() failed!`);
console.assert(solution1("abc", "abca")      == true,  `Error: solution1d() failed!`);
console.assert(solution1("abc", "Abc")       == false, `Error: solution1e() failed!`);
console.assert(solution1("abc", "cbAa")      == false, `Error: solution1f() failed!`);


function solution2(str1, str2) {
    let arr1 = [... new Set(str1)].sort();
    let arr2 = [... new Set(str2)].sort();

    return arr1.join("") == arr2.join("");
}

function solution3(str1, str2) {
    let arr1 = [... new Set(str1)].sort();
    let arr2 = [... new Set(str2)].sort();

    return JSON.stringify(arr1) == JSON.stringify(arr2);
}

console.assert(solution2("abca", "abca")     == true,  `Error: solution2a() failed!`);
console.assert(solution2("abc", "cba")       == true,  `Error: solution2b() failed!`);
console.assert(solution2(" a1 b2 ", "b1 a2") == true,  `Error: solution2c() failed!`);
console.assert(solution2("abc", "abca")      == true,  `Error: solution2d() failed!`);
console.assert(solution2("abc", "Abc")       == false, `Error: solution2e() failed!`);
console.assert(solution2("abc", "cbAa")      == false, `Error: solution2af() failed!`);

function solutionSaki(str1, str2){
    for(let i in str2){
        if(str1.indexOf(str2[i])==-1){
            return false;
        }
    }
    return true;
}

console.assert(solutionSaki("abca", "abca")     == true,  `Error: solutionSakia() failed!`);
console.assert(solutionSaki("abc", "cba")       == true,  `Error: solutionSakib() failed!`);
console.assert(solutionSaki(" a1 b2 ", "b1 a2") == true,  `Error: solutionSakic() failed!`);
console.assert(solutionSaki("abc", "abca")      == true,  `Error: solutionSakid() failed!`);
console.assert(solutionSaki("abc", "Abc")       == false, `Error: solutionSakie() failed!`);
console.assert(solutionSaki("abc", "cbAa")      == false, `Error: solutionSakif() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import huge string for performance tests
let BigStr = require("./bigString");
let bigStr = new BigStr();
let text1 = bigStr.getText();
let text2 = bigStr.getPalindrom();

// test solution1()
let startTime = new Date().getTime();

solution1(text1, text1);
solution1(text1, text2);

let finishTime  = new Date().getTime()
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is:`, performance + " sec");

// test solution2()
startTime = new Date().getTime();

solution2(text1, text1);
solution2(text1, text2);

finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is:`, performance + " sec");

// test solution3()
startTime = new Date().getTime();

solution3(text1, text1);
solution3(text1, text2);

finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution3() is:`, performance + " sec");

// test solutionSaki()
startTime = new Date().getTime();

solutionSaki(text1, text1);
solutionSaki(text1, text2);

finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionSaki() is:`, performance + " sec");


/*
************************* PERFORMANCE RESULTS *************************
Performance of solution1() is: 0.839 sec
Performance of solution2() is: 0.099 sec
Performance of solution3() is: 0.098 sec
Performance of solutionSaki() is: 0.633 sec
*/