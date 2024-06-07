const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/1 returns correct response', (done) => {
    request.get(`${API_URL}/cart/1`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 1');
      done();
    });
  });

  it('GET /cart/not_a_number returns correct response', (done) => {
    request.get(`${API_URL}/cart/not_a_number`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      expect(body).to.be.equal('Cart not found');
      done();
    });
  });

  it('GET /available_payments returns correct response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });

  it('POST /login returns valid response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'Pinkbrook'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });
});
