// const one = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({data:{
//                 username: "sourav" ,
//                 pass : "sokalo123"
//             }})
//         }
//         else{
//             reject("Error in fetching data")
//         }
//     }, 1000);
// })

// async function trying() {
//     try {
//        const a =  await one; console.log(a)
       
       
//     } catch (error) {
//         console.log(error);
//     }
// }
// trying();

// const one = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({data:{
//                 username: "sourav" ,
//                 pass : "sokalo123"
//             }})
//         }
//         else{
//             reject("Error in fetching data")
//         }
//     }, 1000);
// })
 

// one
// fetch("https://api.github.com/users/sourav-xe")

// .then((res)=>{
//     return res.json()
// })

// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error)
// })

// const one = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({data:{
//                 username: "sourav" ,
//                 pass : "sokalo123"
//             }})
//         }
//         else{
//             reject("Error in fetching data")
//         }
//     }, 1000);
// })



// async function fetchh() {
//     try {
        
//         const res = await fetch("https://api.github.com/users/sourav-xe")

//         const data = await res.json();
//         console.log(data);

//     } catch (error) {
//         console.log("error",error)
//     }
// }
// fetchh()




function greet(name, callback) {
    console.log(`Hello, ${name}`);
    return callback();
      // Calling the callback function
  }
//    function outer (){
//     let name = "sourav"
//     function inner(){   
//         console.log(name);
        
//     }
//     return inner;
//    }
//    let s = outer();
//    s();