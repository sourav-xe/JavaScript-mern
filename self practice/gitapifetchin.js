const karo = async() => {
   
    try {

        

        let data = await fetch("https://api.github.com/users/sourav-xe")
        const response = await data.json(); 

         
        document.querySelector("#user").innerHTML = response.login;
        document.querySelector("#idz").innerHTML = response.id;
        document.querySelector("#avatar").src = response.avatar_url;          
    } 
    
    
    catch (error) {
        console.log(Error)
    } 
}

karo()


