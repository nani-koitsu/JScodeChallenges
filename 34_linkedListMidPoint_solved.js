/*
    Difficulty: Easy    

    Extend your linked list class with a new method that returns the node at the mid point of the linked list using no more than one loop.

    Tip: 
    1) If linked list contains an even number of items, returning the one before or one after the center is acceptable.

    Samples:
    1) if linked list contains "1, 2, 3, 4, 5"
    list.centerNode() == 3;
    2) if linked list contains "1, 2, 3, 4"
    list.centerNode() == 3 || list.centerNode() == 2;
    3) if linked list contains English alphabet
    list.centerNode() == m || list.centerNode() == "n";
*/


class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next  = next;
    }
}

class LinkedList {
    constructor() {
        this.start = null;
    }

    centerNode() {
        let slow = this.start;
        let fast = this.start;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}


/*
*************************   TESTS   *************************
*/

// test1
let list = new LinkedList();
let prev = null;

for (let i of [1, 2, 3, 4, 5]) {
    let node = new LinkedListNode(i);

    if (prev) {
        let predecessor = prev;
        predecessor.next = node;
    } else list.start = node;

    prev = node;
}

console.assert(list.centerNode().value == 3, `assetion1 failed!`);

// test2
list = new LinkedList();
prev = null;

for (let i of [1, 2, 3, 4]) {
    let node = new LinkedListNode(i);

    if (prev) {
        let predecessor = prev;
        predecessor.next = node;
    } else list.start = node;

    prev = node;
}

console.assert(list.centerNode().value == 3 || list.centerNode().value == 2, `assetion2 failed!`);

// test3
list = new LinkedList();
prev = null;

for (let i of "abcdefghijklmnopqrstuvwxyz") {
    let node = new LinkedListNode(i);

    if (prev) {
        let predecessor = prev;
        predecessor.next = node;
    } else list.start = node;

    prev = node;
}

console.assert(list.centerNode().value == "m" || list.centerNode().value == "n", `assetion2 failed!`);