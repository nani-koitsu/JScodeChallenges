/*
    Difficulty: Taxing    

    Create a binary search tree data structure that can be initialized from an unordered array of comparable values, then write a method that returns whether the tree is balanced.

    Tip: There is more than one description of a balanced binary tree. For the purpose of this challenge, a binary tree is considered balanced when the height of both subtrees for every node differs by no more than 1.

    Tip: https://en.wikipedia.org/wiki/Binary_search_tree

    Samples:
    1) The following values should create balanced trees:
        [2, 1, 3]
        [5, 1, 7, 6, 2, 1, 9]
        [5, 1, 7, 6, 2, 1, 9, 1]
        [5, 1, 7, 6, 2, 1, 9, 1, 3]
        [50, 25, 100, 26, 101, 24, 99]
        ["k", "t", "d", "a", "z", "m", "f"]
        [1]
        []
    2) The following values should not create balanced trees:
        [1, 2, 3, 4, 5]
        [10, 5, 4, 3, 2, 1, 11, 12, 13, 14, 15]
        ["f", "d", "c", "e", "a", "b"]
*/

// 1. create class "Node"
    // 2. add property "key" equal to attribute "key"
    // 3. add preperties "left" and "right" initially equal to "null"
    
// 4. create class "BinarySearchTree"
        // 5. create property "root" initially equal to "null"

        // 6. loop through attribute "array"
            // 7. create variable "placed" initially equal to "false"
            // this will be set to true when we've place a node from this item

            // 8. if "root" exists
                // 9. create variable "tracker" and set it to be equal to "root"
                // we have a root node, so make it our tracker

                // 10. as long as "placed" is "false"
                    // 11. if "item" is less than "tracker" key
                    // if we're placing an item that comes before our tracker
                        // 12. if don't already have left node
                            // 13. create new node from "item" and set it to be left node of "tracker"
                            // make our item left node
                    
                            // 14. set "placed" to "true"
                            // mark it as placed
                    
                        // 15. we already have a left node; make that the tracker so we can compare against it
                    // 16. else
                        // this item is greater than our tracker, so it needs to sit on its right

                        // 17. if don't already have right node
                            // 18. make this item our right node
                    
                            // 19. mark it as placed
                    
                        // 20. we already have a right node; make that the tracker so we can compare against it
                 
            // else
                // 21. else create new node from item and set it to be "root"
           
    // 22. create method "isBalanced"
        // 23. create function "minDepth" with attribute "node"
            // 24. return "0" if node does not exist
         
            // 25. get minDepth for left and right nodes of "node" and select minimum of two results; add 1 to minimum and assign it to variable "returnVal"
   
            // 26. return "returnVal"
        
        // 27. create function "maxDepth" with attribute "node"
            // 28. return "0" if node does not exist

            // 29. get maxDepth for left and right nodes of "node" and select maximum of two results; add 1 to maximum and assign it to variable "returnVal"
            
            // 30. return "returnVal"

        // 31. return "null" if "root" doesn't exist

        // 32. create variable "difference" equal to difference of "maxDepth" and "minDepth" of "root"

        // 33. return if "difference" is less or equal to 1