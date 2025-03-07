const shoppingKart = [

    {
        itemName : "Football",
        price : 999
    },

    {
        itemName : "Basketball",
        price : 2999
    },

    {
        itemName : "volleyball",
        price : 500
    },

    {
        itemName : "hockey",
        price : 3999
    },
]

 const a = shoppingKart.reduce((initial , item)=>{
   return initial + item.price;
},0)

console.log(a)
