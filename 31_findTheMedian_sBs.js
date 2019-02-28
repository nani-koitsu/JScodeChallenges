/*
    Difficulty: Easy    

    Write an extension to array that accepts an array of Int and returns the median average, or null if there are no values.

    Tip: The mean average is the sum of some numbers divided by how many there are. The median average is the middle of a sorted list. If there is no single middle value – e.g. if there are eight numbers - then the median is the mean of the two middle values.

    Samples:
    [1, 2, 3].solution()          == 2
    [1, 2, 9].solution()          == 2
    [1, 3, 1007, 5, 9].solution() == 5
    [1, 2, 3, 4].solution()       == 2.5
*/

// solution1
Array.prototype.solution1 = function() {
    // 1. return null if it's an empty array

    // 2. create variable equal to middle of array
    // 3. sort array

    // 4. if middle isn't an even number
        // 5. round down middle and return number at this index
    // 6. if middle is an even number
        // 7. return mean number of numbers at index equal to "middle - 1" and at index equal to "middle"
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test


// test solution1()


/*
************************* PERFORMANCE RESULTS *************************

*/