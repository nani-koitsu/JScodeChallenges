/*
    Difficulty: Easy    

    Extend arrays with a function that accepts an array of numbers from 0 to 100 where zero or more numbers might be missing, and returns an array of the missing numbers.

    Samples:
    let arr = [...Array(101).keys()];
    arr.splice(35, 1);
    arr.splice(20, 1);
    arr.splice(7, 1);
    arr.solution() == [8, 21, 36];
*/

Array.prototype.solution1 = function() {
    // 1. create variable "diff" equal to "0"
    // 2. create array "arr" of 0...100

    // 3. loop through arr
        // 4. add element of arr to "diff" if it doesn't exist in initial array

    // 5. return "diff"
}


Array.prototype.solution2 = function() {
    // 1. create variable "diff" equal to "0"
    // 2. create array "arr" of 0...100
    // 3. create set from initial array

    // 3. loop through arr
        // 4. add element of arr to "diff" if it doesn't exist in initial array

    // 5. return "diff"
}


Array.prototype.solution3 = function() {
    // 1. create array "arr" of 0...100
    // 2. filter "arr" to leave elements that are not in initial array
}

/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test


// test solution1()


// test solution2()


// test solution3()


/*
************************* PERFORMANCE RESULTS *************************

*/