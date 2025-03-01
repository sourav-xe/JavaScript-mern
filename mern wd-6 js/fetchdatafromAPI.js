let data = "https://fake-json-api.mock.beeceptor.com/users"
 const user = fetch(data)
  user.then((res)=>{

    console.log(res)

  })

  .catch((error)=>{
    console.log(error);
  })  