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


// 1. create class "LinkedListNode"
    // 2. write constructor accepting 2 parameters "value" and "next" initially equal to "null"
        // 3. create properties "value" equal to "value" and "next" equal to "next"

// 4. create class "LinkedListNode"
    // 5. create property "start" equal to "null"
    
    // 6. write method "printNodes"
        // 7. create variable "currentNode" equal to "start"
        // 8. create variable "returnVal" equal to empty string

        // 9. as long as "currentNode" is not null
            // 10. add value of "currentNode" to returnVal
            // 11. assign next node of "currentNode" to "currentNode"

        // 12. return trimmed "returnVal"

// 13. assign instance of class "LinkedList" to variable "list"
// 14. create variable "prevNode" equal to "null"


// 15. loop through alphabet 
    // 16. assign instance of class "LinkedListNode" to variable "node"

    // 17. if "prevNode" is not null
        // 18. create variable "predecessor" equal to "prevNode"
        // 19. assign "node" to be next node of "predecessor"
    // 20. if "prevNode" is null
        // 21. assign "node" to be start of "list"

    // 22. assign "node" to "prevNode"