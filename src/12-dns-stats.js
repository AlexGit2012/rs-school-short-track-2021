/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};

  let arr = [];
  const obj = {};
  arr = domains.map((el) => el.split('.').reverse());
  arr.sort((a, b) => a.length - b.length);
  obj[`.${arr[0][0]}`] = 0;
  arr.forEach((el) => {
    const tempName = `.${el.join('.')}`;
    obj[tempName] = 0;
  });
  Object.keys(obj).forEach((el) => {
    arr.forEach((innerEl) => {
      if ((`.${innerEl.join('.')}`).indexOf(el) !== -1) obj[el]++;
    });
  });
  // throw new Error('Not implemented');
  return obj;
}

module.exports = getDNSStats;
