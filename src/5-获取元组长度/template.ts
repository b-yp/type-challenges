// 约束一下传入的 T 必须是一个 tuple 类型
type Length<T extends readonly any[]> = T['length'];