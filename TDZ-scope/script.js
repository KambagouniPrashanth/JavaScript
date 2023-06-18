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
//at first a=undefined b=undefined test=





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
//     console.log(y);//undefines
//     let y=100;
//     let z=200;
//     console.log(y+x+z)//can not access

// }
// callme()




function callme(){
    console.log(y);//undefines
    let y=100;
    let z=200;
    console.log(y+x+z)//can not access

}
let x;
callme()