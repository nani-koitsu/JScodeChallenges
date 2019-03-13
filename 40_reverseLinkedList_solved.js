/*
    Difficulty: Tricky    

    Expand your code from challenge 33 so that it has "reversed()" method that returns a copy of itself in reverse.

    Tip: Don't cheat! Don't reverse the alphabet letters before creating linked list!

    Samples:
    1) let listReversed = list.reversed();
       listReversed.printNodes() == "z y x w v u t s r q p o n m l k j i h g f e d c b a"
*/

class LinkedList {
    constructor() {
        this.start = null;
    }

    printNodes() {
        let returnVal = "";
        let currentNode = this.start;

        while (currentNode) {
            returnVal += ` ${currentNode.value}`;
            currentNode = currentNode.next;
        }
        
        return returnVal.trim();
    }
    
    // solution
    reversed() {
        let copy = new LinkedList();
        
        if (!this.start) return copy;

        let previousCopyNode = new LinkedListNode(this.start.value);
        let currentNode      = this.start.next;

        while (currentNode) {
            let copyNode     = new LinkedListNode(currentNode.value);
            copyNode.next    = previousCopyNode;
            previousCopyNode = copyNode;
            currentNode      = currentNode.next;
        }

        copy.start = previousCopyNode;
    
        return copy;
    }
}

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next  = next;
    }
}

let list = new LinkedList();
let prevNode = null;

for (let i of "abcdefghijklmnopqrstuvwxyz") {
    let node = new LinkedListNode(i);

    if (prevNode) {
        let predecessor  = prevNode;
        predecessor.next = node;
    } else {
        list.start = node;
    }

    prevNode = node;
}

let listReversed = list.reversed();

console.assert(listReversed.printNodes() == "z y x w v u t s r q p o n m l k j i h g f e d c b a", `assertion failed!`);