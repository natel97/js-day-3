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

const secondary = exports.secondary = function* (i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
};

// { value: 10, done: false }
// { value: 11, done: false }
// { value: 12, done: false }
// { value: 13, done: false }
// { value: 20, done: false }

const primary = exports.primary = function* (i) {
  yield i;
  yield* secondary(i);
  yield i + 10;
  return i;
};

const example = exports.example = function* (genObj) {
  yield genObj.next();
};

const nestedGenerator = exports.nestedGenerator = primary(10); // {}.next()

const logGen = exports.logGen = function* () {
  console.log(0);
  console.log(1, (yield));
  console.log(2, (yield));
  console.log(3, (yield));
};

const logObj = exports.logObj = logGen();