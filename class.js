// function Student(type){
//     this.name = 'asdf';
//     this.type = type;
// }

// Student.prototype.sayHello = function(){
//     console.log('hello');
// };

class Student{
    constructor(type){
        this.name = 'asdf';
        this.type = type;
    }
    sayHello(){
        console.log('hello');
    }
}

// const obj = new Student('Stu');
// console.log(obj);

class Util {
    constructor(){
        this.list = [];   
    }
    addItem(str){
        this.list.push(str);
    }
    printResult(res) {
        console.log('result is \n==========\n');
        console.log(res);
    }
}


class StringUtil extends Util {
    constructor(){
        this.type = 'string';
        super();
    }
    getSmallChars(){
        const result = this.list
                    .filter(x => x.length < 4);
        this.printResult(result);
    }
    printResult(res){
        console.log('This is inside String Util');
        super.printResult(res);   
    }
}

class Numberutil extends Util {
    getSum(){
        const result = this.list.reduce((acc,curr) => acc + curr, 0);
        this.printResult(result);
    }

}


const strUtil = new StringUtil()

strUtil.addItem('abc');
strUtil.addItem('ad');
strUtil.addItem('jijijijij');
strUtil.getSmallChars()  // ['abc'] 


const nUtil = new Numberutil();
// nUtil.addItem(1);
// nUtil.addItem(2);
// nUtil.addItem(3);
// nUtil.getSum(); // 6













































