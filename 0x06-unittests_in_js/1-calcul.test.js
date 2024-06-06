const calculateNumber = require("./1-calcul");
const assert = require("assert");

describe("CalculateNumber", () => {
  describe("SUM", () => {
    it("should return 6", () => {
      const result = calculateNumber("SUM", 1.4, 4.5);
      assert.strictEqual(result, 6);
    });
  });

  describe("SUBTRACT", () => {
    it("should return -4", () => {
      const result = calculateNumber("SUBTRACT", 1.4, 4.5);
      assert.strictEqual(result, -4);
    });
  });

  describe("DIVIDE", () => {
    it("should return 0.2", () => {
      const result = calculateNumber("DIVIDE", 1.4, 4.5);
      assert.strictEqual(result, 0.2);
    });

    it("should return Error", () => {
      const result = calculateNumber("DIVIDE", 1.4, 0);
      assert.strictEqual(result, "Error");
    });
  });
});
