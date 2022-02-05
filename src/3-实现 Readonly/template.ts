type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// js 实现
function MyReadonly (obj) {
  let result = {}

  for(let key in obj) {
    result[`readonly ${key}`] = obj[key]
  }
}