// // let arr1= [ 1,2,3,4,5];
// // let arr2 = [ 6 ,7 ,8];

// // let res = [...arr1, ...arr2];
// // console.log(res);
// let response = {
//     status: 220,
//     data: {
//      user:{
//             name:"sourav",
//             age:22,
//             address: "delhi",
//         },
//     },
// };
// let {data:{user:{name , address, age}}} =response;
// console.log(name,address,age);

let obj1 = {
    name:"sourav",age: 23,
    address:{
        city:"delhi", state: "vsnt-23",country: "india",
    },
    contact:{
        ph:343242, tg: 45343434,
    },
};
let obj2 = structuredClone(obj1);
obj2.name = "rohit";
obj2.age = 33;
obj2.address.city = "karnatka";
obj2.contact.ph = 777777777777;
console.log(obj1);
console.log(obj2);