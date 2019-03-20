/*
    Difficulty: Tricky    

    Create an extension for arrays that sorts them using the quicksort algorithm.

    Tip: 
    The quicksort algorithm picks an item from its array to use as the pivot point, then splits itself into either two parts (less than or greater than) or three (less, greater, or equal). These parts then repeat the pivot and split until the entire array has been split, then it gets rejoined so that less, equal, and greater are in order.

    Samples:
    1) [12, 5, 4, 9, 3, 2, 1].solution() == [1, 2, 3, 4, 5, 9, 12]
    2) ["f", "a", "b"].solution() == ["a", "b", "f"]
    3) [].solution() == []
*/

// solution1
    // 1. return original array if it has less than 2 items
    
    // 2. create variable "array" equal to original array
    // 3. create variable "pivot" equal to item in the middle of "array"
    // 4. create empty arrays "before", "equal" and "after"

    // 5. loop through "array"
        // 6. add current item to "after"  if it is greater than "pivot"
        // 7. add current item to "before" if it is less    than "pivot"
        // 8. add current item to "equal"  if it is equal   to   "pivot"

    // 9. call current method for "before"
    // 10. call current method for "after"

    // 11. return result of combining output from step 9, "equal" and output from step 10 into one array

// solution2
    // 12. return original array if it has less than 2 items

    // 13. copy original array to variable "array"
    // 14. create variable "pivot" equal to item in the middle of "array"

    // 15. filter "array" to remain elements that are less    than "pivot" and save it to "before"
    // 16. filter "array" to remain elements that are equal   to   "pivot" and save it to "equal"
    // 17. filter "array" to remain elements that are greater than "pivot" and save it to "after"

    // 18. call current method for "before"
    // 19. call current method for "after"

    // 20. return result of combining output from step 9, "equal" and output from step 10 into one array


/*
************************* PERFORMANCE TESTS *************************
*/

// get big numbers for test

// shuffle numbers

// test solution1

// test solution2

/*
************************* PERFORMANCE RESULTS *************************

*/