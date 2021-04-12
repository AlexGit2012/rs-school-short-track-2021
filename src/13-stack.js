/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
  }

  push(element) {
    this.arr.push(element);
    // throw new Error('Not implemented');
  }

  pop() {
    return this.arr.pop();
    // throw new Error('Not implemented');
  }

  peek() {
    const tempArr = [...this.arr];
    tempArr.sort((a, b) => b - a);
    return tempArr[0];
    // throw new Error('Not implemented');
  }
}

module.exports = Stack;
