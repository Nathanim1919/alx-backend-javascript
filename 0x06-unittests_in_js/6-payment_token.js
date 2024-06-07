/**
 * 
 * @param {boolean} success 
 * @returns {Promise}
 * @fulfilled {object} response from the API
 * @rejected {undefined} if success is false
 */

function getPayementTokenFromApi(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  return;
}

module.exports = getPayementTokenFromApi;