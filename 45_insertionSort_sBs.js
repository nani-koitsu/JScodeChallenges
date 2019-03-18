/*
    Difficulty: Easy    

    Create an extension for arrays that sort them using the insertion sort algorithm.

    Tip: An insertion sort creates a new, sorted array by removing items individually from the input array and placing them into the correct position in the new array;

    Samples:
    1) [12, 5, 4, 9, 3, 2, 1].solution() == [1, 2, 3, 4, 5, 9, 12]
    2) ["f", "a", "b"].solution() == ["a", "b", "f"]
    2) [].solution() == []
*/

// solution1
    // 1. return original array if it is empty

    // 2. copy original array to variable "originArr"
    // 3. create an empty array "returnArr"

    // 4. loop through "originArr" (lets call item of this loop "unsorted")
        // 5. if "returnArr" is empty just add current item to it
        // else
            // 7. create variable "placed" initially equal to "false"

            // 8. loop through "returnArr" 
                // 9. if "unsorted" is less than current item
                    // 10. place "unsorted" at index of current item

                    // 11. set "placed" to true
                    // 12. break this loop

            
            // 13. add "unsorted" to "returnArr" if it still wasn't placed


    // 14. return "returnArr"


// solution2
    // 1. return original array if it is empty

    // 2. copy original arr to variable "returnArr"

    // 3. loop from 1 up to end of retunArr
        // 4. create variable "currItemIndex" equal to, as you can guess, to current index
        // 5. save current item to variable "itemToPlace"

        // 6. loop as long as "currItemIndex" is greater than 0 and "itemToPlace" is less than previous item
            // 7. swap current item with previous item

            // 8. decrease currItemIndex by 1

        // 9. place "itemToPlace" in "returnArr" at "currItemIndex"
        
        
    // 10. return "returnArr"


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