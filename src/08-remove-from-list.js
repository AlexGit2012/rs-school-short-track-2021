const ListNode = require('../extensions/list-node');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  if (Object.entries(l).length === 0) return l;

  let result;
  let resNode;
  let currentNode = l;
  while (!result) {
    if (currentNode.value === k) currentNode = currentNode.next;
    else {
      result = new ListNode(currentNode.value);
      resNode = result;
      currentNode = currentNode.next;
    }
    if (!currentNode) break;
  }

  while (currentNode) {
    if (currentNode.value === k) {
      currentNode = currentNode.next;
    } else {
      resNode.next = currentNode;
      resNode = resNode.next;
      currentNode = currentNode.next;
    }
  }

  return result;
  // throw new Error('Not implemented');
}

module.exports = removeKFromList;
