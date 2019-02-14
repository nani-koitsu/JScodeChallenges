/*
    Write a function that accepts a string as input, then returns how often each letter is repeated in a single run, taking case into account.

    Tip: This approach is used in a simple lossless compression technique called run-length encoding.

    solution("aabbcc")      == "a2b2c2";
    solution("aaabaaabaaa") == "a3b1a3b1a3";
    solution("aaAAaa")      == "a2A2a2";
*/

function solution1(str) {
    // 1. create variable "currentLetter" equal to "false"
    // 2. create variable "returnVal" equal to "" 
    // 3. create variable "letterCounter" equal to 0

    // 4. loop through str
        // 5. if letter is equal to currentLetter
            // 6. increase letterCounter
        // 7. else 
            // 8. if current letter is not false 
                // 9. set returnVal be equal to currentLetter + letterCounter
            // 10. set currentLetter be equal to letter
            // 11. set letterCounter be equal to 1

    // 12. set returnVal be equal to currentLetter + letterCounter

    // 13. return returnVal
}


function solution2(str) {
    // 1. create variable "returnVal" equal to ""
    // 2. create variable "letterCounter" equal to 0
    // 3. convert str to letterArr

    // 4. loop through letterArr
        // 5. increase letterCounter by 1
        // 6. index + 1 is equal to length of letterArr or letterArr[i] is not equal to letterArr[i + 1]
            // 7. add letterArr[i] and letterCounter to returnVal
            // 8. reset letterCounter to 0

    // 9. return returnVal
}

/*
************************* PERFORMANCE TESTS *************************
*/

// import huge strings for performance tests

// test solution1()

// test solution2()


/*
************************* PERFORMANCE RESULTS *************************

*/