/* OPTIONAL AND NOW NULL */

// dấu ? là optional có thể truyền vào hoặc ko
const add = (a: number, b?: number) => (b ? a + b : a)

console.log(add(1,2))
console.log(add(4))

// thêm dấu ! cố tình truyền giá trị khi ko có b
const addNonNull = (a: number, b?: number) => a + b!
console.log(addNonNull(3,4));
console.log(addNonNull(3));
