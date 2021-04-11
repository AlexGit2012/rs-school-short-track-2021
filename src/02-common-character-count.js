/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  const result = [];
  for (let i = 0; i < s1Arr.length; i++) {
    for (let y = 0; y < s2Arr.length; y++) {
      if (s1Arr[i] === s2Arr[y]) {
        result.push(s2Arr);
        s2Arr.splice(y, 1);
        break;
      }
    }
  }
  return result.length;
  // throw new Error('Not implemented');
}

module.exports = getCommonCharacterCount;
