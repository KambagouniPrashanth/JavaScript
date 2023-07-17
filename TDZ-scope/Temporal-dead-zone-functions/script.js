
// function callme(a,b){
//     //console.log(y);//can not access befor intialization
//    a=50;
// b[1]="abc";
// }

// let x=20, y=[1,3,5]
// callme(x,y)
// console.log(x,y)


// let a=10;
// let b=20;
// let callme=function(a,b){
//     let b=10;
//     console.log(a+b)
// }
// b=15
// callme()



// function x(x,yz){
//     x++,
//     y[1]=20,
//     z={name:"ramesh"}
//     //z=30,//tdzfunction.js:30 
        
//    // Uncaught SyntaxError: Unexpected token '}'
    

// }
// let a=10,b=[100],c={name:"Prashanth"}

// x(a,b,c)
// console.log(a,b,c)



function x(x,y,z){
    x++,
    y[1]=20,
    z={x:"1",y:"2"}
    console.log(x,y,z)
    //z=30,//tdzfunction.js:30 
        
   // Uncaught SyntaxError: Unexpected token '}'
    

}
let a=10,b=[100],c={name:"Prashanth"}

x(a,b,c)
console.log(a,b,c)