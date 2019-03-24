// function abc(x){
//     return x + 1;
// }

//const abc = x => x + 1;

// function add(x,y){
//     return x + y;
// }

//const add = (x,y) => x + y;


// function addAndMultiple(x,y) {
//     const a = x+y;
//     const b = x*y;
//     return a + b;
// }

const addAndMultiple = (x,y) => {
    const a = x+y;
    const b = x*y;
    return a + b;
};


const students = [
    {
        name: 'Arjun',
        mark: 250
    },
    {
        name: 'Allu',
        mark: 150
    },
    {
        name: 'Bhavana',
        mark: 350
    }
];
//console.log(students);
var result = students
                .filter(val => val.mark >= 250)
                .map(val => val.name)
                .reduce((acc,curr) => {
                    acc += curr + ',';
                    return acc;
                }, 'Students who passed are ');

//console.log(result);



const arr = [5,3,7];
const double = x => x *2;
const arr1 = arr.map(double);
console.log(arr1);