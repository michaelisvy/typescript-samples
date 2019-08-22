import { sum, multiply } from './basicoperations/basicOperations';

test('sum', () => {
  expect(sum()).toBe(0);
});

test('multiply', () => {
  expect(multiply(2, 2)).toBe(4);
});


test('number', () => {
    let myVariable: number = 10.3446;
    expect(typeof myVariable === "number").toBe(true);
    expect(myVariable.toPrecision(4)).toBe("10.34");
  });

  test('array with numbers', () => {
    let years: Array<number> = [ 2016, 2017, 2018, 2019];
    //years[0] = 'a'; // creates a compilation error
  });