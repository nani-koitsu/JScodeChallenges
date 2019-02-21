/*
    Difficulty: Tricky    

    Create a function that accepts any positive integer and returns the next highest and next lowest number that has the same number of ones in its binary representation. If either number is not possible, return null for it.

    Samples:
    1) The number 12 is 1100 in binary, so it has two 1s. The next highest number with    that many 1s is 17, which is 10001. The next lowest is 10, which is 1010.
       solution(12) == [10, 17]

    2) The number 28 is 11100 in binary, so it has three 1s. The next highest number      with that many 1s is 35, which is 100011. The next lowest is 26, which is 11010.
       solution(28) == [26, 35]
*/


function solution1(number) {
    // 1. if "number" is less than 1, return null

    // 2. use "toString(2)" to create binary string of "number" and assign result to variable "binary" 
    // 3. split "binary" and filter it to leave only "1" and convert it back to string
    // 4. create variable "max" equal to max integer number
    // 5. create variable "nextHighest" equal to null
    // 6. create variable "nextLowest" equal to null

    // 7. loop from "number" + 1 up to max
        // 8. use "toString(2)" to create binary string of "i" and assign result to variable "iBinary" 
        // 9. split "iBinary" and filter it to leave only "1" and convert it back to string

        // 10. if "binary" is equal to "iBinary"
            // 11. set "nextHighest" to be equal to i
            // 12. break

    // 13. loop from "number" - 1 while i is greater than 0
        // 14. use "toString(2)" to create binary string of "i" and assign result to variable "iBinary" 
        // 15. split "iBinary" and filter it to leave only "1" and convert it back to string

        // 16. if "binary" is equal to "iBinary"
            // 17. set "nextLowest" to be equal to i
            // 18. break

    // 19. return array of "nextLowest" and "nextHighest"
}

function solution2(number) {
    // 1. if "number" is less than 1, return null

    // 2. create function "ones(number)"
        // 3. return filtered binary of "number"

    // 3. call "ones(number)" and assign it to variable "binary"
    // 4. create variable "max" equal to max integer number
    // 5. create variable "nextHighest" equal to null
    // 6. create variable "nextLowest" equal to null

    // 7. loop from "number" + 1 up to max
        // 8. if "binary" equal to "ones(i)"
            // 9. assign "i" to "nextHighest"
            // 10. break

    // 11. loop from "number" - 1 while i is greater than 0
        // 12. if "binary" equal to "ones(i)"
            // 13. assign "i" to "nextLowest"
            // 14. break

    // 15. return array of "nextLowest" and "nextHighest"
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test

// test solution1()

// test solution2()


/*
************************* PERFORMANCE RESULTS *************************

*/