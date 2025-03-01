
// function fetchData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("name: sourav , age :20")
//         }, 2000);
//     })
// }


// fetchData()
// .then((data)=>{
//     console.log("we are processing the data",data)
//     return(data)
// })
// .then((data)=>{
//     console.log("we have processed the data")
//     return(data)
// })
// .then((data)=>{
//     console.log("Data is ",data)
//     return(data)
// })
// .catch((error)=>{
//     console.log(error);
// })


// making curry-veg steps

// function MakePanner(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Req Mat -: Panner , onion , species ")
//         }, 2000);
//     })
// }
// MakePanner()
// .then((data)=>{
//     console.log( data,
//         "Bring raw panner")
//     return (data)
// })
// .then((data)=>{
//     console.log("chop the vegtables")
//     return (data)
// })
// .then((data)=>{
//     console.log(" put into any utensil")
//     return (data)
// })
// .then((data)=>{
//     console.log("put on stove and put it toghter")
//     return (data)
// })
// .then((data)=>{
//     console.log("add species")
//     return (data)
// })

// .then((data)=>{
//     console.log("mix it well")
//     return (data)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("its ready")
// })


// const id = document.getElementById("username");


async function fetchData(){
    try{
        let response = await fetch("https://api.github.com/users/sourav-xe")
        
        if(!response.ok){
          throw new Error("Error fetching");
        }

        let data = await response.json();
        document.getElementById("#username").login
        document.getElementById("#id").id
        // console.log(login)
        return data;
    }
    catch(error){
      console.log(error)
    }
 }
    