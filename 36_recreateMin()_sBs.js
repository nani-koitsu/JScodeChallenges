/*
    Difficulty: Tricky    

    Write an extension for array that reimplements the "Math.min()" method.

    Samples:
    [1, 2, 3].solution()       == Math.min(...[1, 2, 3])
    ["q", "f", "k"].solution() == "f"
    [4096, 256, 16].solution() == 16
    [].solution()              == null
*/

// solution1
    // 1. return "null" if initial array is empty

    // 2. if array contains strings
        // 3. sort array and return first element
    // 4. if array contains numbers
        // 5. sort initial array as an array of numbers and return first element


// solution2
    // 1. return "null" if initial array is empty

    // 2. create variable "lowest" initially equal to first element of array

    // 3. loop through array
        // 4. if element is less than "lowest"
            // 5. assign element to be "lowest"

    // 6. return "lowest"


// solution3
    // 1. return "null" if initial array is empty

    // 2. reduce initial array using ternary operator
        // 3. if previous element of array is greater than current, return current, otherwise return previous


/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test

// import big string for test


// test solution1()


// test solution1()


// test solution3()


/*
************************* PERFORMANCE RESULTS *************************

*/