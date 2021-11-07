import multiply, { add, MyString, MyObject } from 'my-lib'

const mulRes = multiply(1, 2)

const res = add(1, 2)

const a: MyString = 'abc'
const b: MyObject = {
  x: 1,
  y: '1',
  z: Symbol(1)
}
