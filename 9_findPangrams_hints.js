/*
    Write a function that returns true if it is given a string that is an English pangram, ignoring letter case.

    Tip: A pangram is a string that contains every letter of the alphabet at least once.

    solution("The quick brown fox jumps over the lazy dog")  === true
    solution("The quick brown fox jumped over the lazy dog") === false
*/

// loop
function solution1(str){
    // 1. create variable "alphabet" equal to "abcdefghijklmnopqrstuvwxyz"
    // 2. convert str to lower case "lowerStr" 
    
    // 3. loop through lowerStr
        // 4. if index of letter in lowerStr is not equal to -1
            // 5. delete this letter from alphabet
    
    // 6. return if alphabet is equal to empty string
}

// reduce
function solution2(str) {
    // 1. convert str to array of lower cased letters 

    // 2. reduce lowerArr 
        // 3. set accumulator to be equal to "abcdefghijklmnopqrstuvwxyz"
        // 4. if index of letter in accumulator is not equal to -1, delete this letter from accumulator

    // 5. return if result of reduce is equal to ""
}

// reduce short
function solution3(str) {
    // 1. convert str to array of lower cased letters 

    // 2. reduce lowerArr 
        // 3. set accumulator to be equal to "abcdefghijklmnopqrstuvwxyz"
        // 4. if index of letter in accumulator is not equal to -1, delete this letter from accumulator

    // 5. return if result of reduce is equal to ""
}

// filter + Set
function solution4(str) {
    // 1. create Set from lowercased str
    // 2.convert set to array

    // 3. filter array by using condition (letter >= "a" and letter <= "z")

    // 4. return if filter result length is equal to 26
}

// filter + Set short
function solution5(str) {
    // 1. create Set from lowercased str
    // 2.convert set to array

    // 3. filter array by using condition (letter >= "a" and letter <= "z")

    // 4. return if filter result length is equal to 26
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
