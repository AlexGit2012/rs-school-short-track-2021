const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = null;
  }

  get size() {
    let dept = 0;
    let deptNode = this.queue;
    if (deptNode) {
      dept++;
      deptNode = deptNode.next;
    }
    return dept;
    // throw new Error('Not implemented');
  }

  enqueue(element) {
    if (!this.queue) this.queue = new ListNode(element);
    else {
      let currentNode = this.queue;
      while (currentNode) {
        if (currentNode.next) currentNode = currentNode.next;
        else {
          currentNode.next = new ListNode(element);
          break;
        }
      }
    }
  }

  // throw new Error('Not implemented');

  dequeue() {
    let returnedItem;
    if (this.queue) {
      returnedItem = this.queue.value;
      this.queue = (this.queue.next ? this.queue.next : null);
    }
    return returnedItem;
    // throw new Error('Not implemented');
  }
}

module.exports = Queue;
