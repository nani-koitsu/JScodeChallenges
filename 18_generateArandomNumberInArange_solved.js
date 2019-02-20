/*
    Difficulty: Easy    

    Write a function that accepts positive minimum and maximum integers, and returns a random number between those two bounds, inclusive.

    solution(1, 5)  >= 1 && solution(1, 5)  <= 5
    solution(8, 10) >= 8 && solution(8, 10) <= 10
    solution(12, 12) == 12
*/

function solution1(min, max) {
    if (min >= max) return min;

    return Math.random() * (max - min) + min
}

console.assert(solution1(1, 5)   >= 1 && solution1(1, 5)  <= 5, `solution1()a failed!`);
console.assert(solution1(8, 10)  >= 8 && solution1(8, 10) <= 10, `solution1()a failed!`);
console.assert(solution1(12, 12) == 12, `solution1()a failed!`);