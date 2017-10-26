// export function * gen (i) {
//   i = 5
//   for (let j = 0; j < 5; j++) {
//     i++
//   }
//   return i
// }
//
export function * gen (i) {
  for (let j = 0; j < 5; j++) {
    yield i++
  }
  return i
}

export const genObj = gen(10)

export const range =
  function * (start, end) {
    for (let i = start; i < end; i++) {
      yield i
    }
  }

export const fizzbuzz =
  (start, end) =>
    [...range(start, end)]
    .map(value => `${value}: ${value % 3 ? '' : 'Fizz'}${value % 5 ? '' : 'Buzz'}`)
    .filter(n => n.includes('Fizz') || n.includes('Buzz'))
    .join('\n')

export const secondary =
  function * (i) {
    yield i + 1
    yield i + 2
    yield i + 3
  }

  // { value: 10, done: false }
  // { value: 11, done: false }
  // { value: 12, done: false }
  // { value: 13, done: false }
  // { value: 20, done: false }

export const primary =
  function * (i) {
    yield i
    yield * secondary(i)
    yield i + 10
    return i
  }

export const example =
  function * (genObj) {
    yield genObj.next()
  }

export const nestedGenerator = primary(10) // {}.next()

export const logGen =
  function * () {
    console.log(0)
    console.log(1, yield)
    console.log(2, yield)
    console.log(3, yield)
  }

export const logObj = logGen()
