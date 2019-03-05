/*
    Difficulty: Easy    

    Create a linked list of lowercase English alphabet letters, along with a method that traverses all nodes and prints their letters on a single line separated by spaces.

    Tip: 
    1) This is several problems in one. First, create a linked list data structure, which itself is really two things. Second, use your linked list to create the alphabet. Third, write a method traverses all nodes and prints their letters.
    2) You should use a class for this. Yes, really.
    3) Once you complete your solution, keep a copy of the code – you’ll need it for future challenges!

    Samples:
    list.printNodes() == "a b c d e f g h i j k l m n o p q r s t u v w x y z";
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
    
    printNodes() {
        let currentNode = this.start;
        let returnVal   = "";

        while (currentNode != null) {
            returnVal  += ` ${currentNode.value}`;
            currentNode = currentNode.next;
        }

        return returnVal.trim();
    }
}

let list     = new LinkedList();
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

console.assert(list.printNodes() == "a b c d e f g h i j k l m n o p q r s t u v w x y z", `solution1() failed!`);