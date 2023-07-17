//function in javasript

// function add(a,b){
//     console.log(a+b);//console will only print does not return anything
// }
// console.log(add)
// add(4,5)


// function add(a,b){
//    return a+b
// }
// console.log(add(6,4));
//document.writeln(add(4,5))



// var multiply=function add(a,b){
//     console.log(a*b)
// }
// console.log(multiply)

// let multiply=(a,b)=>a*b
// console.log(multiply)//multiply store the (a,b)=>a*b
// console.log(multiply(10,5))


// var multiply=function add(a,b){
//     console.log(a*b)
// }
// console.log(multiply(4,5))
// document.writeln(multiply(5,6))




// var multiply=function add(a,b){
//     return a*b
// }
// console.log(multiply(2,3))
//document.writeln(multiply(4,5))


// var a=prompt("enter the value of a")
// var b=prompt("enter the value of b")

// var multiply=function add(a,b){
//     return a*b
// }
// console.log(multiply(a,b))
// document.writeln(multiply(a,b))



// var a=prompt("enter the value of a")
// var b=prompt("enter the value of b")

// var multiply=function add(a,b){
//     return a+b
// }
// console.log(multiply(a,b))
// document.writeln(multiply(a,b))



// var num=prompt("Enter a number")


// var checkNumEven=function(num){
//     console.log(typeof num%2);
//     if(num%2==0)
//     return true
//     else
//     return false
// }
// console.log(checkNumEven(num))
//ocument.writeln(checkNumEven(num))



// //anonymous function
// var num=prompt("Enter a number")

// var checkNumEven=(num)=>{
//     console.log(typeof num%2);
//     if(num%2==0)
//     return true
//     else
//     return false
// }
// console.log(checkNumEven(num))
// document.writeln(checkNumEven(num))


// //anonymous function
// var sum=(a,b)=>a+b
// console.log(sum(10,15));
// document.writeln(sum(20,25))



// let x=10;
// console.log(typeof x)

// function callme(a,b){
//     console.log(a+b);
//     return "Prashanth"
// }
// let y=callme(4,5);
// console.log(y)
// console.log(typeof y)



// function a(){
//     console.log("inside a")
//     function b(){
//         console.log("inside b")
//     }

// }
// b()//error

// function x(a,b){
//     console.log(a+b)
   

// }
// x(2,3,5)

// // == compare value 1=="1"
// function com(p1,p2=p){
//     if(p1!==p2){
//         console.log("NOt the same")
//     }
//     else
//     {
//         console.log("They are same")
//     }
// }
// const p={name:'Li'};
// com(p)

// let str="Prashanth"
// console.clear()

// let arr=function add(a,b,c){
//     console.log(a+b+c)//NaN
//     // return a+b+c;

// }
//  console.log(arr(1,2))//undefined error this
// // c is not intialized so it will assing with undefined datat type
// // if any number+undefined=undefined

// let arr1=function add(a,b,c){
//     console.log(a+b+c)
//     // return a+b+c;
// }
// console.log(arr1(1,2,3))//if did not return anything it will throw undefines data type


// let arr3=function add(a,b,c){
//     console.log(a+b+c)
//     return a+b+c;
// }
// console.log(arr3(1,2,3))//if did not return anything it will throw undefines data type
// //till function of same with different arguments

// console.clear()

// let money=(a,b)=>{
//     console.log(a+b);
//     return a+b;
// }
// console.log(money(10,30))

// let callme=(a,b)=>{
//     return a+b;
// }
// console.log(callme(8,9))

// callme=(a,b)=>a+b
// console.log(callme(90))

// let single=a=>a
// console.log(single(10))
// let arrayOfIntegers=[2,3,4]
// function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
//     // do not return
//     // print the number here
//       let sum=0;
//       for(let i=0;i<arrayOfIntegers.length;i++){
//           sum+=arrayOfIntegers[i];
//       }
//       let nthsum=upperBound*(upperBound+1);
//     //   console.log(nthsum)
//     //   nthsum=nthsum/2;
//     //   console.log(nthsum)
//       nthsum=nthsum/2;
//       console.log(nthsum-sum);
      
//   }

  
 
// findMissingNumber(arrayOfIntegers,4,1)  
// let a=12345
// while(a!=0){
//     console.log(a%10);
//     a=a/10;
// }

// let students=[["Student 1", "A"], ["Student 2", "B"], ["Student 3", "C"], ["Student 4", "D"]]
// function sortStudents(arr) {
//     // return the sorted array
//    // do not console.log here
//      let sortStudents=[]
//      arr.sort();
//      for(let i=0;i<arr.length;i++){
         
//      sortStudents.push(arr[i][0]);
//      }
//      return sortStudents;
//  }
 
// // console.log(sortStudents(students))
// let Email="kambagount"
// let Password=12345;
// let arr=[]
// arr["email"]=Email,
// arr["password"]=password
// console.log(arr)



function mul(x) {
    return function(y) {
      return function(z) {
        return x*y*z;
      };
    }
  }
    
  console.log(mul(2)(3)(5));
