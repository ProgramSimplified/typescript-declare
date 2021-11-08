import multiply, { add, MyString, MyObject, ExtendObject } from 'my-lib'

const mulRes = multiply(1, 2)

const res = add(1, 2)

const a: MyString = 'abc'
const b: MyObject = {
  x: 1,
  y: '1'
}

const extendObj: ExtendObject = {
  m: null,
  n: undefined
}

console.log(`恭喜你㊗️, 完成运行! 结果为: ${res}`)
