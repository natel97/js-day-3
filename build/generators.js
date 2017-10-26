'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gen = gen;
// export function * gen (i) {
//   i = 5
//   for (let j = 0; j < 5; j++) {
//     i++
//   }
//   return i
// }
//
function* gen(i) {
  for (let j = 0; j < 5; j++) {
    yield i++;
  }
  return i;
}

const genObj = exports.genObj = gen(10);

const range = exports.range = function* (start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
};

const fizzbuzz = exports.fizzbuzz = (start, end) => [...range(start, end)].map(value => `${value}: ${value % 3 ? '' : 'Fizz'}${value % 5 ? '' : 'Buzz'}`).filter(n => n.includes('Fizz') || n.includes('Buzz')).join('\n');