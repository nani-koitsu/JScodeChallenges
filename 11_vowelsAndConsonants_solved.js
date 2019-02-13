/*
    Given a string in English, return a tuple containing the number of vowels and consonants.

    Tip: Vowels are the letters, A, E, I, O, and U; consonants are the letters B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z.
    
    solution("JavaScript Coding Challenges") == [8, 18]
    solution("Mississippi")                  == [4, 7]
*/

function solution1(str){
    let lowerStr = str.toLowerCase();
    let vowels = "aeiou";
    let consonants = "bcdfghjklmnpqrstvwxyz";
    let vowelCount = 0;
    let consonantCount = 0

    for (let letter of lowerStr) {
        if (vowels.indexOf(letter) != -1) vowelCount++;
        else if (consonants.indexOf(letter) != -1) consonantCount++;       
 
    }
    
    return [vowelCount, consonantCount];
}

console.assert(solution1("JavaScript Coding Challenges").join("") == [8, 18].join(""), `solution1a() failed!`);
console.assert(solution1("Mississippi").join("") == [4, 7].join(""), `solution1a() failed!`);

function solutionGreg(str) {
    var str = (typeof str == 'string') ? str : '';
    let count = re => (str.match(re) || [0, 0]).length;
    let vowels = count(/[aeiou]/ig);
    let consonants = count(/[bcdfghjklmnpqrstvwxyz]/ig);

    return [vowels, consonants];
}

console.assert(solutionGreg("JavaScript Coding Challenges").join("") == [8, 18].join(""), `solutionGrega() failed!`);
console.assert(solutionGreg("Mississippi").join("") == [4, 7].join(""), `solutionGrega() failed!`);

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

// test solutionGreg()
startTime = new Date().getTime();

solutionGreg(text1);
solutionGreg(text2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionGreg() is ${performance} sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.042 sec
Performance of solutionGreg() is 0.094 sec
*/