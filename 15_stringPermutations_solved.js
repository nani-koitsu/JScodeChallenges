/*
    Difficulty: Taxing

    Write a function that returns all possible permutations of a given input string.

    Tip1: A string permutation is any given rearrangement of its letters, for example boamtw is a permutation of "wombat".

    solution("a")             == ["a"];
    solution("ab").sort()     == ["ab", "ba"].sort();
    solution("abc").sort()    == ["abc", "acb", "bac", "bca", "cab", "cba"].sort();
    solution("wombat").length == 720;
*/

function solution1(str) {
    let result = [];

    function permute(str, current = "") {
        let length = str.length;
        let strArr = str.split("");

        if (length == 0) {
            result.push(current);
        } else {
            for (let i = 0; i < length; i++) {
                let left = strArr.slice(0, i).join("");
                let right = strArr.slice(i + 1, length).join("");

                permute(left + right, current + strArr[i]);
            }
        }
    }
        
    permute(str);
    
    return result;
}

console.assert(solution1("a").join("")             == ["a"].join(""), `solution1a() failed!`);
console.assert(solution1("ab").sort().join("")     == ["ab", "ba"].sort().join(""), `solution1b() failed!`);
console.assert(solution1("abc").sort().join("")    == ["abc", "acb", "bac", "bca", "cab", "cba"].sort().join(""), `solution1c() failed!`);
console.assert(solution1("wombat").length == 720, `solution1d() failed!`);

function solutionGreg(str) {
    var results = [];
  
    if (str.length === 1) {
        results.push(str);
        return results;
    }
  
    for (var i = 0; i < str.length; i++) {
        var firstChar = str[i];
        var charsLeft = str.substring(0, i) + str.substring(i + 1);
        var innerPermutations = solutionGreg(charsLeft);
        
        for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }

    return results;
}

console.assert(solutionGreg("a").join("")             == ["a"].join(""), `solutionGrega() failed!`);
console.assert(solutionGreg("ab").sort().join("")     == ["ab", "ba"].sort().join(""), `solutionGregb() failed!`);
console.assert(solutionGreg("abc").sort().join("")    == ["abc", "acb", "bac", "bca", "cab", "cba"].sort().join(""), `solutionGregc() failed!`);
console.assert(solutionGreg("wombat").length == 720, `solutionGregd() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

const testStr1 = "abcdefghi";
const testStr2 = "abcdefghij";

// test solution1()
let startTime  = new Date().getTime();

let result = solution1(testStr1);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;
console.log(`${result.length} permutations were created in ${ performance } sec using solution1()`);

startTime  = new Date().getTime();

result = solution1(testStr2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`${result.length} permutations were created in ${ performance } sec using solution1()`);

// test solutionGreg()
startTime  = new Date().getTime();

result = solutionGreg(testStr1);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`${result.length} permutations were created in ${ performance } sec using solutionGreg()`);

startTime  = new Date().getTime();

result = solutionGreg(testStr2);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`${result.length} permutations were created in ${ performance } sec using solutionGreg()`);


/*
************************* PERFORMANCE RESULTS *************************

362_880   permutations were created in 0.235 sec using solution1()
3_628_800 permutations were created in 2.265 sec using solution1()
362_880   permutations were created in 0.127 sec using solutionGreg()
3_628_800 permutations were created in 2.39  sec using solutionGreg()
*/