/*
    Write a function that accepts two strings, and returns true if they are identical in length but have no more than three different letters, taking case and string order into account.
    
    solution("Clamp", "Cramp")  == true
    solution("Clamp", "Crams")  == true
    solution("Clamp", "Grams")  == true
    solution("Clamp", "Grans")  == false
    solution("Clamp", "Clam")   == false
    solution("clamp", "maple")  == false
*/

function solution1(str1, str2){
    if (str1.length != str2.length) return false;
    
    let differences = 0
    
    for (let i in str1) {
        if (str1[i] != str2[i]) differences++;
        if (differences > 3) return false;
    }

    return true;
}

console.assert(solution1("Clamp", "Cramp") == true, `solution1a() failed!`);
console.assert(solution1("Clamp", "Crams") == true, `solution1a() failed!`);
console.assert(solution1("Clamp", "Grams") == true, `solution1a() failed!`);
console.assert(solution1("Clamp", "Grans") == false, `solution1a() failed!`);
console.assert(solution1("Clamp", "Clam")  == false, `solution1a() failed!`);
console.assert(solution1("clamp", "maple") == false, `solution1a() failed!`);


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

solution1(text1, text1);
solution1(text1, text2);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${performance} sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.287 sec
*/