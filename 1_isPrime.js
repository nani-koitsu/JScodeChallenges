/*
    Write function that accepts integer number and returns if number is prime.
    https://en.wikipedia.org/wiki/Prime_number

    All items in array numbers are prime numbers.
*/

let numbers = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];

// if
function solution1(number) {
}

for (let number of numbers) {
    console.assert(solution1(number) === true, `Error solution1(): number ${number} is prime!`);
}

// loop
function solution2(number) {
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
}

// test solution1()

// test solution2()


/*
************************* PERFORMANCE RESULTS *************************
*/