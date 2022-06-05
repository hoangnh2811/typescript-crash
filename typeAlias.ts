/* TYPE ALIAS */
type StringOrNumber = string | number;
type Student = {name: string; id: StringOrNumber}
type Student2 = {
  name: string
  id: StringOrNumber
}

const studentDetails = (id: StringOrNumber, studentName: string): void => {
  console.log(`Student ${studentName} has id: ${id}`);
}

studentDetails(123, 'Hoa')
studentDetails('214', 'Son')

const greet = (user: Student) => 
  console.log(`${user.name} with id ${user.id} say hello`);

greet({name: 'Koa', id: '66'})