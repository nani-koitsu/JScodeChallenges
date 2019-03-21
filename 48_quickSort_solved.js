/*
    Difficulty: Tricky    

    Create an extension for arrays that sorts them using the quicksort algorithm.

    Tip: 
    The quicksort algorithm picks an item from its array to use as the pivot point, then splits itself into either two parts (less than or greater than) or three (less, greater, or equal). These parts then repeat the pivot and split until the entire array has been split, then it gets rejoined so that less, equal, and greater are in order.

    Samples:
    1) [12, 5, 4, 9, 3, 2, 1].solution() == [1, 2, 3, 4, 5, 9, 12]
    2) ["f", "a", "b"].solution() == ["a", "b", "f"]
    3) [].solution() == []
*/

// solution1
Array.prototype.solution1 = function() {
    if (this.length < 2) return this
    
    let array  = this.slice()
    let pivot  = array[Math.round(array.length / 2)]
    let before = []
    let equal  = []
    let after  = []
    
    for (let item of array) {
        if (item > pivot) after.push(item)
        else if (item < pivot) before.push(item)
        else equal.push(item)
    }

    return before.solution1().concat(equal, after.solution1())
}

console.assert([12, 5, 4, 9, 3, 2, 1].solution1().join("") == [1, 2, 3, 4, 5, 9, 12].join(""), `solution1_a failed!`)
console.assert(["f", "a", "b"].solution1().join("")        == ["a", "b", "f"].join(""),        `solution1_b failed!`)
console.assert([].solution1().join("")                     == [].join(""),                     `solution1_a failed!`)

// solution2
Array.prototype.solution2 = function() {
    if (this.length < 2) return this
    
    let array = this.slice()
    let pivot = array[Math.round(Math.random() * (array.length - 1))]
    
    let before = array.filter(e => e < pivot)
    let equal  = array.filter(e => e == pivot)
    let after  = array.filter(e => e > pivot)

    return before.solution1().concat(equal, after.solution1())
}

console.assert([12, 5, 4, 9, 3, 2, 1].solution2().join("") == [1, 2, 3, 4, 5, 9, 12].join(""), `solution2_a failed!`)
console.assert(["f", "a", "b"].solution2().join("")        == ["a", "b", "f"].join(""),        `solution2_b failed!`)
console.assert([].solution2().join("")                     == [].join(""),                     `solution2_a failed!`)

// solutionGregKeon
function quickSortOptimized(list, lowIndex, highIndex) {
    if (lowIndex < highIndex) {

        // Get the pivot index index after partition operation plus make swaps needed.
        let  currentPartitionIndex = partitionList(list, lowIndex, highIndex);

        // E.g. On first iteration low index is 0, 4 - 1.
        quickSortOptimized(list, lowIndex, currentPartitionIndex - 1);
        // E.g. On first iteration low index is 4 + 1, 7. We are leaving out the index of the pivot
        quickSortOptimized(list, currentPartitionIndex + 1, highIndex);
    }
    return list;
}

function partitionList(list, lowIndex, highIndex) {
    // Indexes used for wall partitioning
    let wallIndex = lowIndex - 1;
    let pivot     = list[highIndex]; // LastElement

    // INFO: HEADS UP
    // Set wall index and lowIndex to
    // 0 and 1 respectively to avoid unnecessary swap at the start
    for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex++) {
        let currentItem   = list[currentIndex];
        // Perform swap
        if (currentItem < pivot) {
            // Increment wall index
            wallIndex++;

            // perform swap
            // swap item at wall index with item at current index
            let temp           = list[wallIndex];
            list[wallIndex]    = list[currentIndex];
            list[currentIndex] = temp;
        }
    }

    // Swap pivot with item immediately to the right of the wall
    let temp            = list[wallIndex + 1];
    list[wallIndex + 1] = list[highIndex];
    list[highIndex]     = temp;

    return wallIndex + 1; // Return pivot index
}

function quickSort(array) {
    let list = array;

    return quickSortOptimized(list, 0, list.length - 1);
}

console.assert(quickSort([12, 5, 4, 9, 3, 2, 1]).join("") == [1, 2, 3, 4, 5, 9, 12].join(""), `solutionGK_a failed!`)
console.assert(quickSort(["f", "a", "b"]).join("")        == ["a", "b", "f"].join(""),        `solutionGK_b failed!`)
console.assert(quickSort([]).solution2().join("")         == [].join(""),                     `solutionGK_c failed!`)

/*
************************* PERFORMANCE TESTS *************************
*/

// get big numbers for test
const Numbers = require('./numbers')
const numbers = new Numbers()
const testNum = numbers.generatePrime(1*1000*1000)
const testArr = []

// shuffle numbers
for (let i of testNum) {
    testArr.push(i)

    if (Math.random() > 0.5) testArr.unshift(i + 1)
}

// test solution1
let startTime = new Date().getTime()

testArr.solution1()

let finishTime  = new Date().getTime()
let performance = (finishTime - startTime) / 1000

console.log(`Performance of solution1() is ${ performance } sec`)

// test solution2
startTime = new Date().getTime()

testArr.solution2()

finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000

console.log(`Performance of solution2() is ${ performance } sec`)

// test solutionGregKeon
startTime = new Date().getTime()

testArr.solution2()

finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000

console.log(`Performance of solution2() is ${ performance } sec`)


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.068 sec
Performance of solution2() is 0.069 sec
Performance of solution2() is 0.057 sec
*/