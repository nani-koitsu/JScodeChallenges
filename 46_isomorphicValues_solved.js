/*
    Difficulty: Easy    

    Write a function that accepts two values and returns true if they are isomorphic. That is, each part of the value must map to precisely one other, but that might be itself.

    Tip: Strings A and B are considered isomorphic if you can replace all instances of each letter with another. For example, “tort” and “pump” are isomorphic, because you can replace both Ts with a P, the O with a U, and the R with an M. For integers you compare individual digits, so 1231 and 4564 are isomorphic numbers. For arrays you compare elements, so [1, 2, 1] and [4, 8, 4] are isomorphic.

    Samples:
    1)  solution("clap", "slap")                   == true
    2)  solution("rum", "mud")                     == true
    3)  solution("pip", "did")                     == true
    4)  solution("carry", "baddy")                 == true
    5)  solution("cream", "lapse")                 == true
    6)  solution("123123", "456456")               == true
    7)  solution("3.14159", "2.03048")             == true
    8)  solution([1, 2, 1, 2, 3], [4, 5, 4, 5, 6]) == true    
    9)  solution("carry", "daddy")                 == false
    10) solution("did", "cad")                     == false
    11) solution("maim", "same")                   == false
    12) solution("curry", "flurry")                == false
    13) solution("112233", "112211")               == false
*/

// solution1
function solution1(item1, item2) {
    let first  = String(item1)
    let second = String(item2)
    
    if (first.length != second.length) return false
    
    let arr1 = first.split("")
    let arr2 = second.split("")
    let characterMap = {}
    
    for (let i = 0; i < arr1.length; i++) {
        let currChar  = arr1[i]
        let otherChar = arr2[i]
        
        if (characterMap.hasOwnProperty(currChar)) {
            if (characterMap[currChar] != otherChar) return false
        } else {
            if (Object.values(characterMap).indexOf(otherChar) > -1) return false
        
            characterMap[currChar] = otherChar
        }
    }
    
    return true
} 

console.assert(solution1("clap", "slap")                   == true,  `soution1_1  failed!`);
console.assert(solution1("rum", "mud")                     == true,  `soution1_2  failed!`);
console.assert(solution1("pip", "did")                     == true,  `soution1_3  failed!`);
console.assert(solution1("carry", "baddy")                 == true,  `soution1_4  failed!`);
console.assert(solution1("cream", "lapse")                 == true,  `soution1_5  failed!`);
console.assert(solution1("123123", "456456")               == true,  `soution1_6  failed!`);
console.assert(solution1("3.14159", "2.03048")             == true,  `soution1_7  failed!`);
console.assert(solution1([1, 2, 1, 2, 3], [4, 5, 4, 5, 6]) == true,  `soution1_8  failed!`);
console.assert(solution1("carry", "daddy")                 == false, `soution1_9  failed!`);
console.assert(solution1("did", "cad")                     == false, `soution1_10 failed!`);
console.assert(solution1("maim", "same")                   == false, `soution1_11 failed!`);
console.assert(solution1("curry", "flurry")                == false, `soution1_12 failed!`);
console.assert(solution1("112233", "112211")               == false, `soution1_13 failed!`);

// solution2 (cheat)
function solution2(item1, item2) {
    return new Set(item1).size == new Set(item2).size
}

console.assert(solution2("clap", "slap")                   == true,  `soution2_1  failed!`);
console.assert(solution2("rum", "mud")                     == true,  `soution2_2  failed!`);
console.assert(solution2("pip", "did")                     == true,  `soution2_3  failed!`);
console.assert(solution2("carry", "baddy")                 == true,  `soution2_4  failed!`);
console.assert(solution2("cream", "lapse")                 == true,  `soution2_5  failed!`);
console.assert(solution2("123123", "456456")               == true,  `soution2_6  failed!`);
console.assert(solution2("3.14159", "2.03048")             == true,  `soution2_7  failed!`);
console.assert(solution2([1, 2, 1, 2, 3], [4, 5, 4, 5, 6]) == true,  `soution2_8  failed!`);
console.assert(solution2("carry", "daddy")                 == false, `soution2_9  failed!`);
console.assert(solution2("did", "cad")                     == false, `soution2_10 failed!`);
console.assert(solution2("maim", "same")                   == false, `soution2_11 failed!`);
console.assert(solution2("curry", "flurry")                == false, `soution2_12 failed!`);
console.assert(solution2("112233", "112211")               == false, `soution2_13 failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// get big string for test
const BigStr  = require('./bigString');
const bigStr  = new BigStr();
const testArr = bigStr.getText().split(" ");


// test solution1
let startTime = new Date().getTime();

for (let i = 0; i < testArr.length - 1; i ++) solution1(testArr[i], testArr[i + 1])

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

// test solution2
startTime = new Date().getTime();

for (let i = 0; i < testArr.length - 1; i ++) solution2(testArr[i], testArr[i + 1])

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.029 sec
Performance of solution2() is 0.128 sec
*/