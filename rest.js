function add(...myArgs){
    return myArgs.reduce((acc,curr) => acc + curr, 0);
}

const res = add(1,2,3);
const res1 = add(1,2);
// console.log(res);
// console.log(res1);


function getMarkOfStudent(name, ...args) {
    console.log('Mark of ' + name + ' is \n');
    console.log(args.reduce((acc, curr) => acc + curr, 0));
}

getMarkOfStudent('Ajith', 10, 20);
getMarkOfStudent('Ajay');
getMarkOfStudent('lkajsdf', 10, 10, 10, 1);

