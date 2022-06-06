/* GENERICS */

type myArr = Array<string>;
type myNumber = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3, 4]);
// console.log(l1);
// const l2 = last(['a', 'b'])

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]);
const l4 = lastT(["a", "b"]);
const l5 = lastT<string>(["d", "e"]);

const makeArr = (x: number) => [x];

const m = makeArr(5);
// console.log(m)
// const m2 = makeArr('a')

const makeArrT = <T>(x: T) => [x];
const m3 = makeArrT(true);

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m4 = makeArrXY(5, "hello");
const m5 = makeArrXY(1, 2);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];

const m6 = makeTuple(4, "a");
const m7 = makeTuple<string, boolean>("123", true);
const m8 = makeTuple<string | null, number>(null, 1);

const makeTupleWithDefault = <X, Y = string>(x: X, y: Y): [X, Y] => [x, y];
const m9 = makeTupleWithDefault<number, string>(1, "123");

// GENERICS EXTENDS

// const makeFullName = (obj) => ({
//   ...obj,
//   fullName: `${obj.firstName} ${obj.lastName}`,
// });

const makeFullNameConstraint = (obj: {
  firstName: string;
  lastName: string;
}) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n1 = makeFullNameConstraint({ firstName: "Nguyen", lastName: "Bob" });
// const n2 = makeFullNameConstraint({firstName: 'Nguyen', lastName: 'Ali', age: 20});

const makeFullNameConstraintWithGenerics = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n3 = makeFullNameConstraintWithGenerics({
  firstName: "Nguyen",
  lastName: "Ali",
  age: 20,
  hobby: "fly",
});

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid
  };
};

const emp1 = addNewEmployee({ name: 'Ace', age: 30 })
console.log(emp1);
// console.log(emp1.name);

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100)
  return {
    ...employee,
    uid
  }
}

const emp2 = addNewEmployeeT({name: 'Lan', age: 18})
console.log(emp2);
console.log(emp2.name);

// GENERICS in INTERFACE


interface Resource<T> {
  uid: number,
  name: string,
  data: T 
}

type NumberResource = Resource<number[]>

const numbersOne: NumberResource = {
  uid: 5,
  name: 'Hi',
  data: [1,2,3]
}

const resourceOne: Resource<string> = {
  uid: 1,
  name: 'Person',
  data: 'Hello'
}

const resourceTwo: Resource<object>= {
  uid: 1,
  name: 'Movie',
  data: {name: 'Avenger'}
}

const resourceThree: Resource<string[]>= {
  uid: 2,
  name: 'Developer',
  data: ['css', 'html']
}