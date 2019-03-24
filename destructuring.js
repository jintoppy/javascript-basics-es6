const obj = {
    name: 'Ajith',
    age: 20,
    category: 'Human',
    inner: {
        p: 'abc'
    }
};

// const name = obj.name;
// const age = obj.age;

const { name, age, inner: { p } } = obj;

// import { NgModule } from '@angular/core';

console.log(obj);
console.log(name);
console.log(age);
console.log(p);
