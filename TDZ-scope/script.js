// let a=10;//global declaration both a and b
// let b=15
// function test(){
//     let b=10;//local declaration
//     console.log(a+b)
//     return a+b;
// }
// b=30;
// console.log(test())
//first phase creation phase
//execution phase

// let a=10;//global declaration both a and b
// let b=15

// let test=function(){
//     let b=10;//local declaration
//     console.log(a+b)
//     return a+b;
// }
// b=30;
// console.log(test())
//step1 a,b=undefine  test is variable creating phase 
//after that b=30 updated again calling test() so the local variable b with global a value returnd
//at first a=undefined b=undefined test=#reference





// var x=90;
// console.log(x)
// const y="abc"
// let z=true;
// function test(){
//     var a=100;
//     let c=100;
//     console.log(a+c+x);
//     console.log(x+y+z);//type converted into string
//     console.log(x+a+y)//first two variable x and a numbers added
//     console.log("test Function");

    
// }
// test()



// console.log(x)//error:cannot access before intialization
// let x=10;
// console.log(x)



// let x
// function callme(){
//    console.log(y);//error:cannot access before intilization
//     let y=100;
//     let z=200;
//     //console.log(y)
//    // console.log(y+x+z)//can not access

// }
// callme()




// function callme(){
//    console.log(y);//error:cannot access before intilization
//     let y=100;
//     let z=200;
//     //console.log(y)
//     console.log(y+x+z)//can not access

// }
// callme()
// let x;




// function callme(){
//     //console.log(y);//can not access befor intialization
//     let y=100;
//     let z=200;
//     console.log(y+x+z)//NaN

// }
// let x;
// callme()

// function callme(){
//     //console.log(y);//can not access befor intialization
//     let y=100;
//     let z=200;
//     console.log(y+x+z)//NaN

// }
// let x;
// callme()


// TDZ functions


// function x(x,yz){
//     x++,
//     y[1]=20,
//     z={x:"1",y:"2"}
//     console.log(x,y,z)
//     //z=30,//tdzfunction.js:30 
        
//    // Uncaught SyntaxError: Unexpected token '}'
    

// }
// let a=10,b=[100],c={name:"Prashanth"}

// x(a,b,c)
// console.log(a,b,c)



// function parent(){
//     let child=(a)=>{
//         console.log(a+b)//110
//     }
//     let a=20,b=100;
//     return child;
// }
// let a=32,b=50
// let result=parent()
// console.log(result(a+b))//undefined


// function parent(){
//     let a=20;
//     return function(){
//         console.log(a)
//     }

// }
// a=30;
// let result=parent()
// console.log(result());//unfined


let x=200;
if(true){
    let a=20;
    let b=30;
    console.log(a+b)
}
console.log(a)//can not acces before intilization