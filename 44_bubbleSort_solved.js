/*
    Difficulty: Easy    

    Create an extension for arrays that sort them using bubble sort.

    Tip: A bubble sort repeatedly loops over the items in an array, comparing items that are next to each other and swapping them if they aren’t sorted. This looping continues until all items are in their correct order.

    Samples:
    1) [12, 5, 4, 9, 3, 2, 1].solution() == [1, 2, 3, 4, 5, 9, 12]
    2) ["f", "a", "b"].solution() == ["a", "b", "f"]
    2) [].solution() == []
*/

// solution1
Array.prototype.solution1 = function() {
    if(this.length == 0) return this

    let returnVal = this.slice();
    let swapsMode = null;

    do {
        swapsMode = false

        for (let i = 0; i < returnVal.length - 1; i++) {
            let element = returnVal[i]
            let next = returnVal[i + 1]

            if (element > next) {
                [returnVal[i], returnVal[i + 1]] = [returnVal[i + 1], returnVal[i]]
                
                swapsMode = true
            }

        }

        if (!swapsMode) return returnVal
        
    } while (swapsMode);

    // 11. return "returnVal"
    return returnVal
}

console.assert([12, 5, 4, 9, 3, 2, 1].solution1().join("") == [1, 2, 3, 4, 5, 9, 12].join(""), `solution1_a failed!`);
console.assert(["f", "a", "b"].solution1().join("")        == ["a", "b", "f"].join(""), `solution1_b failed!`);
console.assert([].solution1().join("")                     == [].join(""), `solution1_c failed!`);


// solution2
Array.prototype.solution2 = function() {
    if(this.length == 0) return this

    let returnVal = this.slice()
    let highestSortedIndex = this.length

    do {
        let lastSwapIndex = 0

        for (let i = 0; i < highestSortedIndex - 1; i++) {
            let element = returnVal[i]
            let next = returnVal[i + 1]

            if (element > next) {
                [returnVal[i], returnVal[i + 1]] = [returnVal[i + 1], returnVal[i]]

                lastSwapIndex = i + 1
            }
        }

        highestSortedIndex = lastSwapIndex
    } while (highestSortedIndex != 0);

        
    return returnVal
}

console.assert([12, 5, 4, 9, 3, 2, 1].solution2().join("") == [1, 2, 3, 4, 5, 9, 12].join(""), `solution2_a failed!`);
console.assert(["f", "a", "b"].solution2().join("")        == ["a", "b", "f"].join(""), `solution2_b failed!`);
console.assert([].solution2().join("")                     == [].join(""), `solution2_c failed!`);

Array.prototype.solutionSonny=function() {
    let returnVal = this.slice()

    for(let j=returnVal.length; j >= 0; j--) {
       let swapped = false
       
       for(let i = 0; i < j; i++) {
           if(returnVal[i] > returnVal[i + 1]) {
               let temp = returnVal[i]
               
               returnVal[i]     = returnVal[i + 1]
               returnVal[i + 1] = temp

               swapped = true
           }
       }

       if(!swapped) return returnVal
    }

    return returnVal
}

console.assert([12, 5, 4, 9, 3, 2, 1].solutionSonny().join("") == [1, 2, 3, 4, 5, 9, 12].join(""), `solutions_a failed!`);
console.assert(["f", "a", "b"].solutionSonny().join("")        == ["a", "b", "f"].join(""), `solutions_b failed!`);
console.assert([].solutionSonny().join("")                     == [].join(""), `solutions_c failed!`);


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

    if (Math.random() > 0.5) testArr.unshift(i + 1)
}

// test solution1
let startTime = new Date().getTime();

testArr.solution1();

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

// test solution2
startTime = new Date().getTime();

testArr.solution2()

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);

// test solutionS
startTime = new Date().getTime();

testArr.solutionSonny()

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionSonny() is ${ performance } sec`)

// test dafault sort()
startTime = new Date().getTime();

testArr.sort((e1, e2) => e1 - e2);

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of default sort() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1()     is 1.342 sec
Performance of solution2()     is 1.143 sec
Performance of solutionSonny() is 0.346 sec
Performance of default sort()  is 0.001 sec
*/