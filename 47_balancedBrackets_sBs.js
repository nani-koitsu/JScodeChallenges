/*
    Difficulty: Easy    

    Write a function that accepts a string containing the characters "(", "[", "{", "<", ">", "}", "]", and ")" in any arrangement and frequency. It should return true if the brackets are opened and closed in the correct order, and if all brackets are closed. Any other input should false.

    Samples:
    1)  solution("()")           == true
    2)  solution("([])")         == true
    3)  solution("([])(<{}>)")   == true
    4)  solution("([]{}<[{}]>)") == true
    5)  solution("")             == true
    6)  solution("}{")           == false
    7)  solution("([)]")         == false
    8)  solution("([)")          == false
    9)  solution("([")           == false
    11) solution("[<<<{}>>]")    == false
    12) solution("Hello")        == false
*/

// solution
    // 1. return "false" if you got an empty string
    
    // 2. create variable "brackets" equal to "([{<>}])"

    // 3. loop through "brackets"
        // 4. break loop if input string contains current item
        // 5. return "false" if we reached the last item

    // 6. create empty array "queue"
    // 7. create object "charMap" mapping opening bracket to closing ("(" : ")" and so on)

    // 8. loop through input string
        // 9. if "charMap" has property equal current item
            // 10. add value of this property to the "queue"
        // 11. else if "charMap" has value equal to current item
            // 12. return "false" if "queue" is empty
            // 13. return "false" if current item is not equal to last item of "queue"
            // 14. otherwise just delete last item from "queue"

    // 15. return if "queue" is empty


/*
************************* PERFORMANCE TESTS *************************
*/

// get big string for test

// test solution

/*
************************* PERFORMANCE RESULTS *************************

*/