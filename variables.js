const b = 10; // read-only
let a = 10;
a = 20;
a = 'asdf';
console.log(a);

function abc(type){
    if(type === 'Human'){
        let a = 10;
    }
    console.log(a);// This will throw error as let is block level scoped
}

abc('Human');