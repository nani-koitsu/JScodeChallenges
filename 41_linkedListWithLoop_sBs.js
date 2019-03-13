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

// solution1
    // 1. create method "findLoopStart"
        // 2. create variable "currNode" equal to the start of linked list
        // 3. create Set "seen" 

        // 4. As long as "currNode" is not equal to "null"
            // 5. return "currNode" if it is already in "seen"
            // 6. otherwise add it to "seen"
            // 7. set "currNode" to be equal to next node of itself

        // 8. we didn't find loop, so return "null"

// solution2
    // 1. create variables "slow" and "fast" equal to "start" of list
    
    // 2. as long as "fast" and next node of "fast" are not equal to "null"
        // 3. set "slow" to be equal to next node of itself
        // 4. set "fast" to be equal to next node of next node of itself

        // 5. break the loop if "slow" is equal to "fast"

        // 6. return "null" if "fast" or it's next node is equal to "null"

        // if we are still here, we know for sure there's loop
        // 7. reset "slow" to be equal to "start" of the list

        // 8. move "fast" and "slow" with the same speed while "slow" will not be equal to "fast"

        // 9. return "fast" or "slow"


/*
************************* PERFORMANCE TESTS *************************
*/

// test solution1

// test solution2


/*
************************* PERFORMANCE RESULTS *************************

*/