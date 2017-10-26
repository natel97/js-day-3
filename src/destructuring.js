export const listing =
  (name, price) => ({
    name,
    price
  })

export const apples =
  listing('apples', 10)

// const name = apples.name
// const price = apples.price
// Equivalent to
// const { name, price } = apples

export const { name = 'water', price = 5 } = { n: 10, d: 20 }
// 10 20

export const { name: appleName, price: applePrice } = apples

// write a function called shouldIBuyIt that takes an object { name, price } return
// true if the name of the object is apples and false otherwise
export const shouldIBuyIt =
  ({ name, price }) =>
    name === 'apples'

export const { obj1, obj2 } = {
  obj1: {
    x: 1,
    y: 2
  },
  obj2: {
    a: 'b',
    c: 'd',
    y: 'z'
  }
}

export const [ arr1, arr2 ] = [
  [1, 2, 3, 4, 5],
  ['a', 'b', 'c', 'd']
]
