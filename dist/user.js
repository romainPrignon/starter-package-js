'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var users = [{
  name: 'Martin',
  age: 14,
  orders: [{ name: 'ham', price: 2, quantity: 2 }, { name: 'eggs', price: 1, quantity: 6 }, { name: 'bacon', price: 5, quantity: 1 }]
}, {
  name: 'Elizabeth',
  age: 36,
  hair: 'black',
  orders: [{ name: 'ham', price: 2, quantity: 2 }, { name: 'bread', price: 1, quantity: 3 }, { name: 'apples', price: 2, quantity: 3 }]
}];

var sortUserByAge = exports.sortUserByAge = function sortUserByAge() {
  return users;
};

// async stuff

// add / transform props (spread)