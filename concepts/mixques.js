// function  createMultiplier( num,multiplier){
//     return num * multiplier
    
// }

//  let a= createMultiplier(5,4);
//  console.log(a);

//  🎭 Section 3: Callbacks & Higher-Order Functions (2 Questions)
// 5️⃣ Convert the following function into one that accepts a callback function:


// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Alice"));
// Modify it so that the greeting message is processed by a callback before being printed.

// 6️⃣ What will be the output of the following map function?

// js
// Copy
// Edit
// const numbers = [1, 2, 3, 4];
// const squared = numbers.map(num => num * num);
// console.log(squared);

// function greet(name,cb){
//     console.log(`Hello, ${name}!`)
//     cb();
// }

// function ok(){
//     console.log("good evening")
// }
// greet("sourav",ok)


async function FetchUserData() {
    return new Promise((resolve , reject)=>{
        let random  = Math.floor(Math.random()*10)
        
        setTimeout(() => {
            if(random>=5){
                resolve("user data loaded");
            }
            else{
                reject("Error occured in laoding")
            }
        }, 1000);
    })
}
async function getData(params) {
  let   attemp = 3
   
        
        for(i=1;i<=attemp;i++){
            
        try{
            let data = await FetchUserData();
            console.log("loading",data);
            return
        }
        catch(error){
            console.log("its fails",error)
        }
     console.log(i);
}
}
getData();