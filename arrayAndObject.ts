/* ARRAY AND OBJECT */ 
// --------------------
let names = ['mai', 'trung', 'nguyen'];
names.push('son')
// names.push(1)
// names.push(false)

let numbers = [1,2,3];
// numbers.push('Hoang');
numbers[3] = 4;

let mixed = [1, 'han', false]
mixed.push(5)
mixed.push('Nam')
mixed[3] = true 
// mixed.push({a: 2, b: 3})

//------ Objects --------

let person = {
  name: 'Hoang',
  age: 26,
  isStudent: false
}

// person.name = 5
person.name = 'Nam'
// person.hobbies = ['books']

person = {
  name: 'lan',
  age: 20,
  isStudent: true,
  // skills: ['js']
}