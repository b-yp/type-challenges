type MyPick<T, K extends keyof T> = {
  [P in K]: T[P] 
}

// 使用 js 实现
function MyPick(todo, keys) {
  let obj = {};
  keys.forEach((item) => {
    if (item in todo) {
      obj[item] = todo[item];
    }
  });
  return obj;
}
