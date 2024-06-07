const expect = require("chai").expect;
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  it("should use Utils.calculateNumber with correct arguments", function () {
    const mySpy = sinon.spy(Utils, "calculateNumber");

    sendPaymentRequestToApi(100, 20);

    expect(mySpy.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    expect(mySpy.calledOnce).to.be.true;

    mySpy.restore();
  });
});
