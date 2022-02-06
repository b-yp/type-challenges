// 这里对传入的类型做一个约束，使其只能接收 string、number、symbol 类型的数组
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  // TS 里面遍历一个数组
  [P in T[number]]: P
}


// js 实现
function tupleToObject (array) {
  const obj = {}
  array.forEach(item => {
    obj[item] = item
  })
  return obj
}