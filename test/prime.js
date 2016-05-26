var assert = require('chai').assert;
//var sinon = require('sinon');

var Prime = require('../src/prime');

var prime = new Prime();

describe('Prime', function(){

  it('divisor should be 2', function(){
    assert.equal(prime.divisor, 2);
  });

  describe('isPrime', function(){
    it('should be a function', function(){
      assert.isFunction(prime.isPrime);
    });
    it('of 4 should return false', function(){
      assert.isFalse(prime.isPrime(4));
    });
    it('of 5 should return true', function(){
      assert.isTrue(prime.isPrime(5));
    });
  });

  describe('primeFactors', function(){
    it('should be a function', function(){
      assert.isFunction(prime.primeFactors);
    });
    it('of 2 should return []', function(){
      var results = prime.primeFactors(2);

      assert.isArray(results);
      assert.lengthOf(results, 0);
    });
    it('of 3 should return [3]', function(){
      var results = prime.primeFactors(3);

      assert.isArray(results);
      assert.lengthOf(results, 1);
      assert.equal(results[0], 3);
    });
  });

});