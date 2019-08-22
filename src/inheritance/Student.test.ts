import { Student } from './Student';
import { Person } from './Person';

const studentJohn = new Student(15, "Harry John", 33);
test('sum', () => {
  expect(studentJohn.getAge()).toEqual(15);
});

test('polymorphism', () => {
  let persons: Array<Person> = [studentJohn];
  expect(persons[0] instanceof Person).toBe(true);
  expect(persons[0] instanceof Student).toBe(true);
  
});
