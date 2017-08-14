'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserFixtures = exports.groupUsersByAgeCategory2 = exports.groupUsersByAgeCategory = exports.addUsersAgeCategory = exports.getUserOrderTotalPrice = exports.sortUserByAge = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //  weak

var longComputation = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(a, b) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', a + b);

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function longComputation(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var sortUserByAge = exports.sortUserByAge = function sortUserByAge(users) {
  return (0, _lodash2.default)(users).sortBy(function (user) {
    return user.age;
  }).value();
};

var getUserOrderTotalPrice = exports.getUserOrderTotalPrice = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(user) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', (0, _lodash2.default)(user.orders).reduce(function () {
              var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(acc, u) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return longComputation(acc, u.price);

                      case 2:
                        return _context2.abrupt('return', _context2.sent);

                      case 3:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, undefined);
              }));

              return function (_x4, _x5) {
                return _ref3.apply(this, arguments);
              };
            }(), 0));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getUserOrderTotalPrice(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var addUsersAgeCategory = exports.addUsersAgeCategory = function addUsersAgeCategory(users) {
  return (0, _lodash2.default)(users).map(function (user) {
    var category = user.age < 50 ? 'young' : 'old';

    return _extends({}, user, {
      category: category
    });
  }).value();
};

var groupUsersByAgeCategory = exports.groupUsersByAgeCategory = function groupUsersByAgeCategory(users) {
  return (0, _lodash2.default)(users).reduce(function (acc, user) {
    return user.category === 'young' ? _extends({}, acc, {
      young: acc.young.concat(user)
    }) : _extends({}, acc, {
      old: acc.old.concat(user)
    });
  }, { young: [], old: [] });
};

var groupUsersByAgeCategory2 = exports.groupUsersByAgeCategory2 = function groupUsersByAgeCategory2(users) {
  return users.reduce(function (acc, user) {
    return user.category === 'young' ? _extends({}, acc, {
      young: acc.young.concat(user)
    }) : _extends({}, acc, {
      old: acc.old.concat(user)
    });
  }, { young: [], old: [] });
};

var getUserFixtures = exports.getUserFixtures = function () {
  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', [{
              name: 'Elizabeth',
              age: 56,
              hair: 'black',
              orders: [{ name: 'ham', price: 2, quantity: 2 }, { name: 'bread', price: 1, quantity: 3 }, { name: 'apples', price: 2, quantity: 3 }]
            }, {
              name: 'Martin',
              age: 14,
              orders: [{ name: 'ham', price: 2, quantity: 2 }, { name: 'eggs', price: 1, quantity: 6 }, { name: 'bacon', price: 5, quantity: 1 }]
            }]);

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function getUserFixtures() {
    return _ref4.apply(this, arguments);
  };
}();

// todo: handle error