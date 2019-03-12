/*
    Difficulty: Tricky    

    Expand your code from challenge 33 so that it has "reversed()" method that returns a copy of itself in reverse.

    Tip: Don't cheat! Don't reverse the alphabet letters before creating linked list!

    Samples:
    1) let listReversed = list.reversed();
       listReversed.printNodes() == "z y x w v u t s r q p o n m l k j i h g f e d c b a"
*/

// solution
    // 0. create "reversed()" method
        // 1. create new Linked List and name it "copy"

        // 2. return "copy" if original Linked List is empty

        // 3. create new Node from value of original start node and name it "previousCopyNode"
        // 4. create variable "currentNode" equal to next node of original start

        // 5. while "currentNode" is not null
            // 6. create new node from value of "currentNode" and name it "copyNode"
            // 7. assign "previousCopyNode" to be next node of "copyNode"
            // 8. set "previousCopyNode" to be equal to "copyNode"
            // 9. set "currentNode" to be equal to next node of "currentNode"

        // 10. we are at the end of the list, so set "previousCopyNode" to be start of "copy"

        // 11. return "copy"