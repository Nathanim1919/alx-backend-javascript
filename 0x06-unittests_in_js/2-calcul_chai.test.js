// use expect from chai
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
    it('should return 4', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should return 5', () => {
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('should return 5', () => {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('should return 6', () => {
        expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
    it('should return 5', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return -4', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should return 0.2', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return Error', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
