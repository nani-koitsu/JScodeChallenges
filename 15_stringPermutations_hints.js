/*
    Difficulty: Taxing

    Write a function that returns all possible permutations of a given input string.

    Tip1: A string permutation is any given rearrangement of its letters, for example boamtw is a permutation of "wombat".

    solution("a")             == ["a"];
    solution("ab").sort()     == ["ab", "ba"].sort();
    solution("abc").sort()    == ["abc", "acb", "bac", "bca", "cab", "cba"].sort();
    solution("wombat").length == 720;
*/

function solution1(str) {
    // 1. create variable "result" equal to empty array

    // 2. create one more function "permute" accepting two arguments "str" and "current" (initially equal to empty string (= ""))
        // 3. create variable "length" equal to length of str
        // 4. convert str to array "strArr"

        // 5. if length is equal to 0 
            // 6. add current to result
        // 7. else
            // 8. loop from 0 to length
                // get the letters before me
                // 9. create variable "left" equal to "slice(0, i)" of strArr and join it into a string
                // get the letters after me
                // 10. create variable "right" equal to "slice(i + 1, length)" and join it into a string

                // 11. call permute(left + right, current + strArr[i])

    // 12. call permute(str)
    
    // 13. return result
}


/*
************************* PERFORMANCE TESTS *************************
*/

// test solution1()


/*
************************* PERFORMANCE RESULTS *************************

*/