/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const width = matrix[0].length;
  const height = matrix.length;
  const result = [];
  let tempSum;
  for (let i = 0; i < height; i++) {
    result.push([]);
    for (let y = 0; y < width; y++) {
      tempSum = 0;
      if (y !== 0) tempSum += matrix[i][y - 1] ? 1 : 0;
      if (y !== (width - 1)) tempSum += matrix[i][y + 1] ? 1 : 0;
      if (i !== 0) tempSum += matrix[i - 1][y] ? 1 : 0;
      if (i !== (height - 1)) tempSum += matrix[i + 1][y] ? 1 : 0;

      if ((y !== 0) && (i !== 0)) tempSum += matrix[i - 1][y - 1] ? 1 : 0;
      if ((y !== 0) && (i !== (height - 1))) tempSum += matrix[i + 1][y - 1] ? 1 : 0;
      if ((i !== 0) && (y !== (width - 1))) tempSum += matrix[i - 1][y + 1] ? 1 : 0;
      if ((y !== (width - 1)) && (i !== (height - 1))) tempSum += matrix[i + 1][y + 1] ? 1 : 0;
      result[i].push(tempSum);
    }
  }
  return result;
  // throw new Error('Not implemented');
}

module.exports = minesweeper;
