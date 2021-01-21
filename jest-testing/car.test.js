const car = require('./car');
const Car = require('./car');


// describe('The car class' , () => {
//   test('has four wheels', ()=> {
//     let car = new Car();
//     expect(car.wheels).toBe(4);
//   });
//   xtest("bad wheels", ()=> {
//     let car = new Car();
//     expect(car.wheels).toBe(3);
//   });
//   test('two new cars are equal object', () => {
//     let car1 = new Car();
//     let car2 = new Car();
//     expect(car1).toEqual(car2);
//   });
//   test('does not have doors', ()=> {
//     let car = new Car();
//     expect(car.door).toBeUndefined();
//   });
//   test('rais an error when call it on drive', () => {
//     let car = new Car();
//     expect(() => {car.drive()}).toThrow();
//   });
//   test('a new car has no mileage info', ()=> {
//     let car = new Car();
//     expect(car.mileageInfo).toBeNull();
//   });
//   test('wheels are truthy', ()=> {
//     let car = new Car();
//     expect(car.wheels).toBeTruthy();
//   });
//   test('the array has a car', ()=> {
//     let car = new Car();
//     let arr = [];
//     arr.push(car);
//     expect(arr).toContain(car);
//   });
//   // invert a matcher with not property
//   test('wheels are not undefined',()=>{
//     let car = new Car();
//     expect(car.wheels).not.toBeUndefined();
//   });












// });
// using SEAT approach for testing




describe('The car class' , () => {
  let car;
  beforeEach(()=>{
    car = new Car();
  });
  test('has four wheels', ()=> {
    expect(car.wheels).toBe(4);
  });
  xtest("bad wheels", ()=> {
    expect(car.wheels).toBe(3);
  });
  test('two new cars are equal object', () => {
    let car1 = new Car();
    let car2 = new Car();
    expect(car1).toEqual(car2);
  });
  test('does not have doors', ()=> {
    expect(car.door).toBeUndefined();
  });
  test('rais an error when call it on drive', () => {
    expect(() => {car.drive()}).toThrow();
  });
  test('a new car has no mileage info', ()=> {
    expect(car.mileageInfo).toBeNull();
  });
  test('wheels are truthy', ()=> {
    expect(car.wheels).toBeTruthy();
  });
  test('the array has a car', ()=> {
    let arr = [];
    arr.push(car);
    expect(arr).toContain(car);
  });
  // invert a matcher with not property
  test('wheels are not undefined',()=>{
    expect(car.wheels).not.toBeUndefined();
  })


})

