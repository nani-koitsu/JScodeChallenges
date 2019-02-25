/*
    Difficulty: Easy

    Write a function that accepts a string, and returns how many times a specific character appears, taking case into account.

    solution("The rain in Spain", "a")       == 2
    solution("Mississippi", "i")             == 4
    solution("Hacking with JavaScript", "i") == 3
*/


function solution1(str1, str2){
    // 1. create variable letterCount and set it to be equal to 0
    // 2. loop through str1
        // 3. if str1[i] is equal to str2 increase letterCount
    // 4. return letterCount
}

function solution2(str1, str2) {
    // 1. split str1 (arr)
    // 2. reduce arr with initial accumulator = 0
        // 3. if element equal to str2 increase acc
        // 4 return acc
    // 5. return result of reduce method
}

function solution3(str1, str2) {
    // 1. split str1 and reduce it with accumulator equal to 0
        // 2. use ternary operator to check if element is equal to str2
            // 3. if true add 1 to accumulator, else add 0 to accumulator
    // 4. return result of reduce method
}

function solution4(str1, str2) {
    // 1. delete str2 from str1 by using split(str2)
    // 2. join it back to string (str1Replaced)
    // 3. subtruct length of str1Replaced from original str1
}

function solution5(str1, str2) {
    // 1. create regular expression(regExp) from str2 with "g" modifier
    // 2. replace regExp with "" in str1
    // 3. subtruct length of str1 after replacment from original str1
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import huge strings for performance tests

// test solution1()

// test solution2()

// test solution3()

// test solution4()

// test solution5()

/*
************************* PERFORMANCE RESULTS *************************

*/