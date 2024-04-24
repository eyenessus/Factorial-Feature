var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('return if output 5 equal 120',()=>{
      //setup
      const numberReceive = 5;
      const expected = 120
      //execise
      const result = Calculate.factorial(numberReceive);
      
      //verify
      assert.equal(result,expected)
    })
    it('return 1 when you pass in 0',()=>{
 //setup
      const numberReceive = 0;
      const expected = 1
      //execise
      const result = Calculate.factorial(numberReceive);
      
      //verify
      assert.equal(result,expected)
    })
  });
});