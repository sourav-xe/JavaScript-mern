//    function outer (){
//     let name = "sourav"
//     function inner(){   
//         console.log(name);
        
//     }
//     return inner;
//    }
//    let s = outer();
//    s();



// other examples=----------------------


// function x(){
//     let a = 9;
    
//     function y(){
//         console.log(a);
//     }
//     y();
//     // return y;
    
// }
//  x();




// a=100;
// function x(){
//     let a = 9;
    
//     function y(){
//         console.log(a);
//     }
    
//     return y;
//     a=100;
    
// }

//  let j = x();
//  j();
 



// function makeMultiplier(x) {
//     return function(y) {
//         return x * y;
//     };
// }

// const multiplyBy2 = makeMultiplier(2);
// const multiplyBy5 = makeMultiplier(5);

// console.log(multiplyBy2(3)); // ?
// console.log(multiplyBy5(4)); // ?



function createCounter() {
    let count = 0;
    return () => count++;
}

// Usage
// const counter = createCounter();

// for (let i = 0; i < 5; i++) {
//     console.log(counter()); // Output: 0, 1, 2, 3, 4
// }

// console.log(a); // undefined
// var a = 10;
// console.log(a); // 10
// var a = 10;

// foo(); // "Hello"
// function foo() {
//     console.log("Hello");

// }
// foo(); // "Hello"


// console.log(a);
// var a = function() {
//     console.log("Hello");
// };

// a();

// console.log(b);
// var b = 10;

// var x = 5; // Global scope

// function first() {
//     // Hoisted inside function scope (initialized as undefined)
    
//     console.log(x); // ❓ undefined (not global x)
//     var x = 10; // Now x gets assigned a value
//     console.log(x); // ✅ 10
// }

// first();


// var a = 100;

// function test() {
//     console.log(a);
//     if (true) {
//         var a = 50;
//     }
//     console.log(a);
// }

// test();



// greet();
// hello();

// function greet() {
//     console.log("Hello from greet");
// }

// function raj() {
//     console.log("Hello from hello");
// };
// var hello = raj()
// ;


// console.log(greet);

// var greet = function() {
//     console.log("Hi!");
// };

// function greet() {
//     console.log("Hello!");
// }

// console.log(greet);

// greet();

// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// greet("Bob", function() {
//     console.log("See you later!");
// });




// 🔥 Challenge 2: Closures
// Create a function counter() that:

// Returns an inner function that increments and logs a counter value.
// Calling const count = counter(); count(); count(); count(); should log:
// Copy
// Edit
// 1
// 2
// 3
// The counter value should be private and not accessible directly.


function counter(){
    let count = 0 ;
    return function inner(){ 
        setTimeout(() => {
            count ++;
            console.log(count) 
        },count *1000);
        
    }
}
 let a=counter();
a();
a();
a();