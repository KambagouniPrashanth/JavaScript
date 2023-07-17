// let x=Promise.resolve(10)
// console.log(x)
//resolve is static method of promise

//Promise {<fulfilled>: 10}

// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"Prashanth"})
//     },2000)
// })
// let x=Promise.resolve(prom)
// console.log(x===prom)//true
// console.log(prom instanceof Promise)//true

// function resolve(obj){
//     if(obj instanceof Promise)
//        return obj;
//     return new Promise(resolve=>{
//         resolve(obj)
//     })
// }
// let x=resolve(10)
// console.log(x)
// Promise {<fulfilled>: 10}


// function resolve(obj){
//     if(obj instanceof Promise)
//        return obj;
//     return new Promise(resolve=>{
//         resolve(obj)
//     })
// }
// let x=resolve(function(){})
// console.log(x)
// Promise {<fulfilled>: ƒ}

// let a=new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve("a")
//     },1000)
// })

// let b=new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve("b")
//     },3000)
// })

// let c=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("c")
//         // reject("hey")
//     },1000)
// })

// let x=Promise.all([a,b,c])
// setTimeout(()=>{
//     console.log(x)
// },4000)

// Promise {<fulfilled>: Array(3)}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// Array(3)

// let a=new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve("a")
//     },1000)
// })

// let b=new Promise(reject=>{
//     setTimeout(()=>{
//         reject("b")
//     },3000)
// })

// let c=new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve("c")
//     },1000)
// })
// let x=Promise.all([a,b,c])
// setTimeout(()=>{
//     console.log(x)
// },4000)
// Promise {<fulfilled>: Array(3)}




// let a=new Promise(reject=>{
//     setTimeout(()=>{
//         reject("a")
//     },1000)
// })

// let b=new Promise(reject=>{
//     setTimeout(()=>{
//         reject("b")
//     },3000)
// })

// let c=new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve("c")
//     },1000)
// })
// let x=Promise.any([a,b,c])
// x.then(()=>
// console.log(x))

// Promise {<fulfilled>: 'a'}


// Promise {<fulfilled>: 'a'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "a"

// let a=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("a")
//     },1000)
// })

// let b=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("2")
//     },3000)
// })

// let c=new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve("c")
//     },1000)
// })
// let x=Promise.all([a,b,c])
// setTimeout(()=>{
//     console.log(x)

// },4000)



/*let a=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("a")
        })
    })
    
    let b=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("2")
        })
    })
    
    let c=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("c")
        })
    })
    let x=Promise.any([a,b,c])
    setTimeout(()=>{
        console.log(x)
    
    },4000)
    // x.then(()=>{
    //     console.log(x)
    // })*/
    
    
    
    /*let a = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("manjeeth")
        }, 2000)
    })
    
    let b = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("2")
        }, 2000)
    })
    
    let c = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("c")
        }, 1000)
    })
    
    // any method task is to check if any promise is fullfilled => figures out the earliest resolved promise.
    let x = Promise.any([a, b, c])
    
    setTimeout(() => {
        console.log(x) // {rejected, []}
    }, 3000)
    
    x.catch(data => {
        console.log(data)
    })*/

//AggregateError: All promises were rejected
// script.js:205 Promise {<rejected>: AggregateError: All promises were rejected}


/*let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("manjeeth")
    }, 2000)
})

let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2")
    }, 2000)
})

let c = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("c")
    }, 1000)
})

// any method task is to check if any promise is fullfilled => figures out the earliest resolved promise.
let x = Promise.race([a, b, c])
setTimeout(()=>{
    console.log(x)
})*/
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "c"

//if i give same time for all the promises then it fallow the way they intialized
let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("manjeeth")
    }, 1000)
})

let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2")
    }, 1000)
})

let c = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("c")
    }, 2000)
})

// // any method task is to check if any promise is fullfilled => figures out the earliest resolved promise.
let x = Promise.race([a, b, c])
setTimeout(()=>{
    console.log(x)
})
//promise{pending}
//manjeeth printed bcz it is intialized first