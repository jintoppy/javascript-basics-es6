// var obj = {name: 'Ajith'};

// var obj1 = Object.assign({}, obj);

// obj1.age = 10;

// console.log(obj);
// console.log(obj1);


const obj = {name: 'Ajith'};

const obj1 = {
    ...obj,  // Spread operator
    age: 10
};

// console.log(obj);
// console.log(obj1);

const arr = [3,4,5,6,7,8,9];
const arr1 = [...arr, 10];
console.log(arr);
console.log(arr1);