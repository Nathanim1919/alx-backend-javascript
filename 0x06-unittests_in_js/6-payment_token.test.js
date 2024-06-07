const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return the right token if success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch(done); // Simplified error handling
  });

  it('should return undefined if success is false', () => {
    const res = getPaymentTokenFromAPI(false);
    expect(res).to.be.undefined; // More precise assertion
  });
});
