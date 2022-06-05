"use strict";
/* CLASS */
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    // public name: string
    // private age: number
    // readonly male: boolean
    // constructor(n: string, a: number, m: boolean) {
    //   this.name = n
    //   this.age = a
    //   this.male = m
    // }
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender Male: ").concat(this.male);
    };
    return Employee;
}());
exports.Employee = Employee;
var lam = new Employee('Lam', 28, true);
// console.log(lam.name);
// // console.log(lam.age);
// console.log(lam.male);
// lam.name = 'nam';
// // lam.male = false;
// // lam.age = 33;
// console.log(lam.print());
var bob = new Employee('bob', 29, false);
var employees = [];
employees.push(lam);
employees.push(bob);
employees.forEach(function (employee) { return console.log(employee.print()); });
