/*
    Difficulty: Tricky    

    Someone used the Linked List you made previously, but they accidentally made one of the items link back to an earlier part of the list. As a result, the list can’t be traversed properly because it loops infinitely.

    Your job is to write a method that returns the node at the start of the loop, i.e. the one that is linked back to.

    Samples:
    You can simulate a looped list with this code.
    let list = new LinkedList();
    let previousNode = null;
    let linkBackNode = null;
    let linkBackPoint = Math.round(Math.random() * 1000);

    for (let i = 1; i < 1000; i ++) {
        let node = new LinkedListNode(i);

        if (i == linkBackPoint) {
            linkBackNode = node
        }

        if (previousNode) {
            let predecessor = previousNode;
            predecessor.next = node;
        } else {
            list.start = node;
        }

        previousNode = node;
    }

    previousNode.next = linkBackNode;

    list.findLoopStart() == linkBackNode
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

    solution1() {
        let currNode = this.start;
        let seen     = new Set();

        while (currNode) {
            if(seen.has(currNode)) return currNode
            else seen.add(currNode)
        
            currNode = currNode.next;
        }

        return null
    }
                
    solution2() {
        let slow = this.start;
        let fast = this.start;
        
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
    
            if (slow == fast) break;
        }
    
        if (!fast || !fast.next) return null;
    
        slow = this.start;

        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }
}

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

let list = new LinkedList();
let previousNode  = null;
let linkBackNode  = null;
let linkBackPoint = Math.round(Math.random() * 1*1000*1000);

for (let i = 1; i < 1*1000*1000; i++) {
    let node = new LinkedListNode(i);
    
    if (i == linkBackPoint) linkBackNode = node;

    if (previousNode) {
        let predecessor  = previousNode;
        predecessor.next = node;
    } else {
        list.start = node;
    }

    previousNode = node;
}

previousNode.next = linkBackNode;


console.assert(list.solution1() == linkBackNode, `solution1 failed!`);
console.assert(list.solution2() == linkBackNode, `solution2 failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// test solution1
let startTime = new Date().getTime();

list.solution1();

let finishTime  = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is ${ performance } sec`);

// test solution2
startTime = new Date().getTime();

list.solution2();

finishTime  = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is ${ performance } sec`);

/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.136 sec
Performance of solution2() is 0.012 sec
*/