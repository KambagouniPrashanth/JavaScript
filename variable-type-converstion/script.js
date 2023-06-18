// let arr=function add(a,b,c){
//     console.log(a+b+c)//NaN
//     // return a+b+c;
//     //in console 2+3+undefined=NaN

// }
// //the function does not return anything bcz of that it print undefined
// console.log(arr(1,2))//undefines


// let arr=function add(a,b,c){
//     console.log(a+b+c)//NaN
//         //in console 2+3+undefined=NaN

//      return a+b+c;

// }
// //2+3+undefined=NaN
// console.log(arr(1,2))//undefines


//in the function if we give arguments is greater than the  parameters it will take only the parameter values return a value 
// let arr1=function add(a,b,c){
//         console.log(a+b+c)//6
//          return a+b+c;
//     }
// console.log(arr1(1,2,3,4))//if did not return anything it will throw undefines data type
// //6 returns
// let a;
// console.log(a)//undefined data type return for non-intialized variables

// let func=a=>{
//     let r=console.log(2*a)
//     return r;
// }
// console.log(func(10))


function a(){
    return 10/2;
}
function b(){
    return 2*a();
}
console.log(b())