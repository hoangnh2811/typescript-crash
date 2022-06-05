/* CLASS */

export class Employee {
  // public name: string
  // private age: number
  // readonly male: boolean

  // constructor(n: string, a: number, m: boolean) {
  //   this.name = n
  //   this.age = a
  //   this.male = m
  // }

  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ){}

  print() {
    return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`
  }
}

const lam = new Employee('Lam', 28, true)
// console.log(lam.name);
// // console.log(lam.age);
// console.log(lam.male);

// lam.name = 'nam';
// // lam.male = false;
// // lam.age = 33;
// console.log(lam.print());
const bob = new Employee('bob', 29, false)

let employees: Employee[] = []
employees.push(lam)
employees.push(bob)

employees.forEach(employee => console.log(employee.print()))