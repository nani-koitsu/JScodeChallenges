/*
    Difficulty: Easy    

    Extend arrays with a function that returns an array of strings sorted by their lengths, longest first.

    Samples:
    ["a", "abc", "ab"].solution()                      == ["abc", "ab", "a"]
    ["Saki", "Q", "Joe" ,"Chris", "Jordan"].solution() == ["Jordan", "Chris", "Saki", "Joe", "Q"]
    [].solution() == []
*/


// solution1
Array.prototype.solution1 = function() {
    return this.sort((e1, e2) => e2.length - e1.length);
}

console.assert(["a", "abc", "ab"].solution1().join("") == ["abc", "ab", "a"].join(""), `solution1a() failed!`);
console.assert(["Saki", "Q", "Joe" ,"Chris", "Jordan"].solution1().join("") == ["Jordan", "Chris", "Saki", "Joe", "Q"].join(""), `solution1b() failed!`);
console.assert([].solution1().join("") == [].join(""), `solution1c() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import big string for test
const BigStr  = require('./bigString');
const bigStr  = new BigStr();
const testStr = bigStr.getText().split(" ");

// test solution1()
let startTime = new Date().getTime();

testStr.solution1();

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.064 sec
*/