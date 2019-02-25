/*
    Difficulty: Easy    

    Swap two positive variable integers, a and b, without using a temporary variable.

    Before running your code a should be 1 and b should be 2; afterwards, b should be 1 and a should be 2.
    let a = 1;
    let b = 2;
    solution
    a == 2 == true
    b == 1 == true
*/

let a = 1;
let b = 2;

// solution1
// 1. assign sum of "a" and "b" to "a"
// 2. subtract "b" from "a" and assign it to "b"
// 3. subtract "b" from "a" and assign it to "a"

a = 1;
b = 2;

// https://en.wikipedia.org/wiki/XOR_swap_algorithm
/*
XOR truth table
Input	Output
A	B
0	0	0
0	1	1
1	0	1
1	1	0
*/
// solution2
// 1. assign "a" XOR "b" to "a"
// 2. assign "a" XOR "b" to "b"
// 3. assign "a" XOR "b" to "a"

a = 1;
b = 2;

// solution3
// assign array with containing "b" and "a" to to array containing "a" and "b"

a = 1;
b = 2;

// solution4