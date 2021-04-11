/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = [...matrix];
  const width = arr[0].length;
  const height = arr.length;
  let sum = 0;

  for (let i = 0; i < width; i++) {
    for (let y = 0; y < height; y++) {
      if (arr[y][i] !== 0) sum += arr[y][i];
      else break;
    }
  }

  return sum;

  // throw new Error('Not implemented');
}

module.exports = getMatrixElementsSum;
