/*
    Difficulty: Easy    

    Create a function that accepts positive two integers, and raises the first to the power of the second.

    solution(4, 3) == Math.pow(4, 3);
    solution(2, 8) == 256;
*/

// loop
function solution1(number, power) {
    // 1. if "number" is less than or equal to 0
    // OR "power" is less than or equal to 0
        // 2. return 0

    // 3. create variable "returnVar" equal to "number"

    // 4. loop from 1 up to "power"
        // 5. multiply "returnVar" by "number" and assign it back to "returnVar"

    // 6. return returnVar
}

// recursion
function solution2(number, power) {
    // 1. if "number" is less than or equal to 0 return 0
    // 2. if "power" is equal to 1 return "number"

    // 3. return "number" multiplied by "solution2(number, power - 1)";
}


/*
************************* PERFORMANCE TESTS *************************
*/

// test solution1()

// test solution2()


/*
************************* PERFORMANCE RESULTS *************************

*/