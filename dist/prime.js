'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prime = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Prime = exports.Prime = function () {
  function Prime(divisor) {
    _classCallCheck(this, Prime);

    this.divisor = divisor || _config2.default.get('prime.divisor');
  }

  _createClass(Prime, [{
    key: 'isPrime',
    value: function isPrime(n) {
      var currentDivisor = this.divisor;

      while (n > currentDivisor) {
        if (n % currentDivisor === 0) {
          return false;
        } else {
          currentDivisor++;
        }
      }

      return true;
    }
  }, {
    key: 'primeFactors',
    value: function primeFactors(n) {
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
    }
  }]);

  return Prime;
}();