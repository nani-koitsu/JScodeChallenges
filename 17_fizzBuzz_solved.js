/*
    Difficulty: Easy    

    Write a function that counts from 1 through "upTo", and prints "Fizz" if the counter is evenly divisible by 3, "Buzz" if it’s evenly divisible by 5, "Fizz Buzz" if it’s even divisible by three and five, or the counter number for all other cases.

    solution(1).join("")  == [1].join("")
    solution(2).join("")  == [1, 2].join("")
    solution(3).join("")  == [1, 2, 'Fizz'].join("")
    solution(4).join("")  == [1, 2, 'Fizz', 4].join("")
    solution(15).join("") == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz'].join("")
*/

function solution1(upTo) {
    let result = [];

    for (let i = 1; i <= upTo; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push("Fizz Buzz");
        } else if (i % 5 == 0) {
            result.push("Buzz");
        } else if (i % 3 == 0) {
            result.push("Fizz");
        } else {
            result.push(i);
        }
    }
        
    return result
}

console.assert(solution1(1).join("")  == [1].join(""), `solution1a() failed`);
console.assert(solution1(2).join("")  == [1, 2].join(""), `solution1b() failed`);
console.assert(solution1(3).join("")  == [1, 2, 'Fizz'].join(""),    `solution1c() failed`);
console.assert(solution1(4).join("")  == [1, 2, 'Fizz', 4].join(""), `solution1d() failed`);
console.assert(solution1(15).join("") == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz'].join(""), `solution1e() failed`);

function solutionGreg(upTo) {
    let output =[];
 
    for(let i = 1; i <= upTo; i++) output.push(((i % 3 ? '' : 'Fizz') + (i % 5 != 0 ? '' : 'Buzz') || i));    

    return output;
}

console.assert(solutionGreg(1).join("")  == [1].join(""), `solutionGrega() failed`);
console.assert(solutionGreg(2).join("")  == [1, 2].join(""), `solutionGregb() failed`);
console.assert(solutionGreg(3).join("")  == [1, 2, 'Fizz'].join(""),    `solutionGregc() failed`);
console.assert(solutionGreg(4).join("")  == [1, 2, 'Fizz', 4].join(""), `solutionGregd() failed`);
console.assert(solutionGreg(15).join("") == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'].join(""), `solutionGrege() failed`);

function solutionGreg2(upTo) {
    let output =[];
    
    for (var i = 1; i <= upTo; i++) {
        var f = i % 3 == 0, b = i % 5 == 0;
        output.push((f ? b ? "Fizz Buzz" : "Fizz" : b ? "Buzz" : i));
    }
    
    return output;   
}

console.assert(solutionGreg2(1).join("")  == [1].join(""), `solutionGrega() failed`);
console.assert(solutionGreg2(2).join("")  == [1, 2].join(""), `solutionGregb() failed`);
console.assert(solutionGreg2(3).join("")  == [1, 2, 'Fizz'].join(""),    `solutionGregc() failed`);
console.assert(solutionGreg2(4).join("")  == [1, 2, 'Fizz', 4].join(""), `solutionGregd() failed`);
console.assert(solutionGreg2(15).join("") == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz'].join(""), `solutionGrege() failed`);


/*
************************* PERFORMANCE TESTS *************************
*/

// test solution1()
let startTime  = new Date().getTime();

solution1(10*1000*1000);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;
console.log(`Performance of solution1() is ${ performance } sec`);

// test solutionGreg()
startTime  = new Date().getTime();

solutionGreg(10*1000*1000);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;
console.log(`Performance of solutionGreg() is ${ performance } sec`);

// test solutionGreg2()
startTime  = new Date().getTime();

solutionGreg2(10*1000*1000);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;
console.log(`Performance of solutionGreg() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1()    is 0.319 sec
Performance of solutionGreg() is 0.524 sec
Performance of solutionGreg() is 0.339 sec
*/