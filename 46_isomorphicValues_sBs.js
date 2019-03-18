/*
    Difficulty: Easy    

    Write a function that accepts two values and returns true if they are isomorphic. That is, each part of the value must map to precisely one other, but that might be itself.

    Tip: Strings A and B are considered isomorphic if you can replace all instances of each letter with another. For example, “tort” and “pump” are isomorphic, because you can replace both Ts with a P, the O with a U, and the R with an M. For integers you compare individual digits, so 1231 and 4564 are isomorphic numbers. For arrays you compare elements, so [1, 2, 1] and [4, 8, 4] are isomorphic.

    Samples:
    1)  solution("clap", "slap")                   == true
    2)  solution("rum", "mud")                     == true
    3)  solution("pip", "did")                     == true
    4)  solution("carry", "baddy")                 == true
    5)  solution("cream", "lapse")                 == true
    6)  solution("123123", "456456")               == true
    7)  solution("3.14159", "2.03048")             == true
    8)  solution([1, 2, 1, 2, 3], [4, 5, 4, 5, 6]) == true    
    9)  solution("carry", "daddy")                 == false
    10) solution("did", "cad")                     == false
    11) solution("maim", "same")                   == false
    12) solution("curry", "flurry")                == false
    13) solution("112233", "112211")               == false
*/

// solution1
    // 1. convert first item into string "first"
    // 2. convert second item into string "second"

    // 3. return "false" if "first" has less or more characters than "second"

    // 4. create an array "arr1" from "first"
    // 5. create an array "arr2" from "second"
    // 6. create empty object "characterMap"

    // 7. loop through "arr1"
        // 8. create variable "currChar" equal to current item in "arr1"
        // 9. create variable "otherChar" equal to item at current index in "arr2"
        
        // 10. if "characterMap" has property equal to "currChar"
            // 11. return "false" if value of propery equal to "currChar" in "characterMap" isn't equal to "otherChar"
        // 12. else
            // 13. return "false" if "characterMap" doesn't have value equal "otherChar"

            // 14. create propery equal to "currChar" in "characterMap" equal to "otherChar"
    

    // 15. return true

// solution2 (cheat)
    // 16. create two sets from "item1" and "item2" and compare their sizes


/*
************************* PERFORMANCE TESTS *************************
*/

// get big string for test

// test solution1

// test solution2


/*
************************* PERFORMANCE RESULTS *************************

*/