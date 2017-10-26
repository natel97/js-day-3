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
import { range, genObj } from './generators'
console.log(genObj.next()) // 10
console.log(genObj.next()) // 11
console.log(genObj.next()) // 12
console.log(genObj.next()) // 13
console.log(genObj.next()) // 14
console.log(genObj.next()) // undefined
console.log([...range(1, 100)])
