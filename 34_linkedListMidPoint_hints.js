/*
    Difficulty: Easy    

    Extend your linked list class with a new method that returns the node at the mid point of the linked list using no more than one loop.

    Tip: 
    1) If linked list contains an even number of items, returning the one before or one after the center is acceptable.

    Samples:
    1) if linked list contains "1, 2, 3, 4, 5"
    list.centerNode() == 3;
    2) if linked list contains "1, 2, 3, 4"
    list.centerNode() == 3 || list.centerNode() == 2;
    3) if linked list contains English alphabet
    list.centerNode() == m || list.centerNode() == "n";

    Hints:
    1) Can you think of a way of moving over more than one item?
    2) Once you pull out two items at the same time, you can make them move at different speeds through the list. 
    3) If you move pointer "A" through the list one item at a time, and pointer "B" through the list two items at a time, by the time pointer "B" reaches the end where will pointer "A" be?
*/
