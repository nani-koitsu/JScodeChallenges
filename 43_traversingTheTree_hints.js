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

    Hints:
    1) your method should accept closure as an attribute
    2) you need recursively call your method for left and right nodes
*/