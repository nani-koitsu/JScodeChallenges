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