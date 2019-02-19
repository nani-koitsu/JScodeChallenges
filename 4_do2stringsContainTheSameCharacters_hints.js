/*
    Difficulty: Easy    

    Write a function that accepts two String parameters, and returns true if they contain the same characters in any order taking into account letter case.

    solution("abca",    "abca")  == true
    solution("abc",     "cba")   == true
    solution(" a1 b2 ", "b1 a2") == true
    solution("abc",     "abca")  == true
    solution("abc",     "Abc")   == false
    solution("abc",     "cbAa")  == false
*/

function solution1(str1, str2){
    // 1. create variable "checkStr" equal to "str2" 

    // 2. loop through "str1"
        // 3. if str1[i] contains in "checkStr" delete all appearances of str1[i] from "checkStr"
        
    // 4. return if "checkStr" is empty
}

function solution2(str1, str2) {
    // 1. create Set (set1) from "str1"
    // 2. create Set from "str2"
    // 3. convert "set1" to array "arr1" and sort it
    // 4. convert "set2" to array "arr2" and sort it

    // 5. compare "arr1" to "arr2" and return the result 
    // 5.1 to compare two arrays you need to stringify them first
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import huge string for performance tests

// test solution1()

// test solution2()

// test solution2()


/*
************************* PERFORMANCE RESULTS *************************

*/