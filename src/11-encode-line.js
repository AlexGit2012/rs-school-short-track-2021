/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return str;

  let letter = str[0];
  let count = 0;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== letter) {
      result += (count === 1 ? letter : count + letter);
      count = 1;
      letter = str[i];
    } else count++;
    if (i === str.length - 1) {
      result += (count === 1 ? letter : count + letter);
    }
  }
  return result;
  // throw new Error('Not implemented');
}

module.exports = encodeLine;
