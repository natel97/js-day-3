'use strict';

var _generators = require('./generators');

console.log(_generators.genObj.next()); // 10
// Destructuring output
// import {
//   name,
//   price,
//   appleName,
//   applePrice,
//   shouldIBuyIt,
//   apples,
//   obj1,
//   obj2,
//   arr1,
//   arr2
// } from './destructuring'
// console.log(name, price)
// console.log(appleName, applePrice)
// console.log(shouldIBuyIt(apples))
// console.log(shouldIBuyIt({ name: 'banana', price: 2 }))
// console.log(obj1, obj2)
// console.log(arr1, arr2)
// console.log(...[...arr1, ...arr2])
// console.log(obj1, obj2)
// console.log({...obj1, ...obj2})

// Generators Section
console.log(_generators.genObj.next()); // 11
console.log(_generators.genObj.next()); // 12
console.log(_generators.genObj.next()); // 13
console.log(_generators.genObj.next()); // 14
console.log(_generators.genObj.next()); // undefined
console.log([...(0, _generators.range)(1, 100)]);