// setTimeout(function(){
//     console.log('Hello');
//     setTimeout(function(){
//         console.log('Hi');
//         setTimeout(function(){
//             console.log('Hi');
//         }, 400);
//     }, 400);
// }, 200);

const promise1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('With 200 timeout');
        resolve();
    }, 200);
});

const promise2 = new Promise(res => {
    setTimeout(() => {
        console.log('With 400 timeout');
        res();
    }, 400);
});

Promise.all([promise1, promise2])
       .then(() => {
            console.log('all are completed');
        });


