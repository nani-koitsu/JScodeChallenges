/*
    Write a function that returns a string with any consecutive spaces replaced with a single space.

    solution("a   b   c") === "a b c"
    solution("    a")     === " a"
    solution("abc")       === "abc"
*/

// loop
function solution1(str){
    // 1. if length of str is equal to 0, return str

    // 2. create variable "returnVal" equal to ""
    // 3. create boolean variable "seenSpace"

    // 4. loop through str
        // 5. if letter is not equal to " "
            // 6. add this letter to returnVal
            // 7. set seenSpace to "false"
        // 8. else 
            // 9. if seenSpace is equal to false
                // 10. add this letter to returnVal
            // 11. set seenSpace to true

    // 12. return returnVal
}

// regExp
function solution2(str) {
    // 1. if length of str is equal to 0, return str

    // 2. create Regular Expression with pattern " +" and global flag
    // 3. replace regExp in str with " "
    
    // 4. return result
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
