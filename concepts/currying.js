// // function mult (a){
// //     return function (b){
// //         return function (c){
// //             return a * b *c;
// //         }
// //     }
// // }
// // console.log(mult(2)(3)(5));

// const multiply = a => b => c => a * b * c;

// console.log(multiply(2)(3)(5)); // Output: 30

function sum(a,b,su){
    let s=a+b;
    console.log("sum ",s);
    su(a,b);
}
function ok(a,b){
   let s = a-b
    console.log("subtraction",s);
}
sum(3,7,ok);

function sum(a,b){
    const s=a+b;
    console.log("sum ",s);
    su(a,b);
}
function su(a,b){
    let s =a-b;
    console.log("subtraction",s);
}
sum(3,7);