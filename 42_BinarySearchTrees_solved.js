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

class Node {
    constructor(key) {
        this.key   = key;
        this.left  = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(array) {
        this.root = null;

        for (let item of array) {
            let placed = false;

            if (this.root) {
                let tracker = this.root;

                while(!placed) {
                    if (item <= tracker.key) {
                        if (!tracker.left) {
                            tracker.left = new Node(item);

                            placed = true;
                        }

                        tracker = tracker.left;
                    } else {
                        if (!tracker.right) {
                            tracker.right = new Node(item);

                            placed = true;
                        }

                        tracker = tracker.right;
                    }
                }
            } else {
                this.root = new Node(item);
            }
        }
    }

    isBalanced() {
            function minDepth(node) {
                if(!node) return 0;

                let returnVal = 1 + Math.min(...new Array(minDepth(node.left), minDepth(node.right)));

                console.log(`Got min depth ${returnVal} for node ${node.key}`);
                
                return returnVal;
            }
            
            function maxDepth(node) {
                if(!node) return 0;
    
                let returnVal = 1 + Math.max(...new Array(maxDepth(node.left), maxDepth(node.right)));

                console.log(`Got max depth ${returnVal} for node ${node.key}`);
                
                return returnVal;
            }
    
            if (!this.root) return true;
    
            let difference = maxDepth(this.root) - minDepth(this.root);

            return difference <= 1;
    }

    description() {
        if (!this.root) return "(Empty)";

        let output = "";
        let queue  = [];
        queue.push(this.root);

        while(queue.length > 0) {
            let nodesAtCurrentLevel = queue.length;

            while(nodesAtCurrentLevel > 0) {
                let node = queue.shift();
                output += `(${node.key}) `;

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);

                nodesAtCurrentLevel -= 1;
            }

            output += `\n`;
        }
        
        return output;
    }
}


console.assert(new BinarySearchTree([2, 1, 3]).isBalanced()                           == true, `assertion1 failed`);
console.assert(new BinarySearchTree([5, 1, 7, 6, 2, 1, 9]).isBalanced()               == true, `assertion2 failed`);
console.assert(new BinarySearchTree([5, 1, 7, 6, 2, 1, 9, 1]).isBalanced()            == true, `assertion3 failed`);
console.assert(new BinarySearchTree([5, 1, 7, 6, 2, 1, 9, 1, 3]).isBalanced()         == true, `assertion4 failed`);
console.assert(new BinarySearchTree([50, 25, 100, 26, 101, 24, 99]).isBalanced()      == true, `assertion5 failed`);
console.assert(new BinarySearchTree(["k", "t", "d", "a", "z", "m", "f"]).isBalanced() == true, `assertion6 failed`);
console.assert(new BinarySearchTree([1]).isBalanced() == true, `assertion7 failed`);
console.assert(new BinarySearchTree([]).isBalanced()  == true, `assertion8 failed`);

console.assert(new BinarySearchTree([1, 2, 3, 4, 5]).isBalanced()                         == false, `assertion9  failed`);
console.assert(new BinarySearchTree([10, 5, 4, 3, 2, 1, 11, 12, 13, 14, 15]).isBalanced() == false, `assertion10 failed`);
console.assert(new BinarySearchTree(["f", "d", "c", "e", "a", "b"]).isBalanced()          == false, `assertion11 failed`);