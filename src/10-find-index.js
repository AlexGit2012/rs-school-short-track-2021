/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let tempLength = Math.floor(array.length / 2);
  let index;
  while (index === undefined) {
    if (tempLength > (array.length - 1)) tempLength = (array.length - 1);
    if (tempLength < 0) tempLength = 0;
    if (value < array[tempLength]) {
      tempLength -= Math.ceil(tempLength / 2);
    }
    if (value > array[tempLength]) {
      tempLength += Math.ceil(tempLength / 2);
    }
    if (value === array[tempLength]) index = tempLength;
  }
  return index;
  // throw new Error('Not implemented');
}

module.exports = findIndex;
