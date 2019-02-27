/*
    Difficulty: Easy    

    Write an extension for array of integers that returns the number of times a specific digit appears in any of its numbers.

    Samples:
    [5, 15, 55, 515].solution("5") == 6
    [5, 15, 55, 515].solution("1") == 2
    [55555].solution("5")          == 5
    [55555].solution("1")          == 0
*/


Array.prototype.solution1 = function(num) {
    // 1. set variable "total" equal to "0"

    // 2. loop through "this"
        // 3. convert element of "this" into string and save it to variable "str"
        
        // 4. loop through "str"
            // 5. if character of "str" is equal to "num"
                // 6. increase "total"

    // 7. return total
}


Array.prototype.solution2 = function(num) {
    // 1. convert your collection into string
    // 2. convert string into array
    // 3. filter array to make sure each element is equal to "num"
    // 4. return length of result
}


Array.prototype.solution3 = function(num) {
    // 1. create Regular Expression with pattern equal to "num" and global flag
    // 2. convert collection into string
    // 3. find matches of regExp in string
    // 4. if matches exist, return it's length, otherwise return "0"
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test

// test solution1()


// test solution2()


// test solution3()


/*
************************* PERFORMANCE RESULTS *************************


*/