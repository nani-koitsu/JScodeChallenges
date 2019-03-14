/*
    Difficulty: Easy    

    Create an extension for arrays that sort them using bubble sort.

    Tip: A bubble sort repeatedly loops over the items in an array, comparing items that are next to each other and swapping them if they aren’t sorted. This looping continues until all items are in their correct order.

    Samples:
    1) [12, 5, 4, 9, 3, 2, 1].solution() == [1, 2, 3, 4, 5, 9, 12]
    2) ["f", "a", "b"].solution() == ["a", "b", "f"]
    2) [].solution() == []
*/

// solution1
    // 0. return original array if it is empty

    // 1. create variable "returnVal" equal to original array
    // 2. create variable "swapsMode" initially equal to "null"

    // 3. do while "swapsMode" is "true"
        // 4. set "swapsMode" to "false"

        // 5. loop through "returnVal" excluding last element
            // 6. create variable "element" equal to element at current index
            // 7. create variable "next" equal to element at next index

            // 8. if current element is greater than next element
                // 9. swap current element and next element

                // 10. set "swapsMode" to "true"

    // 11. return "returnVal"


// solution2
    // 12. return original array if it is empty

    // 13. create variable "returnVal" equal to original array
    // 14. create variable "highestSortedIndex" equal length of original array

    // 15. do while "highestSortedIndex" is not equal to "0"
        // 16. create variable "lastSwapIndex" initially equal to "0"

        // 17. loop from "0" up to "highestSortedIndex" minus 1
            // 18. create variable "element" equal to current element 
            // 19. create variable "next" equal to next element

            // 20. if "element" is greater "next"
                // 21. swap element and next

                // 22. set "lastSwapIndex" to be equal to current index plus 1

        // 23. set "highestSortedIndex" to be equal to "lastSwapIndex"
        

    // 24. return "returnVal"


/*
************************* PERFORMANCE TESTS *************************
*/

// get big numbers for test

// shuffle numbers

// test solution1

// test solution2

// test dafault sort()


/*
************************* PERFORMANCE RESULTS *************************

*/