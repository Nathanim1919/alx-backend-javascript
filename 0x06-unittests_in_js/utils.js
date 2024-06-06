/**
 * Calculate the number of a given type
 * @param {string} type - Type of calculation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Result of the calculation
 
 */

const Utils = {
  calculateNumber: function (type, a, b) {
    if (type === "SUM") {
      return Math.round(a) + Math.round(b);
    } else if (type === "SUBTRACT") {
      return Math.round(a) - Math.round(b);
    } else if (type === "DIVIDE") {
      if (b === 0) {
        return "Error";
      } else {
        return Math.round(a) / Math.round(b);
      }
    }
  },
};

module.exports = Utils;
