'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const listing = exports.listing = (name, price) => ({
  name,
  price
});

const apples = exports.apples = listing('apples', 10);

// const name = apples.name
// const price = apples.price
// Equivalent to
// const { name, price } = apples

const { name = 'water', price = 5 } = { n: 10, d: 20
  // 10 20

};exports.name = name;
exports.price = price;
const { name: appleName, price: applePrice } = apples;

// write a function called shouldIBuyIt that takes an object { name, price } return
// true if the name of the object is apples and false otherwise
exports.appleName = appleName;
exports.applePrice = applePrice;
const shouldIBuyIt = exports.shouldIBuyIt = ({ name, price }) => name === 'apples';

const { obj1, obj2 } = {
  obj1: {
    x: 1,
    y: 2
  },
  obj2: {
    a: 'b',
    c: 'd',
    y: 'z'
  }
};

exports.obj1 = obj1;
exports.obj2 = obj2;
const [arr1, arr2] = [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd']];
exports.arr1 = arr1;
exports.arr2 = arr2;