/*
    Difficulty: Tricky    

    Create a new data type that models a double-ended queue, or deque. You should be able to push items to the front or back, pop them from the front or back, and get the number of items.

    Samples:
    *Your code*
    let numbers = new Deque();
    numbers.pushBack(5);
    numbers.pushBack(8);
    numbers.pushFront(7);
    numbers.pushBack(3);
    numbers.count    == 4
    numbers.popFront == 7
    numbers.popBack  == 3
    numbers.popFront == 7
    numbers.popFront == 8
    numbers.popBack  == null
*/

// solution
// 1. create class "Deque"
    // 2. create property "body" equal to empty array

    // 3. create getter "count" which returns method "length"

    // 4. create method "length" which returns length of "body"

    // 5. create method "pushBack" which adds element to the end of "body"

    // 6. create method "pushFront" which adds element to the begging of "body"

    // 7. create method "popFront"
        // 8. return "null" if body is empty
        // 9. delete first elemnt of "body" and return it

    // 10. create method "popBack"
        // 11. return "null" if body is empty
        // 12. delete last elemnt of "body" and return it