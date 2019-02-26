/*
    Difficulty: Taxing    

    Write a function that returns the square root of a positive integer, rounded down to the nearest integer, without using Math.sqrt().

    Samples:
    solution(9)        == 3
    solution(16777216) == 4096
    solution(16)       == 4
    solution(15)       == 3
*/


function solution1(number) {
    // 1. if "number" is equal to "1" return "1"
    
    // 2. loop from 0 up to "number" divided by "2" plus "1"
        // 3. if "i" multiplied by itself is greater than "number"
            // 4. return "i" minus "1"

    // 5. return "0"
}


function solution2(number) {
    // 1. if "number" is equal to "1" return "1"    
    
    // 2. specify "lowerBound" wich will be equal to "0"
    // 3. specify "upperBound" wich will be equal to half of the "number" plus "1"

    // 4. while "lowerBound" plus "1" is less than "upperBound"
        // 5. calculate mid-point wich is equal to rounded half of "upper" minus "lower", plus "lower"
        // 6. calculate "square" of mid-point

        // 7. if "square" is equal to "number"
            // 8. return "middle"
        // 9. if "square" is less than "number" it means that all numbers from low bound up to mid-point are also to low, and so don't need to  be checked.
            // 10. set "lowerBound" to be equal to mid-point
        // 11. if "square" is greater than "number" it means that all numbers from mid-point up to upper bound are also to high, and so don't need to be checked
            // 12. set "upperBound" to be equal to "middle"

    // 13. if "lowerBound" plus "1" is greater or equal than "upperBound" it means that you overshot the number, so just return "lowerBound"
}


function solution3(number) {
    // 1. if "number" is equal to "1" return "1"    

    // return "floor" of "number" in power of "0.5"
}


function solution4(number) {
    // 1. if "number" is equal to "1" return "1"    

    // return "floor" of "number" in power of "0.5"
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test

// test solution1()


// test solution2()


// test solution3()


// test solution4()


/*
************************* PERFORMANCE RESULTS *************************

*/