/*
    Difficulty: Tricky    

    Write an extension for array that reimplements the "map()" method.

    Samples:
    [1, 2, 3].solution(e => `${e}`)                == ['1', '2', '3']
    ['1', '2', '3'].solution(e => parseInt(e))     == [1, 2, 3]
    [8, 3, 6].solution((e, i) => `${i}: ${e * 2}`) == ['0: 16', '1: 6', '2: 12']
    
*/

// solution1
// 1. extend array with method that accept a function "callback"
    // 2. create variable "arr" equal to empty array

    // 3. loop through initial array
        // 4. call "callback" passing element, index and array itself as attributes and add result to "arr"

    // 5. return "arr"


/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test


// test solution1()


// test default map()


/*
************************* PERFORMANCE RESULTS *************************

*/