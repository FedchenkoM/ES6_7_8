// function sum (a,b){
//     return a+b;
// }
// function cube (a){
//     return a ** 3;
// }

// const sum = (a,b) => {
//     return a+b;
// }
// const sum = (a,b) => a+b


// const cube = (a) => {
//     return a**3;
// }
// const cube = a => a**3


// setTimeout(() => console.log('After_1_sec'),1000)

// context
function log() {
    console.log(this)
};

const arrowLog = () => console.log(this);


// const person = {
//     name: 'elena',
//     age: 20,
//     log: log,
//     arrowLog: arrowLog,
//     delayLog: function () {
//         const self = this;
//         setTimeout (() => { console.log(this.name + ' ' + this.age) }, 1000)
//     }
// }
// console.log(global);
// person.delayLog();