/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  const arrLenght = arr.length;
  const tempArr = [];
  for (let i = 0; i < arrLenght; i++) {
    arr = n.toString().split('');
    arr.splice(i, 1);
    tempArr.push(parseInt(arr.join(''), 10));
  }
  tempArr.sort((a, b) => b - a);
  return tempArr[0];
  // throw new Error('Not implemented');
}

module.exports = deleteDigit;
