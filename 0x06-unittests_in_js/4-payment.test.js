const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls Utils.calculateNumber with the right arguments', () => {
    const dummy = sinon.stub(Utils, 'calculateNumber');
    dummy.returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummy.callCount).to.be.equal(1);

    dummy.restore();
  });

  it('should console.log the right message', () => {
    const myConsoles = sinon.spy(console, 'log');
    const dummy = sinon.stub(Utils, 'calculateNumber');
    dummy.returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(myConsoles.calledWith('The total is: 10')).to.be.true;

    myConsoles.restore();
    dummy.restore();
  });
});