/**
 * @param {number} a
 * @param {number} b
 * @returns number or 'Error'
 */

function calculateNumber(type, a, b) {
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
  }
  
  module.exports = calculateNumber;
  