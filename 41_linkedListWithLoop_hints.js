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

    
    Hints:
    1) loop through list and track each node
    2) if some node will repeat it means you found node causing loop
    3) use "fast" and "slow" pointers
    4) if "fast" and "slow" meets, it means there is a loop
    5) after your pointers met reset one to start and move them with the same speed
*/

// solution1

// solution2

/*
************************* PERFORMANCE TESTS *************************
*/

// test solution1

// test solution2


/*
************************* PERFORMANCE RESULTS *************************

*/