


// //implementation of forEach
// let arr=[1,2,3]
// function forEach(callback){

//     for(let i=0;i<arr.length;i++){
//         console.log(i,arr[i],arr)
//     }
// }

// function x(element,index,list){
//     console.log(element,index,list)
// }
// forEach(x)


//function of for each
// let arr=[1,2,3]
// arr.forEach(function(){
//     console.log("function called")//3function called
// })


//actual implementation

// let arr=[1,2,3]
// arr.forEach(function(element,index,list){
//     console.log(element,index)
// })

// let arr=[1,2,3]
// let result=arr.forEach(function(element,index,list){
//     console.log(element+index)
//     // return element+index;
// })
// console.log(result)

// for each ending here







//implementation of map



// function of map



//actual implementation

// let arr1=[1,2,3]
// arr1.map(function(element,index,list){
//     console.log(element,index,list)
// })



 //the difference between forEach and map below this

// let arr=[1,2,3]
// let result1=arr.forEach(function(element,index,list){
//     console.log(element,index,list)
//     return element+index;
// })
// console.log(result1)

let result2=arr.forEach(function(element,index,list){
    console.log(element,index,list)
    return element+index;
    // return (element,index,list)
})
console.log(result2)

// let result3=arr.map(element=>)

