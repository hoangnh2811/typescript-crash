/* FUNCTION SIGNATURE */
// let greet: Function

// greet = () => console.log('hello');

// let greet2: (a: string, b: string) => void

// greet2 = (name: string, greeting: string) => 
//   console.log(`${name} says ${greeting}`);

// greet2('Lam', 'hi')

let calculate: (a: number, b: number, c: string) => number
calculate = (numOne: number, numTwo: number, action: string) => 
  action === 'add' ? numOne + numTwo : numOne - numTwo

console.log(calculate(4,2,'add'));
console.log(calculate(4,2,'minus'));

type Student = {name: string, age: number}
let printStudent: (student: Student) => void
printStudent = ({name, age}: Student) => {
  console.log(`${name} is ${age} year old`);
}

printStudent({name: 'Qua', age: 43})

const nam = {
  name: 'Nam',
  age: 30
}
printStudent(nam)