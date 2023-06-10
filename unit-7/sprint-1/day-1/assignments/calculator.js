// const crypto = require('crypto');

// const operator = process.argv[2];
// const num1 = Number(process.argv[3]);
// const num2 = Number(process.argv[4]);

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mult(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function sin(a) {
//     return Math.sin(a);
// }

// function cos(a) {
//     return Math.cos(a);
// }

// function tan(a) {
//     return Math.tan(a);
// }

// function random(num1) {
//     return crypto.randomInt(num1);
// }

// switch (operator) {
//     case 'add':
//         console.log(add(num1, num2));
//         break;
//     case 'sub':
//         console.log(sub(num1, num2));
//         break;
//     case 'mult':
//         console.log(mult(num1, num2));
//         break;
//     case 'divide':
//         console.log(divide(num1, num2));
//         break;
//     case 'sin':
//         console.log(sin(num1));
//         break;
//     case 'cos':
//         console.log(cos(num1));
//         break;
//     case 'tan':
//         console.log(tan(num1));
//         break;
//     case 'random':
//         const length = Number(process.argv[3]);
//         console.log(random(length));
//         break;
//     default:
//         console.log('Invalid operator');
// }
// // the end---



const crypto= require ('crypto');
const operator=process.argv[2];
const num1= Number(process.argv[3]);
const num2= Number(process.argv[4]);

function add (a,b){
        return a+b;
}
function sub (a,b){
        return a-b;
}

function mult (a,b){
        return a*b;
}

function div (a,b){
        return a/b;
}

function sin (a){
        return Math.sin(a);
}
function cos (a){
        return Math.cos(a);
}
function tan (a){
        return Math.tan(a);
}
function random(num1) {
        return crypto.randomInt(num1);
}


switch(operator){
        case 'add':
                console.log(add(num1, num2));
                break;

                case 'sub':
                        console.log(sub(num1,num2));
                        break;
                        
                        case 'mult':
                                console.log(mult(num1, num2));
                                break;

                                case 'div':
                                        console.log(div(num1, num2));
                                        break;

                                        case 'sin':
                                                console.log(sin(num1));
                                                break;

                                                case 'cos':
                                                        console.log(cos(num1));
                                                        break;

                                                        case 'tan':
                                                                console.log(tan(num1));
                                                                break;

                                                                case 'random':
                                                                        const length = Number(process.argv[3]);
                                                                        console.log(random(length));
                                                                        break;

                                                                                default:
                                                                                        console.log('Invalid operator');

        }
        




