/*
    Difficulty: Easy    

    Write method for binary tree that traverses the tree in order, running a closure on each node.

    Tip: traversing a node in order means visiting its left node, then visiting its own value, then visiting its right value.

    Samples:
    let tree = new BinarySearchTree([2, 1, 3]);
    1) tree.root.traverse(n => console.log(n.key));
       should print out 
       1
       2 
       3
    2) let values = [];
       tree.root.traverse(n => values.push(n.key));
       values.length == 3
    3) let sum = 0;
       tree.root.traverse(n => sum += n.key);
       sum == 6
*/

// 1. create class "Node"
    // 2. add property "key" equal to attribute "key"
    // 3. add preperties "left" and "right" initially equal to "null"

    // 22. create method "traverse" with attribute "callback"
        // 23. if left node exists, call traverse method for it with attribute "callback"

        // 24. call "callback" for current node

        // 25. if right node exists, call traverse method for it with attribute "callback" 


// 4. create class "BinarySearchTree"
        // 5. create property "root" initially equal to "null"

        // 6. loop through attribute "array"
            // 7. create variable "placed" initially equal to "false"

            // 8. if "root" exists
                // 9. create variable "tracker" and set it to be equal to "root"

                // 10. as long as "placed" is "false"
                    // 11. if "item" is less than "tracker" key
                        // 12. if don't already have left node
                            // 13. create new node from "item" and set it to be left node of "tracker"
                    
                            // 14. set "placed" to "true"
                    
                        // 15. we already have a left node; make that the tracker so we can compare against it
                    // 16. else
                        // 17. if don't already have right node
                            // 18. make this item our right node
                    
                            // 19. mark it as placed
                    
                        // 20. we already have a right node; make that the tracker so we can compare against it
                 
            // else
                // 21. else create new node from item and set it to be "root"