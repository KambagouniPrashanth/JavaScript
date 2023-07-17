// function callme(){
//     console.log("Hellow")
// }
// console.log("before setting timer")
// setTimeout(callme,5000)
// console.log("before setting timer")
//here function are executed asycronous means not step by step 
// which the order of the functions 
//sea above result to understnd asycrionous

// let x=20;
// console.log("1")
// let f1=()=>{
//     console.log("3")
//     x++;

// }
// let f2=()=>console.log("4",x)
// console.log("2")
// setTimeout(f1,1000)
// setTimeout(f2,12000)



// let x=20;
// console.log("1")
// let f1=()=>{
//     console.log("3")
//     x++;
//     console.log(x)

// }
// let f2=()=>console.log("4",x)
// setTimeout(f2,900)
// setTimeout(f1,1000)
// console.log("2")



// console.log(1)
// setTimeout(()=>{
//     console.log(2)
//     setTimeout(()=>{
//         console.log(3)

//     },200)
// },300)//#300-> inside it #200 so 2 will print first and then 3

// setTimeout(()=>{
// console.log(5)
// },550)

// setTimeout(()=>{
//     console.log(4)
//     },0)
// // console.log(4)



// function f(){
//     console.log(2)
// }
// console.log(1)
// queueMicrotask(f)//if the  less time queuemask is printed else settimeout
// console.log(3)
    
setTimeout(()=>{
    console.log(1)
    queueMicrotask(()=>{
        console.log(2)
    })

},10)

queueMicrotask(()=>{
    console.log(3)
    setTimeout(()=>{
        console.log(4)

    })

})





// setTimeout(()=>{
//     console.log(1)
//     queueMicrotask(()=>{
//         console.log(2)
//     })

// },10)

// queueMicrotask(()=>{
//     console.log(3)
//     setTimeout(()=>{
//         console.log(4)

//     })

// })
//queue mask has highest priority