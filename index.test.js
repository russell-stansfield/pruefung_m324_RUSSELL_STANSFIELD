const assert = require('assert');
const { calculate } = require('./index');

describe('calculate', () => {
  it('should add two numbers', () => {
    assert.equal(calculate(1, 2, 'add'), 3);
  });

  it('should subtract two numbers', () => {
    assert.equal(calculate(5, 3, 'subtract'), 2);
  });

  it('should throw error on invalid operation', () => {
    assert.equal(() => calculate(1, 2, 'cheese'), "cheese");
  });
});
