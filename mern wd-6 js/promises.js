// let myPromise = new Promise((resolve, reject) => {
//     let success = false; // Simulating success or failure
//     if (success) {
//         resolve("Operation successful!"); // When successful
//     } else {
//         reject("Operation failed!"); // When failed
//     }
// });

// // Handling the promise

// myPromise.then(result => console.log(result)).catch(error => console.log("nahi hoa:", error));  // Runs if resolve() is called
//       // Runs if reject() is called



function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data fetched"), 2000);
    });
}

fetchData()
    .then(data => {
        console.log(data); // "Data fetched"
        return "Processing data...";
    })
    .then(processed => {
        console.log(processed);
        return "its processed is done" // "Processing data..."
    })
    .then(processeddone =>{
        console.log(processeddone);
    })
    .catch(error => console.log("Error:", error));





// ---------------------------------Promise.all(iterable)-----------

// const p1 = Promise.resolve(10);
// const p2 = new Promise((resolve)=>setTimeout(() => 
//     resolve(20),1000));
// const p3 = new Promise((resolve)=>setTimeout(() => 
//     resolve(30),2000));

// Promise.all([p1,p2,p3]).then(console.log);

// -----------------------------------------. Promise.all(iterable)-------


// If any promise rejects, Promise.all() immediately rejects.

// const p1 = Promise.resolve("Sucess")
// const p2 = Promise.reject("Failerred")
// const p3 = Promise.resolve("Done")

// Promise.all([p1,p2,p3])
// .then(console.log)
// .catch(console.log)

// ----------------. Promise.allSettled(iterable)-----

// const p1 = Promise.resolve("Success");
// const p2 = Promise.reject("Failed");
// const p3 = Promise.resolve("Completed");

// Promise.allSettled([p1, p2, p3]).then(console.log);

// ------------------. Promise.race(iterable)--------------

// const p1 = new Promise((resolve) => setTimeout(() => resolve("Fastest!"), 500));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Slower"), 1000));
// const p3 = new Promise((resolve) => setTimeout(() => resolve("Slowest"), 1500));

// Promise.race([p1, p2, p3]).then(console.log); 
// // Output: "Fastest!" (after 500ms)


// -------------------------Promise.any--


// const p1 = new Promise(( _,reject) => setTimeout(() => reject("Error 1"), 100));

// const p2 = new Promise(( _,reject) => setTimeout(() => reject("Error 2"), 200));

// const p3 = new Promise(( _,reject) => setTimeout(() => reject("Error 3"), 300));
// const p4 = new Promise(( resolve) => setTimeout(() => resolve("success 3"), 400));
// // const p2 = new Promise((resolve) => setTimeout(() => resolve("First Success"), 200));
// // const p3 = new Promise((resolve) => setTimeout(() => resolve("Second Success"), 300));

// Promise.any([p1, p2, p3,p4]).then(console.log); 


// -------------------------race----------
// const p1 = new Promise((resolve) => setTimeout(() => resolve("Fastest!"), 2000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Slower"), 1000));
// const p3 = new Promise((resolve) => setTimeout(() => resolve("Slowest"), 1500));

// Promise.race([p1, p2, p3]).then(console.log); 
// // Output: "Fastest!" (after 500ms)

