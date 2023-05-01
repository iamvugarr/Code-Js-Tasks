// For today's task you are going to create custom array methods from scratch like so:

// Array.prototype.customMap = function (cb) {
//    // `this` keyword points to the array itself
//    const result = [];

//    for (let i = 0; i < this.length; i++) {
//        result.push(cb(this[i], i, this));
//    }
//    return result;
// }

// const mappedNumbers = [1,2,3].customMap((num) => num * 2);
// console.log(mappedNumbers); // [2, 4, 6]

// Using the example above you should create following custom array methods:
// some+, every+, filter, forEach+, includes+.

//------------------------------------------------------------------------------

//Task 1: myForEach()
Array.prototype.myForEach = function myForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      //Elementin arrayde oldugunu yoxlamaq ucun
      callback(this[i], i, this);
    }
  }
};

const array = [4, 8, 9, 61];

array.myForEach((elem) => console.log(elem * 2));
// console.log(array.myForEach(elem => elem * 2))
//--------------------------------------------------------------

//Task 2: myIncludes()
Array.prototype.myIncludes = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (item === this[i]) {
      return true;
    }
  }
  return false;
};

const numbers1 = [16, 84, 2, 589, 625];

console.log(numbers1.myIncludes(589));
console.log(numbers1.myIncludes(17));

//--------------------------------------------------------

//Task 3: myEvery()
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const numbers = [12, 88, 6, 9];
const isEven = numbers.myEvery((num) => num % 2 === 0);
console.log(isEven);

//--------------------------------------------------------

//Task 4: mySome()
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const nums = [1, 4, 6, 3];
const biggerThanFive = nums.mySome((num) => num > 5);
console.log(biggerThanFive);
