const sinon = require("sinon");
const Utils = require("./utils");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", () => {
  let myConsoles;
  let dummy;

  beforeEach(() => {
    myConsoles = sinon.spy(console, "log");
    dummy = sinon.stub(Utils, "calculateNumber");
  });

  it("should console.log the right message", () => {
    dummy.returns(120);
    sendPaymentRequestToApi(100, 20);

    expect(myConsoles.calledWith("The total is: 120")).to.be.true;
    expect(myConsoles.calledOnce).to.be.true;

    myConsoles.restore();
    dummy.restore();
  });

  it("should console.log the right message", () => {
    dummy.returns(10);
    sendPaymentRequestToApi(10, 10);

    expect(myConsoles.calledWith("The total is: 10")).to.be.true;
    expect(myConsoles.calledOnce).to.be.true;

    myConsoles.restore();
    dummy.restore();
  });

  afterEach(() => {
    myConsoles.restore();
    dummy.restore();
  });
});
