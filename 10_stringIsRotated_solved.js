/*
    Write a function that accepts two strings, and returns true if one string is rotation of the other, taking letter case into account.

    Tip: A string rotation is when you take a string, remove some letters from its end, then append them to the front. For example, “swift” rotated by two characters would be "ftswi".

    solution("abcde", "eabcd")  === true
    solution("abcde", "cdeab")  === true
    solution("abcde", "abced")  === false
    solution("abc", "a")        === false
*/

function solution1(str1, str2){
    if (str1.length != str2.length) return false;

    let combined = str1 + str1;

    return combined.indexOf(str2) != -1;
}

console.assert(solution1("abcde", "eabcd")  === true,  `solution1a() failed!`);
console.assert(solution1("abcde", "cdeab")  === true,  `solution1a() failed!`);
console.assert(solution1("abcde", "abced")  === false, `solution1a() failed!`);
console.assert(solution1("abc", "a")        === false, `solution1a() failed!`);


function solution2(str1, str2){
    if (str1.length !== str2.length){ return false; }
    
    let startingRotation = "";
    let endRotation      = "";
    let fullRotation     = "";
    let i = 0;
    
    for(var j=0; j < str2.length; j++){
        //we’ve reached the potential start of rotation 
        if (str2[j] === str1[i]) { 
            startingRotation += str2[j]
            i++;
        } else {
            endRotation += str2[j]
            i=0;
        }
    }

    fullRotation = startingRotation + endRotation;
    
    return fullRotation === str1;
}


console.assert(solution2("abcde", "eabcd")  === true, `solution2a() failed!`);
console.assert(solution2("abcde", "cdeab")  === true,    `solution2b() failed!`);
console.assert(solution2("abcde", "abced")  === false, `solution2c() failed!`);
console.assert(solution2("abc", "a")        === false,    `solution2d() failed!`);

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

// test solution2()
startTime = new Date().getTime();

solution2(text1, text2);
solution2(text1, text1);
solution2(text2, text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${performance} sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.002 sec
Performance of solution2() is 0.079 sec
*/