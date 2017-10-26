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
