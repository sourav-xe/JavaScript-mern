// async function interval() {
//     try {
//         const info = await fetch("https://api.github.com/users/sourav-xe")
//         const  data = await info.json()
//         let name = data.login
//         console.log(name)
        
//     }
//      catch (error) {
//         console.log(error)
//     }
    
// }
// interval()
fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(data => document.getElementById("dog").src = data.message);
