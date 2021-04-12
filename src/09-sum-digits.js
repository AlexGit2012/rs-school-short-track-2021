/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = n;
  let arr = [];
  while (number > 9) {
    arr = number.toString().split('');
    let tempNumber = 0;
    arr.forEach((el) => {
      tempNumber += parseInt(el, 10);
    });
    number = tempNumber;
  }
  return number;
  // throw new Error('Not implemented');
}

module.exports = getSumOfDigits;
