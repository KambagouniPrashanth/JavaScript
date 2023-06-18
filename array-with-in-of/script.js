let arr=[1,2,3,4]
for(let x in arr){
    console.log(`${x},index the value is ${arr[x]}`);
}
let arr1=[6,7,3,2]
for(let x of arr1){
    console.log(x,arr1[x-1])
}
//see the console to see the differen of for with in and of
//so arr[x] x value start from 1 because arr elements are 1 2 3 4
//so it is directly accesing the with of
//it is going one index forward that's why i decresed the value at the arr[index-1]
let obj={
    name:"Prashanth",
    age:27,

}
console.log(obj["name"],obj.name)



// let obj2={
//     123name:"Prashanth",
//     age:27,

// }
// //key declaration error
// console.log(obj["name"],obj.123name)

let variables=[
    23,false,undefined,true,
    
       {
        a:10,
        b:20,

       } 
    
]
    


console.log(variables[4].a)
console.log(variables[4]["a"])
console.log(variables[4][a])