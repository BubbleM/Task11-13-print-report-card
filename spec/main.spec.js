let main = require('../lib/main');
let expect = require('chai').expect;

describe('测试描述', function () {
  it('1+1', function () {
    expect(main(1, 2)).to.be.equal(3);
  });
});