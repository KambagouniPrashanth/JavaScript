// let arr=[2,5,6,4,9]
// function forEach(callback){

//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i],i,arr)
//     }
// }
// let result=arr.filter(function(element,index,list){
//     return element%2==0
// })
// function filter(element,index,list){
//     let aggregatedArray=[]
//     for(let i=0;i<arr.length;i++){
//         callback(arr[i],i,arr)&&aggregatedArray.push(arr[i])
//     }
//     return aggregatedArray
// }
// console.log(result)


//filter function
// const ages = [32, 33, 16, 40]
// const result=ages.filter(function(element,index,list){
//     return element>=18;
// })
// console.log(result)



// const ages = [32, 33, 16, 40]
// const result=ages.filter(function(element,index,list){
//     return element>=18;
// })
// // console.log(result)
// let arr=[]
// arr.push(result)

// // console.log(arr)
// arr.map(function(element,index,list){
//     console.log(element,index,list)
// })

//reduce function
// let arr=[10,3,5]
// let result=arr.reduce(function(previousValue,element,index,list){
//     console.log(previousValue,element,index,list)
//     // 10=previousValue
//     // 10+10=>20
//     // 20+3=>23
//     // 23+5=>28
//     return previousValue+element;

// },10)
// console.log(result)

//another reduce type
let arr=[10,3,5]
let result=arr.reduce(function(total,element,index,list){
    console.log(total,element,index,list)
    // 10=previousValue
    // 10+3=>13
    // 13+5=>18
    
    return total+element;

})
console.log(result)