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

class Node {
    constructor(key) {
        this.key   = key
        this.left  = null
        this.right = null
    }
    
    traverse(callback) {
        if (this.left) this.left.traverse(callback)

        callback(this)

        if (this.right) this.right.traverse(callback)
    }
}

class BinarySearchTree {
    constructor(array) {
        this.root = null

        for (let item of array) {
            let placed = false

            if (this.root) {
                let tracker = this.root;

                while (!placed) {
                    if (item <= tracker.key) {
                        if (!tracker.left) {
                            tracker.left = new Node(item)

                            placed = true
                        }

                        tracker = tracker.left
                    } else {
                        if (!tracker.right) {
                            tracker.right = new Node(item)

                            placed = true
                        }

                        tracker = tracker.right
                    }
                }
            } else {
                this.root = new Node(item)
            }
        }
    }
}


let tree   = new BinarySearchTree([2, 1, 3])
let values = []
let sum    = 0

tree.root.traverse(n => console.log(n.key))
tree.root.traverse(n => values.push(n.key))
tree.root.traverse(n => sum += n.key)

console.assert(values.length == 3, `assertion1 failed!`);
console.assert(sum           == 6, `assertion2 failed!`);