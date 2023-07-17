// console.log("before erro")
// console.log(a)
// console.log("after the error")
// before erro
// script.js:2 
        
//        Uncaught ReferenceError: a is not defined
//     at script.js:2:13
// index.html:41 Live reload enabled.
// :5501/favicon.ico:1 
      
//  Failed to load resource: the server responded with a status of 404 (Not Found)
//whenever the error encontered in the code at after specific line,so after that line remaining statement are not executed to resolve this we use exceoptin handling


// console.log("before erro")
// try{
//     console.log(a)
// }
// catch(e){
//     console.log("error enconterd")
// }

// console.log("after the error")




// let obj={}

// try{
//     console.log("before the error")
//     console.log(obj.fullname)
//     console.log("after the error")
// }
// catch(e){
//     console.log("catch block")

// }
// console.log("crucial code")
// before the error
// script.js:33 undefined
// script.js:34 after the error
// script.js:40 crucial code




// let obj={}

// try{
//     console.log("before the error")
//     console.log(obj.fullname.firstname)
//     console.log("after the error")
// }
// catch(e){
//     console.log("catch block")

// }
// console.log("crucial code")





// let obj={}

// try{
//     console.log("before the error")
//     console.log(obj.fullname.firstname)
//     console.log("after the error")
// }
// catch(e){
//     console.log("catch block",e)

// }
// console.log("crucial code")
// before the error
// script.js:74 catch block TypeError: Cannot read properties of undefined (reading 'firstname')
// at script.js:70:30
// script.js:77 crucial cod





// let obj={}

// try{
//     console.log("before the error")
//     console.log(obj.fullname.firstname)
//     console.log("after the error")
// }
// catch(e){
//     console.log("catch block",e.name)

// }
// console.log("crucial code")

// before the error
// script.js:95 catch block TypeError
// script.js:98 crucial code



// let obj={}

// try{
//     console.log("before the error")
//     console.log(obj.fullname.firstname)
//     console.log("after the error")
// }
// catch(e){
//     console.log("catch block",e.message)

// }
// console.log("crucial code")

// before the error
// script.js:114 catch block Cannot read properties of undefined (reading 'firstname')
// script.js:117 crucial code


// let obj={}

// try{
//     console.log("before the error")
//     console.log(obj.fullname.firstname)
//     console.log("after the error")
// }
// catch(e){
//     console.log("catch block",e.stack)

// }
// console.log("crucial code")

// before the error
// script.js:132 catch block TypeError: Cannot read properties of undefined (reading 'firstname')
// at http://127.0.0.1:5501/Exceoption-try-catch-finally/script.js:128:30
// script.js:135 crucial code




// try{
//     console.log("before erro")
//     console.log(a)
//     console.log("after errror")
// }
// catch(e){
//     console.log("error enconterd",e)
// }

// console.log("crucial code")
// before erro
// script.js:132 error enconterd ReferenceError: a is not defined
//  at script.js:128:17
// script.js:135 crucial code






// try{
//     console.log("before erro")
//     console.log(a)
//     console.log("after errror")
// }
// catch(e){
//     console.log("catch block",e.name)
// }

// console.log("crucial code")

// before erro
// script.js:151 catch block ReferenceError
// script.js:154 crucial code

// let obj={}

// try{
//     console.log("before the error")
//     console.log(obj.fullname.firstname)
//     console.log("after the error")
// }
// catch(e){
//     console.log("catch block",e)

// }
// finally{
//     console.log("whatever the message we want to display that placed in finally block")
//     console.log("always gets executed")
// }


// before the error
// script.js:188 catch block TypeError: Cannot read properties of undefined (reading 'firstname')
// at script.js:184:30
// script.js:192 whatever the message we want to display that placed in finally block
// script.js:193 always gets executed


// let prom=new Promise((resolve,reject)=>{
//     console.log(a)
//     resolve()
// })
// console.log(prom)
// catch(prom)


// let error=new Error("custom error")
// console.log(error)
// console.log(error.name)
// console.log(error.message)
// console.log(error.stack)

// Error: custom error
// at script.js:212:11
// script.js:214 Error
// script.js:215 custom error
// script.js:216 Error: custom error
// at script.js:212:11

// class CustomException extends Error{
//     constructor(message){
//         super(message)
//         console.log(this)
//     }
// }


// let custom=new CustomException("random message")
// console.log(custom)


// Error: random message
// at script.js:233:12
// script.js:234 Error: random message
// at script.js:233:12

// class A extends Error{
//     constructor(message){
//         super(message)
//         this.name="A"
//     }
// }

// class B extends Error{
//     constructor(message){
//         super(message)
//         this.name="B"
//     }
// }


// try{
//     throw new A("some error")
// }
// catch(error){
//     let p=document.createElement("p");
//     p.innerText=error;
//     document.body.appendChild(p)
//     if(error.name=="A"){
//         p.style.color="red";
//     }
//     else if(error.name=="B"){
//         p.style.color="red";
//     }
//     else{
//         p.style.color="yellow";
//     }
// }



// class A extends Error{
//     constructor(message){
//         super(message)
//         this.name="A"
//     }
// }

// class B extends Error{
//     constructor(message){
//         super(message)
//         this.name="B"
//     }
// }


// try{
//     throw new B("some error")
// }
// catch(error){
//     let p=document.createElement("p");
//     p.innerText=error;
//     document.body.appendChild(p)
//     if(error.name=="A"){
//         p.style.color="red";
//     }
//     else if(error.name=="B"){
//         p.style.color="green";
        
//     }
//     else{
//         p.style.color="yellow";
//     }
// }


// let prom=new Promise((resolve,reject)=>{
//     try{
       
//         throw new Error("custome error")
//     }
//     catch(error){
//         console.log("nothing")
//     }

// })
// console.log(prom)
// nothing
// script.js:322 Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined



// let prom=new Promise((resolve,reject)=>{
//     try{
//         resolve()
//         throw new Error("custome error")
//     }
//     catch(error){
//         console.log("nothing")
//     }

// })
// console.log(prom)

// nothing
// script.js:338 Promise {<fulfilled>: undefined}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined



// let prom=new Promise((resolve,reject)=>{
//     try{
//         reject();
//         throw new Error("custome error")
//     }
//     catch(error){
//         console.log("nothing")
//     }

// })
// console.log(prom)


//error

// let prom=new Promise((resolve,reject)=>{
//     try{
//         // resolve()
//         console.log(a,"a is available")
//     }
//     catch(error){
//         console.log(" a not available")
//     }
// })
// prom.then((data)=>{
//     console.log(data,"inside then")
// })

//a not available
//undefined


let prom=new Promise((resolve,reject)=>{
    let obj={name:"Prashanth"}
    try{
        resolve()
        console.log(obj.name.name)
    }
    catch(error){
        console.log(" obj  not available")
    }
})
prom.then((data)=>{
    console.log(data,"inside then")
})

// undefined
// script.js:388 undefined 'inside then'