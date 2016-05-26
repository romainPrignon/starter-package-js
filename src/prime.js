'use strict';

var config = require('config');

function Prime(divisor) {
  this.divisor = divisor || config.get('prime.divisor');
}

Prime.prototype.isPrime = function(n) {
  var currentDivisor = this.divisor;

  while (n > currentDivisor) {
    if (n % currentDivisor === 0) {
      return false;
    } else {
      currentDivisor++;
    }
  }

  return true;
};

Prime.prototype.primeFactors = function(n) {
  var factors = [];
  var currentDivisor = this.divisor;
  var currentN = n;

  while (currentN > 2) {
    if (currentN % currentDivisor === 0) {
      factors.push(currentDivisor);
      currentN = currentN / currentDivisor;
    } else {
      currentDivisor++;
    }
  }

  return factors;
};

module.exports = Prime;
