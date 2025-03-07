// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Alice", sayBye);





// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// greet("Bob", function() {
//     console.log("See you later!");
// });






// console.log("Start");

// setTimeout(function() {
//     console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");



///////////////////////////////////////////////////////////callllllbacllll heeeeeeeeelllllllllllllllllllllllllllllll



// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 done");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 done");
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 done");
//         callback();
//     }, 1000);
// }

// step1(() =>
//      {
//         step2(() =>
//      {
//         step3(() => 
//     {
//             console.log("All steps completed!");
//     });
//     });
// });



// ---------------------------practise-----------------------------------
// Try writing a function fetchData that takes a callback and prints "Fetching data..." instantly. After 2 seconds, the callback should print "Data received!".





  function fetchData(cb){
    console.log("Fetching Data");

    setTimeout(function () {
        let randomNumber = Math.floor(Math.random()*100);
        console.log("Data Received")
        cb(randomNumber);
        if(randomNumber % 2 == 0){
            console.log("even")
        }
        else{
            console.log("odd")
        }
        
    }, 1000);
}
function done(randomNumber){
    console.log(" number is ", randomNumber)
    if(randomNumber > 50){
        console.log("greater")
    }
    else{
        console.log("smaller")
    }
}
   
fetchData(done)







// function fetchData(cb){
//     console.log("Fetching Data")
    
//     setTimeout(() => {
//          let randomNumber = Math.floor(Math.random() * 100);
//         console.log("Data Reveoved");
//         cb(randomNumber);
//     }, 2000);
    
// }

// function ok(randomNumber){
    
//     console.log("Received number:", randomNumber);
// }

// fetchData(ok);





function fetchData(cb) {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log("Generated Number:", randomNumber);

    if(randomNumber > 50){
        cb();
    }
    
    // Call the callback function only if the number > 50
}

function callback() {
    console.log("Callback executed!");
}

fetchData(callback);
