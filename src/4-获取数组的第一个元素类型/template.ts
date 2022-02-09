// 判断是否是空数组
// type First<T extends any[]> = T extends [] ? never : T[0]

// 判断长度是否为 0
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 判断第一个值是否存在于数组内
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 判断能不能“解构”出第一个值来
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

// js 实现
function first(array) {
  return array[0] || "never";
}

function first1(array) {
  array.length === 0 ? "never" : array[0];
}
