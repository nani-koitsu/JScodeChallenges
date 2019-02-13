/*
    Write a function that accepts two strings, and returns true if one string is rotation of the other, taking letter case into account.

    Tip: A string rotation is when you take a string, remove some letters from its end, then append them to the front. For example, “swift” rotated by two characters would be "ftswi".

    solution("abcde", "eabcd")  === true
    solution("abcde", "cdeab")  === true
    solution("abcde", "abced")  === false
    solution("abc", "a")        === false
*/

function solution1(str1, str2){
    // 1. return false if length of str1 is not equal to length of str2
    if (str1.length != str2.length) return false;

    // 2. create variable from repeating str1 twice
    let combined = str1 + str1;

    // 3. return if str2 exists in combined string
    return combined.indexOf(str2) != -1;
}

console.assert(solution1("abcde", "eabcd")  === true,  `solution1a() failed!`);
console.assert(solution1("abcde", "cdeab")  === true,  `solution1a() failed!`);
console.assert(solution1("abcde", "abced")  === false, `solution1a() failed!`);
console.assert(solution1("abc", "a")        === false, `solution1a() failed!`);



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

solution1(text1, text2);
solution1(text1, text1);
solution1(text2, text2);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${performance} sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.002 sec
*/