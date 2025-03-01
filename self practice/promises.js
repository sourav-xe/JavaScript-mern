const one = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = false;
    if(!error){
        resolve({username:"sourav", pass: "sdadaw1231"})
    }
    else{
        reject("data not loaded+")
    }
    }, 1000);
    
})
one
.then(function(data){
    console.log("data is ",data.username)
    return data
}
)
.then(function(data){
    console.log("pass is ",data.pass)
}
)
.catch(function(error){
    console.log(error)
}
)






// const two = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({User: "sourav", pass : "123"})
//         }
//         else{
//             reject("error")
//         }
//     }, 2000);
// })

// two.then((user)=>{
//     console.log(user);
//     return user;
// })
// .then((user)=>{
//     console.log(user.pass)
// })
// .catch((error)=>{
//     console.log(error)
// })
