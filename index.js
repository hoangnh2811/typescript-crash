/* GENERICS */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3, 4]);
// console.log(l1);
// const l2 = last(['a', 'b'])
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(["a", "b"]);
var l5 = lastT(["d", "e"]);
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
// console.log(m)
// const m2 = makeArr('a')
var makeArrT = function (x) { return [x]; };
var m3 = makeArrT(true);
var makeArrXY = function (x, y) { return [x, y]; };
var m4 = makeArrXY(5, "hello");
var m5 = makeArrXY(1, 2);
var makeTuple = function (x, y) { return [x, y]; };
var m6 = makeTuple(4, "a");
var m7 = makeTuple("123", true);
var m8 = makeTuple(null, 1);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m9 = makeTupleWithDefault(1, "123");
// GENERICS EXTENDS
// const makeFullName = (obj) => ({
//   ...obj,
//   fullName: `${obj.firstName} ${obj.lastName}`,
// });
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n1 = makeFullNameConstraint({ firstName: "Nguyen", lastName: "Bob" });
// const n2 = makeFullNameConstraint({firstName: 'Nguyen', lastName: 'Ali', age: 20});
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n3 = makeFullNameConstraintWithGenerics({
    firstName: "Nguyen",
    lastName: "Ali",
    age: 20,
    hobby: "fly"
});
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var emp1 = addNewEmployee({ name: 'Ace', age: 30 });
console.log(emp1);
// console.log(emp1.name);
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var emp2 = addNewEmployeeT({ name: 'Lan', age: 18 });
console.log(emp2);
console.log(emp2.name);
var numbersOne = {
    uid: 5,
    name: 'Hi',
    data: [1, 2, 3]
};
var resourceOne = {
    uid: 1,
    name: 'Person',
    data: 'Hello'
};
var resourceTwo = {
    uid: 1,
    name: 'Movie',
    data: { name: 'Avenger' }
};
var resourceThree = {
    uid: 2,
    name: 'Developer',
    data: ['css', 'html']
};
