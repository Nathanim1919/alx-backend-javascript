/**
 * @Mocha test that defines a test suite
 * @describe: a test suite defines a block of tests
 * @it: a test case
 * @assert: a test assertion
 * @require: the module to be tested
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('add', function() {
    it('should return 5', function() {
        assert.strictEqual( calculateNumber(1, 3.7), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});