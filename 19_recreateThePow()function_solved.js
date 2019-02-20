/*
    Difficulty: Easy    

    Create a function that accepts positive two integers, and raises the first to the power of the second.

    solution(4, 3) == Math.pow(4, 3);
    solution(2, 8) == 256;
*/

// loop
function solution1(number, power) {
    if (number <= 0 || power <= 0) return 0;

    let returnVar = number;

    for (let i = 1; i < power; i++){
        returnVar *= number;
    }
    return returnVar;
}

console.assert(solution1(4, 3) == Math.pow(4, 3), `solution1a() failed!`);
console.assert(solution1(2, 8) == 256, `solution1b() failed!`);


// recursion
function solution2(number, power) {
    if (number <= 0 || power <= 0) return 0;
    
    if (power  == 1) return number;

    return number * solution2(number, power - 1);
}

console.assert(solution2(4, 3) == Math.pow(4, 3), `solution2a() failed!`);
console.assert(solution2(2, 8) == 256, `solution2b() failed!`);

function solutionJoe(number, power) {
    return number ** power
}

console.assert(solutionJoe(4, 3) == Math.pow(4, 3), `solutionJoea() failed!`);
console.assert(solutionJoe(2, 8) == 256, `solutionJoeb() failed!`);

/*
************************* PERFORMANCE TESTS *************************
*/

// test solution1()
let startTime  = new Date().getTime();

solution1(21, 13);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;
console.log(`Performance of solution1() is ${ performance } sec`);

// test solution2()
startTime  = new Date().getTime();

solution2(21, 13);


finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;
console.log(`Performance of solution2() is ${ performance } sec`);

// test solutionJoe()
startTime  = new Date().getTime();

solutionJoe(21, 13);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;
console.log(`Performance of solutionJoe() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1()   is 0 sec
Performance of solution2()   is 0 sec
Performance of solutionJoe() is 0 sec
*/