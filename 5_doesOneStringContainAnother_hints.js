/*
    Difficulty: Easy

    Write your own version of includes() method on String that ignores letter case, and without using existing includes() method.

    solution("Hello, world", "Hello")   == true
    solution("Hello, world", "WORLD")   == true
    solution("Hello, world", "Goodbye") == false
*/

// Loop
function solution1(str1, str2){
    // 1. lowercase str1 (lowStr1)
    // 2. lowercase str2 (lowStr2)
    // 3. create bool variable (contains)
    
    // 4. loop through lowStr1
        // 5. if lowStr1[i] equel to first letter of lowStr2
            // 6. swith contains to true
            // 7. loop through lowStr2
            // 8. if (lowStr1[ij] != lowStr2[j]) && (ij < lowStr1.length) swith contains to false

    // return contains
}

// Cheat (use similar to includes() method)
function solution2(str1, str2) {
    // 1. lowercase str1 (lowStr1)
    // 2. lowercase str2 (lowStr2)

    // check index of str2 in str1
}

// Delete str2 from str1
function solution3(str1, str2) {
    // 1. lowercase str1 (lowStr1)
    // 2. lowercase str2 (lowStr2)

    // compare lowStr1 length to lowStr1 length after you replace lowStr2 to ""
}

// Regular Expression (bonus)
function solution4(str1, str2) {
    // 1. lowercase str1 (lowStr1)
    // 2. lowercase str2 (lowStr2)
    // 3. create regular expression from lowStr2

    // check if lowStr1 has match with regExp
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import huge string for performance tests

// test solution1()

// test solution2()

// test solution3()

// test solution4()


/*
************************* PERFORMANCE RESULTS *************************

*/