
// // // // convert this using async 
// // // function getUser() {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             resolve("User Data Loaded");
// // //         }, 1500);
// // //     });
// // // }

// // // getUser().then((data) => console.log(data));



// // // async function getUser() {
// // //     return new Promise((resolve,reject)=>{
// // //         setTimeout(() => {
// // //             resolve("user data loaded")
// // //         }, 1500);
// // //     })
    
// // // }
// // // async function fetchData() {
// // //     let data = await getUser();
    
// // //     console.log(data)
// // //     console.log("processing data")



// // //     await new Promise((resolve)=>{
// // //         setTimeout(() => {
// // //             console.log(" User Data processed")
// // //             resolve();
// // //         }, 1500);
// // //     })

// // //     console.log("done");
// // // }
// // // console.log("it will start soon wait")
// // // fetchData();

// // // async function taskOne() {
// // //     return new Promise((resolve,reject) => {
// // //         setTimeout(() => {
// // //             resolve("Task One Completed");
// // //         }, 2000);
// // //     });
// // // }

// // // async function taskTwo() {
// // //     return new Promise((resolve ,reject) => {
// // //         setTimeout(() => {
// // //             resolve("Task Two Completed");
// // //         }, 3000);
// // //     });
// // // }

// // // async function taskThree() {
// // //     return new Promise(( resolve,reject) => {
// // //         setTimeout(() => {
// // //             resolve("Task Three Completed");
// // //         }, 1400);
// // //     });
// // // }

// // // async function taskFour() {
// // //     return new Promise((resolve ,reject) => {
// // //         setTimeout(() => {
// // //             reject("reject agaya");
// // //         }, 200);
// // //     });
// // // }

// // // async function fetchTasks() {
// // //     console.log("Starting Tasks...");

// // //     let data = await Promise.any([taskOne(), taskTwo(),taskFour(),taskThree()]);
// // //     let dataa = await Promise.race([taskOne(), taskTwo(),taskFour(),taskThree()]);

// // //     console.log(data)
// // //     console.log(dataa)

// // //     console.log("All Tasks Completed");
// // // }

// // // fetchTasks();



// // // async function fetchUserData() {
// // //     return new Promise ((resolve, reject)=>{
// // //         setTimeout(() => {
// // //             let success = false;
// // //             if(success){
// // //                 resolve("data loaded")
// // //             }
// // //             else{
// // //                 reject("error occured")
// // //             }
// // //         }, 1000);
// // //     })
// // // }

// // // async function getUserData() {
// // //     try{
// // //         let data = await fetchUserData();
// // //         console.log(data);
// // //     }
// // //    catch (error){
// // //         console.log(error)
// // //    }
// // // }
// // // getUserData();

















// // // // async function fetchData() {  // async makes this function return a Promise
// // // //    try{ console.log("Start Fetching...");
    
// // // //     let data = await new Promise((resolve,reject) => {
// // // //         setTimeout(() =>{resolve("done fetch")}, 2000);
        
// // // //     });
// // // //     console.log(data);}
// // // //     catch(error){
// // // //         console.log("Error" ,error)
// // // //     }
// // // //      // This runs *after* the promise resolves
// // // //     console.log("End Fetching");
// // // // }

// // // // fetchData();





// // // async function fetchFirstAPI() {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             reject("❌ First API failed");
// // //         }, 1000);
// // //     });
// // // }

// // // async function fetchSecondAPI() {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             reject("❌ Second API failed");
// // //         }, 1500);
// // //     });
// // // }
// // // async function fetchThirdAPI() {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             resolve("Third sucess");
// // //         }, 1500);
// // //     });
// // // }

// // // async function fetchData() {
// // //     try{
// // //         let data = await Promise.allSettled([fetchFirstAPI(),fetchSecondAPI(),fetchThirdAPI()])
        
// // //         console.log(data)
// // //        }
// // //        catch(error){
// // //            console.log("Error in API:", error);
// // //        }

   

// // //     console.log("🎯 All API calls attempted");
// // // }

// // // fetchData();


// // async function fetchUserDetails(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(() => {
// //             resolve("User data Details are loading: '{name: 'Sourav' ,age:23}'")
// //         }, 2000);
// //     })
// // }

// // async function fetchUserPosts(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(() => {
// //             resolve("Fetching USer Posts... ['post 1', 'post 2'] ")
// //         }, 3000);
// //     })
// // }

// // async function timeout() {
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(() => {
// //             resolve("⚠️ Request Timed Out!")
// //         }, 2500);
// //     })
// // }

// // async function Caller() {

// //     try{
// //         let data = await Promise.race ([fetchUserDetails(),fetchUserPosts(),timeout()])
// //         console.log(data)
// //         // console.log(data2)
        
// //     }
// //     catch(error){
// //         console.log(error)
// //         console.log("Error in Fetching data")
// //     }
// //     console.log("All data fetched")
// // }
// // Caller();




// async function fetchUserDetails() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let data = Math.floor(Math.random()*10d);
//         if(data>=5){
//             resolve("✅ User Data Loaded!");
//         }
//         else{
//             reject("❌ API Error")
//         }
//         }, 1000);
//     })
// }

// async function retryFetch() {

//     let Attempt = 3; 
    
    
//         for(let i = 1 ; i <= Attempt ; i++){
//             try{
//                 let data = await fetchUserDetails();
//                 console.log(data);
//                 return;
//             }
//             catch(error){
//                 console.log(`Attempt ${i} failed. Retrying...`)
//             }
//       }
   
//         console.log("❌ API request failed after 3 attempts");
  
// }
// retryFetch();



// async function fetchData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let data = Math.floor(Math.random()*10);
//             if(data >=5){
//                 resolve("✅ Data Loaded!")
               
//             }
//             else{
//                 reject("❌ API Error!")
//             }
//         }, 1500);
//     })
// }

// async function  fetchWithTimeout() {
//     let attemp = 2;
    
//     for(let i = 0 ; i<= attemp ; i++){
//     try{
//         let ok = await fetchData();
//          console.log(`✅ Data Loaded: ${ok}`);
//         return;
//       }
//       catch(error){
//         console.log(`⚠️ Attempt ${i} failed. Retrying...`)
//         }
//     }
//     console.log("❌ API request failed after 3 attempts");
// };
// fetchWithTimeout() 



// 🔥 Challenge 1: Promises & Async/Await
// Write a function fetchUserData() that:

// Returns a randomly resolved or rejected promise after 1 second.
// If resolved, it should return "✅ User data loaded"
// If rejected, it should return "❌ API failed"
// Use try/catch to handle errors.



async function fetchUserData() {
    let random = Math.floor(Math.random()*10)
    // console.log(random);
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            if(random>=5){
                resolve("✅ User data loaded")
            }
            else{
               reject("❌ API failed") 
            }
        }, 1000);
    })
}

    async function loadData() {

        let attemp = 3

        for( let i = 1 ; i <= attemp ; i++){
            
        try{
            let data = await fetchUserData();
            console.log( "It was sucessfull",data)
            return;
        }
        catch(error){
            console.log("Error occureed",error)
            await new Promise(resolve => setTimeout(resolve, 500));  // Delay before retry

        } 
    }
    console.log("❌ API request failed after 3 attempts");   
       
    };
  loadData();