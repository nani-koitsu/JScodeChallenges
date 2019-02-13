/*
    Write function that accepts integer number and returns if number is prime.
    https://en.wikipedia.org/wiki/Prime_number

    All items in array numbers are prime numbers.
*/

let numbers = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];

// if
function solution1(number) {
    // 1. if number is equal to or less than 1,  return false
    // 2. else if number is equal to 2, 3, 5 or 7, return true
    // 3. else if number is % by 2, 3, 5, 7 == 0,  return false
    // 4. else return true
}

for (let number of numbers) {
    console.assert(solution1(number) === true, `Error solution1(): number ${number} is prime!`);
}

// loop
function solution2(number) {
    // 1. if number is less than or equal to 1, return false
    // 2. if number is equal to 2, return true
    
    // 3. create variable equal to ceil of square root of number
    
    // 4. loop from 2, up to max (if up to max is not prime we dont need to continue any further), increasing index by 1
        // 5. if number % by index equal to 0, return false

    // return true
}

for (let number of numbers) {
    console.assert(solution2(number) === true, `Error solution2(): number ${number} is prime!`);
}


/*
************************* PERFORMANCE TESTS *************************
*/

// generate huge ammount of prime numbers// Sieve of Eratosthenes

// Sieve of Eratosthenes
// https://en.wikipedia.org/wiki/File:Sieve_of_Eratosthenes_animation.gif
function generatePrime(max) {
    /*
        Mark your entire range of numbers as being prime, so let’s say that’s 0 to 10. We know that 0 and 1 can’t be prime by definition, so we mark those as not prime. Now we loop from 2 up to the maximum of our range: if that number is currently marked prime, then we can mark all its multiples as not prime. So, 2 is prime, which means 4, 6, and 8 are not, so we mark them as not prime. We then continue to the next number, which is 3, and mark its multiples as not prime: 6 and 9. We then continue to 4, but it’s already been marked as not prime so we can continue to 5, and so on.
    */
    // 1. if max is less than or equal to 1, return empty array

    // 2. create array (sieve) of max items and fill it with true(prime) boolean values
    // 3. mark first and second items of sieve as false(not prime)

    // 4 loop from 2 up to max increasing index by 1
        // 5. if item of sieve is true run one more loop starting from index of this item multiplied by itself, up to max, increasing index by index of outer loop
            // 6. mark element of sieve at current index as false(not prime)

    // 7. reduce sieve
        // 8. if element is true(prime) add its index to accumulator
    // 9. return result of reducing sieve
}

// test solution1()

// test solution2()


/*
************************* PERFORMANCE RESULTS *************************
*/
