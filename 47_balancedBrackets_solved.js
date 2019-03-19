/*
    Difficulty: Easy    

    Write a function that accepts a string containing the characters "(", "[", "{", "<", ">", "}", "]", and ")" in any arrangement and frequency. It should return true if the brackets are opened and closed in the correct order, and if all brackets are closed. Any other input should false.

    Samples:
    1)  solution("()")           == true
    2)  solution("([])")         == true
    3)  solution("([])(<{}>)")   == true
    4)  solution("([]{}<[{}]>)") == true
    5)  solution("")             == true
    6)  solution("}{")           == false
    7)  solution("([)]")         == false
    8)  solution("([)")          == false
    9)  solution("([")           == false
    10) solution("[<<<{}>>]")    == false
    11) solution("Hello")        == false
*/

// solution
function solution(str) {
  if (str.length == 0) return true

  let brackets = "([{<>}])"

  for (let i of brackets) {
      if (str.includes(i)) break

      if (i == brackets[brackets.length - 1]) return false
  }

  let queue   = []
  let charMap = {
                  "(" : ")",
                  "[" : "]",
                  "{" : "}",
                  "<" : ">"
                }

  for(let char of str) {
      if (charMap.hasOwnProperty(char)) {
          queue.push(charMap[char])
      } else if (Object.values(charMap).indexOf(char) > -1) {
          if (queue.length == 0)               return false
          if (char != queue[queue.length - 1]) return false
          
          queue.pop()
      }
  }

  return queue.length == 0 ? true : false
}

console.assert(solution("()")           == true,  `assertion1_Mounir  failed!`)
console.assert(solution("([])")         == true,  `assertion2_Mounir  failed!`)
console.assert(solution("([])(<{}>)")   == true,  `assertion3_Mounir  failed!`)
console.assert(solution("([]{}<[{}]>)") == true,  `assertion4_Mounir  failed!`)
console.assert(solution("")             == true,  `assertion5_Mounir  failed!`)
console.assert(solution("}{")           == false, `assertion6_Mounir  failed!`)
console.assert(solution("([)]")         == false, `assertion7_Mounir  failed!`)
console.assert(solution("([)")          == false, `assertion8_Mounir  failed!`)
console.assert(solution("([")           == false, `assertion9_Mounir  failed!`)
console.assert(solution("[<<<{}>>]")    == false, `assertion1_Mounir0 failed!`)
console.assert(solution("Hello")        == false, `assertion1_Mounir1 failed!`)

// solutionJoe
function solutionJoe(str) {
  let arr = []
  let obj = {
              "<" : ">",
              "(" : ")",
              "[" : "]",
              "{" : "}"
            }
            
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "<" || str[i] === "(" || str[i] === "{" || str[i] === "[") {
      arr.push(str[i])
    } else {
      let closing = arr.pop()
      
      if (str[i] !== obj[closing]) return false
    }
  }

  if (arr.length !== 0) return false

  return true;
}

console.assert(solutionJoe("()")           == true,  `assertionMounirJoe_1  failed!`)
console.assert(solutionJoe("([])")         == true,  `assertionMounirJoe_2  failed!`)
console.assert(solutionJoe("([])(<{}>)")   == true,  `assertionMounirJoe_3  failed!`)
console.assert(solutionJoe("([]{}<[{}]>)") == true,  `assertionMounirJoe_4  failed!`)
console.assert(solutionJoe("")             == true,  `assertionMounirJoe_5  failed!`)
console.assert(solutionJoe("}{")           == false, `assertionMounirJoe_6  failed!`)
console.assert(solutionJoe("([)]")         == false, `assertionMounirJoe_7  failed!`)
console.assert(solutionJoe("([)")          == false, `assertionMounirJoe_8  failed!`)
console.assert(solutionJoe("([")           == false, `assertionMounirJoe_9  failed!`)
console.assert(solutionJoe("[<<<{}>>]")    == false, `assertionMounirJoe_10 failed!`)
console.assert(solutionJoe("Hello")        == false, `assertionMounirJoe_11 failed!`)


/*
************************* PERFORMANCE TESTS *************************
*/

// get big string for test
const BigStr  = require('./bigString')
const bigStr  = new BigStr()
const testArr = bigStr.getText().split(" ")

// test solution
let startTime = new Date().getTime()

for (let i of testArr) solution(i)

let finishTime  = new Date().getTime()
let performance = (finishTime - startTime) / 1000

console.log(`Performance of solution() is ${ performance } sec`)

// test solutionJoe
startTime = new Date().getTime()

for (let i of testArr) solutionJoe(i)

finishTime  = new Date().getTime()
performance = (finishTime - startTime) / 1000

console.log(`Performance of solutionJoe() is ${ performance } sec`)


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution()    is 0.04 sec
Performance of solutionJoe() is 0.02 sec
*/