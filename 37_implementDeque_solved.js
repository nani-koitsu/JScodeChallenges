/*
    Difficulty: Tricky    

    Create a new data type that models a double-ended queue, or deque. You should be able to push items to the front or back, pop them from the front or back, and get the number of items.

    Samples:
    *Your code*
    let numbers = new Deque();
    numbers.pushBack(5);
    numbers.pushBack(8);
    numbers.pushFront(7);
    numbers.pushBack(3);
    numbers.count      == 4
    numbers.popFront() == 7
    numbers.popBack()  == 3
    numbers.popFront() == 5
    numbers.popFront() == 8
    numbers.popBack    == null
*/

// solution
class Deque {
    constructor() {
        this.body = [];
    }

    get count() {
        return this.length();
    }

    length() {
        return this.body.length;
    }

    pushBack(n) {
        this.body.push(n);
    }

    pushFront(n) {
        this.body.unshift(n);
    }

    popFront() {
        if (this.length() == 0) return null;

        return this.body.shift();
    }

    popBack() {
        if (this.length() == 0) return null;
    
        return this.body.pop();
    }
}

let numbers = new Deque();
numbers.pushBack(5);
numbers.pushBack(8);
numbers.pushFront(7);
numbers.pushBack(3);

console.assert(numbers.count      == 4,    `assertion1 failed!`);
console.assert(numbers.popFront() == 7,    `assertion2 failed!`);
console.assert(numbers.popBack()  == 3,    `assertion3 failed!`);
console.assert(numbers.popFront() == 5,    `assertion4 failed!`);
console.assert(numbers.popFront() == 8,    `assertion5 failed!`);
console.assert(numbers.popBack()  == null, `assertion6 failed!`);