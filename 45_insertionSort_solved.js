/*
    Difficulty: Easy    

    Create an extension for arrays that sort them using the insertion sort algorithm.

    Tip: An insertion sort creates a new, sorted array by removing items individually from the input array and placing them into the correct position in the new array;

    Samples:
    1) [12, 5, 4, 9, 3, 2, 1].solution() == [1, 2, 3, 4, 5, 9, 12]
    2) ["f", "a", "b"].solution() == ["a", "b", "f"]
    2) [].solution() == []
*/


// solution1
Array.prototype.solution1 = function() {
    if (this.length == 0) return this

    let originArr = this.slice()
    let retunArr  = []

    for (let unsorted of originArr) {
        if (retunArr.length == 0) retunArr.push(unsorted)
        else {
            let placed = false

            for (let i = 0; i < retunArr.length; i++) {
                if (unsorted < retunArr[i]) {
                    retunArr.splice(i, 0, unsorted)

                    placed = true
                    break
                }
            }
            
            if (!placed) retunArr.push(unsorted)
        }
    }

    return retunArr
}

console.assert([12, 5, 4, 9, 3, 2, 1].solution1().join("") == [1, 2, 3, 4, 5, 9, 12].join(""), `solution1_a() failed!`);
console.assert(["f", "a", "b"].solution1().join("")        == ["a", "b", "f"].join(""),        `solution1_b() failed!`);
console.assert([].solution1().join("")                     == [].join(""),                     `solution1_c() failed!`);

// solution2
Array.prototype.solution2 = function() {
    if (this.length == 0) return this

    let retunArr = this.slice()

    for(let i = 1; i < retunArr.length; i++) {
        let currItemIndex = i
        let itemToPlace   = retunArr[i]

        while(currItemIndex > 0 && itemToPlace < retunArr[currItemIndex - 1]) {
            [retunArr[currItemIndex], retunArr[currItemIndex - 1]] = [retunArr[currItemIndex -1], retunArr[currItemIndex]]

            currItemIndex -= 1
        }

        retunArr[currItemIndex] = itemToPlace
    }
        
    return retunArr
}

console.assert([12, 5, 4, 9, 3, 2, 1].solution2().join("") == [1, 2, 3, 4, 5, 9, 12].join(""), `solution2_a() failed!`);
console.assert(["f", "a", "b"].solution2().join("")        == ["a", "b", "f"].join(""),        `solution2_b() failed!`);
console.assert([].solution2().join("")                     == [].join(""),                     `solution2_c() failed!`);

// solution Joe
Array.prototype.solutionJoe = function() {
    let returnArr = this.slice();

    for (var i = 0; i < returnArr.length; i++) {
        let item = returnArr[i]

        for (var j = i - 1; j > -1 && returnArr[j] > item; j--) {
            returnArr[j + 1] = returnArr[j]
        }
       
        returnArr[j + 1] = item
    }
    
    return returnArr
}

/*
************************* PERFORMANCE TESTS *************************
*/

// get big numbers for test
const Numbers = require('./numbers');
const numbers = new Numbers();
const testNum = numbers.generatePrime(100*1000);
const testArr = []

// shuffle numbers
for (let i of testNum) {
    testArr.push(i)

    if (Math.random() > 0.8) testArr.unshift(i + 1)
}

// test solution1
let startTime = new Date().getTime();

testArr.solution1();

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

// test solution2
startTime = new Date().getTime();

testArr.solution2();

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);

// test solutionJoe
startTime = new Date().getTime();

testArr.solutionJoe();

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionJoe() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1()   is 0.194 sec
Performance of solution2()   is 0.375 sec
Performance of solutionJoe() is 0.012 sec
*/