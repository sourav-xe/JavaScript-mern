// // function fetchData(cb) {
// //     setTimeout(() => {
// //         let data = "User data received";
// //         cb(data);
// //     }, 2000);
// // }

// // function callback(data) {
// //     console.log(data);
// // }

// // fetchData(callback);


// convert this to promises insetad of callback function

// let mypromise = new Promise((resolve,reject)=>{
//     let success = false;
    
//     setTimeout(() => {
//         if(success){
//             let data = "User data received";
//             resolve(data)
//         }
//         else{
//             reject("error agaya hai")
//         }
       
//     }, 2000);
// })


let a;
a= ;
a();


// // mypromise
// // .then((data)=>{
// //     console.log("sucess",data)
// // })
// // .catch((error)=>{
// //     console.log("failure",error)
// // })



// let fetchData = new Promise((resolve , reject)=>{
//     let success = true;
//     setTimeout(() => {
//         if(success){
//             let data = "Data is being Fetched";
//             resolve(data);
//         }
//         else{
//             reject("Error occurs while fetching data");
//         }
//     }, 2000);
// })
// fetchData
// .then((data)=>{
//     console.log("Data is Receiving")
//     return (data);
// })
// .then((data)=>{
//     console.log("Data is Received")
//     return (data);
// })
// .then((data)=>{
//     console.log(data)
//     return "data is 999394"
// })
// .then((ok)=>{
//     console.log(ok)
//     return "all printed"
// })
// .then((pt)=>{
//     console.log(pt)
// })

// .catch((error)=>{
//     console.log("Failure ",error)
// })
// .finally(()=>{
//     console.log("chaing")
// })
















// // let fetchData = new Promise((resolve , reject)=>{
// //     let success = true;
// //     setTimeout(() => {
// //         if(success){
// //             let data = "Data Received";
// //             resolve(data);
// //         }
// //         else{
// //             reject("Error occurs while fetching data");
// //         }
// //     }, 2000);
// // })
// // fetchData
// // .then((data)=>{
// //     console.log(data)
// //     return "Data is being Fetched"
// // })
// // .then(processed =>{
// //     console.log(processed)
// //     return "Fetching done"
// // })
// // .then(rvd=>{
// //     console.log(rvd)
   
// // })

// // .catch((error)=>{
// //     console.log("Failure ",error)
// // })




















// // function fetchData(cb) {
// //     setTimeout(() => {
// //         let data = "User data received";
// //         cb(data);
// //     }, 2000);
// // }

// // function callback(data) {
// //     console.log(data);
// // }

// // fetchData(callback);






// let begin = new Promise((resolve, reject)=>{
//     let sucess = false;
//     setTimeout(() => {
//         if(sucess){
//             let data = "Data Processing Complete";
//             resolve(data)
//         }
//         else{
           
//             reject("Retrying Fetch......")
//         }
//     }, 2000);
// })

// begin 



// .then((data)=>{
//     console.log("processing data")
//     return (data);
// })

// .then((data)=>{
//     console.log(data)
    
// })

// .catch((error)=>{
//     console.log("Failure",error);
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("Retrying...............")
//             resolve("Retry Sucessful, Data Processed")
//         }, 2000);
//     });
// })
// .then((data)=>{
//     console.log(data)
    
// })




// .finally(()=>{
//     console.log("fetching done")
// })




// 🔥 Challenge 1: Promises & Async/Await
// Write a function fetchUserData() that:

// Returns a randomly resolved or rejected promise after 1 second.
// If resolved, it should return "✅ User data loaded"
// If rejected, it should return "❌ API failed"
// Use try/catch to handle errors.

