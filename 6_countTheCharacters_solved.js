/*
    Difficulty: Easy

    Write a function that accepts a string, and returns how many times a specific character appears, taking case into account.

    solution("The rain in Spain", "a")       == 2
    solution("Mississippi", "i")             == 4
    solution("Hacking with JavaScript", "i") == 3
*/


function solution1(str1, str2){
    let letterCount = 0;
    
    for (let letter of str1) if (letter === str2)letterCount++;
        
    return letterCount
}

console.assert(solution1("The rain in Spain", "a")       == 2, `solution1a() failed`);
console.assert(solution1("Mississippi", "i")             == 4, `solution1b() failed`);
console.assert(solution1("Hacking with JavaScript", "i") == 3, `solution1c() failed`);


function solution2(str1, str2) {
    return str1.split("").reduce(
        function(acc, e) {
            if (e === str2) acc++;

            return acc;
        }, 0
    )
}

console.assert(solution2("The rain in Spain", "a")       == 2, `solution2a() failed`);
console.assert(solution2("Mississippi", "i")             == 4, `solution2b() failed`);
console.assert(solution2("Hacking with JavaScript", "i") == 3, `solution2c() failed`);


function solution3(str1, str2) {
    return str1.split("").reduce((acc, e) => acc += e === str2 ? 1 : 0, 0);
}

console.assert(solution3("The rain in Spain", "a")       == 2, `solution3a() failed`);
console.assert(solution3("Mississippi", "i")             == 4, `solution3b() failed`);
console.assert(solution3("Hacking with JavaScript", "i") == 3, `solution3c() failed`);


function solution4(str1, str2) {
    return str1.length - str1.split(str2).join("").length;
}

console.assert(solution4("The rain in Spain", "a")       == 2, `solution4a() failed`);
console.assert(solution4("Mississippi", "i")             == 4, `solution4b() failed`);
console.assert(solution4("Hacking with JavaScript", "i") == 3, `solution4c() failed`);


function solution5(str1, str2) {
    let regExp = new RegExp(str2, "g");

    return str1.length - str1.replace(regExp, "").length;
}

console.assert(solution5("The rain in Spain", "a")       == 2, `solution5a() failed`);
console.assert(solution5("Mississippi", "i")             == 4, `solution5b() failed`);
console.assert(solution5("Hacking with JavaScript", "i") == 3, `solution5c() failed`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import huge strings for performance tests
let BigStr = require("./bigString");
let bigStr = new BigStr();
let text1  = bigStr.getText();
let text2  = bigStr.getPalindrom(); 

console.log(`text1.length:`, text1.length);
console.log(`text2.length:`, text2.length);

// test solution1()
let startTime = new Date().getTime();

solution1(text1, "i");
solution1(text2, "7");

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${performance} sec`);


// test solution2()
startTime = new Date().getTime();

solution2(text1, "i");
solution2(text2, "7");

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${performance} sec`);


// test solution3()
startTime = new Date().getTime();

solution3(text1, "i");
solution3(text2, "7");

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution3() is ${performance} sec`);


// test solution4()
startTime = new Date().getTime();

solution4(text1, "i");
solution4(text2, "7");

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution4() is ${performance} sec`);


// test solution5()
startTime = new Date().getTime();

solution5(text1, "i");
solution5(text2, "7");

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution5() is ${performance} sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.024 sec
Performance of solution2() is 0.061 sec
Performance of solution3() is 0.055 sec
Performance of solution4() is 0.014 sec
Performance of solution5() is 0.014 sec
*/