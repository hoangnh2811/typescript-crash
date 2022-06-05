/* EXPLICIT TYPES */
let myName: string = 'Nam'
let age: number
let isAuthenticated: boolean

myName = 'Hoa'
// myName = 24

// age = 'Ha'
age = 12

// -- ARRAYS --
let students: string[] = ['nam', 'hung']
// students.push(4)
students.push('Lan')

// -- union --
let mixed: (string | number | boolean| object)[]
mixed = ['han', 8, true] 
mixed.push({a: 1})

let id: string | number
id = 123
id = '634'

let hobby: 'book' | 'music'
hobby = 'book'
// hobby = 'cooking'

// -- object --
let person: object
person = {name: 'Lan', age: 40}
person = []

let student: {
  name: string,
  age: number,
  isGood: boolean
}

student = {
  name: 'Nhung',
  age: 30,
  isGood: false
}



