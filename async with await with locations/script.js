/*function somepromise1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Prashanth")
        },1000)
    })
}

function somepromise2(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name+" "+"Kambagouni")
        },1000)
    })
}
// let data=somepromise1()
// let x=somepromise2(data)
// console.log(x)
somepromise1().then((data)=>{
    let x=somepromise2(data);
    x.then((data)=>{
        console.log(data)
    })
})*/

//Prashanth Kambagouni

/*function somePromise1(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("aravind")
        }, 3000)
    })
}

function somePromise2(name){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(name + " "+"samudrala")
        }, 2000)
    })
}

somePromise1().then((data) => {
    // data = aravind 
    let x = somePromise2(data)
    x.then((data) => {
        // data = "aravind"   ""
        console.log(data)
    })
})*/

//aravind samudrala

/*function somepromise1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Prashanth")
        },1000)
    })
}

function somepromise2(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name+" "+"Kambagouni")
        },1000)
    })
}


async function solve(){
    let name=await somepromise1();//it make pause execute the function after getting result only move to next
    let fullname=await somepromise2(name)
    console.log(fullname)
}
solve()
//Prashanth Kambagouni*/

/*\async function callme(){
    let a=await new Promise(resolve=>setTimeout(resolve("prashanth"),1000))
    console.log("3",a)
    let b=await new Promise(resolve=>setTimeout(resolve("kambagouni"),2000))
    console.log("4",b)
    

}
console.log(1)
let x=callme()
console.log(x)*/


/*async function callme(){
    let a=await new Promise(resolve=>setTimeout(resolve("prashanth"),1000))
    console.log("3",a)
    let b=await new Promise(resolve=>setTimeout(resolve("kambagouni"),2000))
    console.log("4",b)
    return a;

}
console.log(1)
let x=callme()
console.log(2)
console.log(x)*/

/*async function callme(){
    console.log(1)
    let a=await new Promise((resolve)=>{
        console.log(2)
        resolve(3)
    },2000)
    console.log(a,"4")
    let b=await new Promise((resolve,reject)=>{
        console.log(4)
        setTimeout(()=>{
            resolve(5)
        })
    })
    console.log(b,"6")
    //  return 10;
}

console.log(0)
let x=callme()
console.log(9)
console.log(x)
x.then((data)=>{
    console.log(data)
})
x.catch((error)=>{
    console.log("called")
    console.log(error.name)
})*/
//0
// script.js:107 1
// script.js:109 2
// script.js:125 9
// script.js:126 Promise {<pending>}
// script.js:112 3 '4'
// script.js:114 4
// script.js:119 5 '6'
// script.js:128 undefined



/*async function callme(){
    console.log(1)
    let a=await new Promise((resolve)=>{
        console.log(2)
        resolve(3)
    },2000)
    console.log(a,"4")
    let b=await new Promise((resolve,reject)=>{
        console.log(4)
        setTimeout(()=>{
            resolve(5)
        })
    })
    console.log(b,"6")
      return 10;
}

console.log(0)
let x=callme()
console.log(9)
console.log(x)
x.then((data)=>{
    console.log(data)
 })*/


// 0
// script.js:143 1
// script.js:145 2
// script.js:161 9
// script.js:162 Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: 10
// script.js:148 3 '4'
// script.js:150 4
// script.js:155 5 '6'
// script.js:164 10




async function callme(){
    let a=new Promise((resolve,reject)=>{
        console.log(1)
        resolve("Vijay")
    })
    console.log(a)
    let b=new Promise((resolve,reject)=>{
        console.log(2)
        resolve("setupathi"+)
    })
    console.log(b)

}
console.log(callme())