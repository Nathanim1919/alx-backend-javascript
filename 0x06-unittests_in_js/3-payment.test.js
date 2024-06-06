const expect = require("chai").expect;
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");
const Utils = require("./utils"); // Replace with the actual path to Utils module

describe("sendPaymentRequestToApi", function () {
  it("should use Utils.calculateNumber with correct arguments", function () {
    const mySpy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);

    expect(mySpy.calculateNumber.calledOnceWithExactly("SUM", 100, 20)).to.be
      .true;
    expect(mySpy.calculateNumber.calledOnce).to.be.true;

    mySpy.calculateNumber.restore();
  });
});
