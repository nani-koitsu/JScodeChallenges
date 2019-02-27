/*
    Difficulty: Easy    

    Write an extension for array of integers that returns the number of times a specific digit appears in any of its numbers.

    Samples:
    [5, 15, 55, "515"].solution("5") == 6
    [5, 15, 55, 515].solution("1") == 2
    [55555].solution("5")          == 5
    [55555].solution("1")          == 0
*/


Array.prototype.solution1 = function(num) {
    let total = 0;

    for (let i of this) {
        let str = `${i}`;
        
        for (let c of str) if (c == num) total++;
    }
        
    return total;
}

console.assert([5, 15, 55, 515].solution1("5") == 6, `solution1a() failed!`);
console.assert([5, 15, 55, 515].solution1("1") == 2, `solution1b() failed!`);
console.assert([55555].solution1("5")          == 5, `solution1c() failed!`);
console.assert([55555].solution1("1")          == 0, `solution1d() failed!`);


Array.prototype.solution2 = function(num) {
    return this.join("").split("").filter(e => e == num).length;
}

console.assert([5, 15, 55, 515].solution2("5") == 6, `solution2a() failed!`);
console.assert([5, 15, 55, 515].solution2("1") == 2, `solution2b() failed!`);
console.assert([55555].solution2("5")          == 5, `solution2c() failed!`);
console.assert([55555].solution2("1")          == 0, `solution2d() failed!`);


Array.prototype.solution3 = function(num) {
    let regExp = new RegExp(num, "g");
    let matches = this.join("").match(regExp);

    return matches == null ? 0 : matches.length;
}

console.assert([5, 15, 55, 515].solution3("5") == 6, `solution3a() failed!`);
console.assert([5, 15, 55, 515].solution3("1") == 2, `solution3b() failed!`);
console.assert([55555].solution3("5")          == 5, `solution3c() failed!`);
console.assert([55555].solution3("1")          == 0, `solution3d() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test
const Numbers = require("./numbers");
const numbers = new Numbers();
const testNum = numbers.generatePrime(10*1000*1000);

// test solution1()
let startTime = new Date().getTime();

testNum.solution1("1");
testNum.solution1("3");

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);


// test solution2()
startTime = new Date().getTime();

testNum.solution2("1");
testNum.solution2("3");

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);


// test solution3()
startTime = new Date().getTime();

testNum.solution3("1");
testNum.solution3("3");

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution3() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution3() is 0.221 sec
Performance of solution1() is 0.211 sec
Performance of solution2() is 0.469 sec
*/