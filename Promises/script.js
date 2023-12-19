

/*console.log("custom Promises")
class CustomPromise{
    Constructor(executor){
        console.log(typeof executor)
    }
    resolve(){
        console.log("resolved")
    }
    reject(){
        console.log("rejected")
    }
}

let promise1=new CustomPromise((executor)=>{
    console.log("function")
})
console.log(promise1.resolve())
console.log(promise1.Constructor())*/


// class CustomPromise{
//     Constructor(executor){
//         console.log(this.resolve,this.reject)
//     }
//     resolve(){
//         console.log("resolved")
//     }
//     reject(){
//         console.log("rejected")
//     }
// }
// const executor=()=>{
//     console.log("inside executor")
// }

// let promise1=new CustomPromise((executor)=>{
//     console.log("function")
// })
// //console.log(promise1.resolve())

// console.log(promise1.executor)


// class CustomPromise{
//     Constructor(executor){
//         console.log(this.resolve,this.reject)
//     }
//     resolve(){
//         console.log("resolved")
//     }
//     reject(){
//         console.log("rejected")
//     }
// }
// const executor=()=>{
//     console.log("inside executor")
// }

// let promise1=new CustomPromise(executor)
// console.log(promise1)

// class Prom{
//     Constructor(executor){
//         this.state="pending";
//         executor(this.resolve,this.reject)

//     }
//     resolve=()=>{
//         this.stage==="pending" &&(this.stage="fullfilled");
//         if(this.successCallback){
//             queueMicrotask(()=>{
//                 this.successCallback;
//             })
//         }

//     }
//     reject=()=>{
//         this.stage==="pending" &&(this.stage="rejected");

//     }
//     then=(successCallback)=>{
//         console.log("inside succesfulcallback method")
//         this.successCallback=successCallback
//     }
    

// }


// let p=new Prom((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve()

//     },4000)
// })
// console.log(p)
// p.then(()=>{
//     console.log(p)
//     console.log("SuccessfullCallback Method")
// })





// function fetch(){
//     let prom=new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("data load after 3s")

//             resolve();//by calling this function stage=fulfiled
//         },3000)
//     })
//     return prom;
// }

// let prom=fetch();
// prom.then(()=>{
//     console.log("Succcess")
// })
// prom.catch(()=>{
//     console.log("failure")
// })


// function fetch(){
//     let prom=new Promise((resolved)=>{
//         setTimeout(()=>{
//             console.log("data after 3s")
//             resolved();


//         },5000)
//     })
//     return prom;
// }

// let prom1=fetch()

// prom1.then(()=>{
//     console.log("success")
// })
// prom1.catch(()=>{
//     console.log("failure")
// })



// function fetch(){
//     let prom=new Promise((reject)=>{
//         setTimeout(()=>{
//         console.log("data load after 3s")

//         reject();
//         },3000)
//     })
//     return prom;
// }

// let prom=fetch();
// console.log(prom)
// prom.then(()=>{
//     console.log("Succcess")
// })
// prom.catch(()=>{
//     console.log("failure")
// })


/*let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name:"prashanth"})
    },3000)
})

prom.then((data)=>{
    let time=1000;
    for(let i=0;i<5;i++){
        setTimeout(()=>{
            console.log(data.name);
            time=time+1000;
            console.log(time)

        },time)
    }
    
    console.log("succesful listner")
})*/


// succesful listner
// script.js:182 prashanth
// script.js:184 2000
// script.js:182 prashanth
// script.js:184 3000
// script.js:182 prashanth
// script.js:184 4000
// script.js:182 prashanth
// script.js:184 5000
// script.js:182 prashanth
// script.js:184 6000


let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       
            const responsedata=[
                "chnnai",
                "bengolore",
                "mumbai",
                "hyderabad",
                "pune"
            ]
            resolve(responsedata)
    },5000)
})

prom.then((data)=>{
    let time=1000;
    for(let i=0;i<5;i++){
        time=time+1000;
        setTimeout(()=>{
            console.log(data[i]);
            // console.log(time)

        },time)
        
    }
    
    console.log("succesful listner")
}).catch(e=>console.log(e))




// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let data=[{
//             name:"prashanth",
//             age:21,
//             Employee:true,
//         },
//         {
//             name:"ramesh",
//             age:21,
//             Employee:false,
//         },
//         {
//             name:"Rakesh",
//             age:21,
//             Employee:false
//         }
//     ]
//        // resolve({name:"prashanth"})
//        reject(data)
//     },3000)
// })

// prom.then((data)=>{
//     console.log(data);
//     console.log("succesful listner")
// })

// prom.catch((data)=>{
//     console.log(data);
//     console.log("failure")
// })


// function makeNetworkCall(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const responsedata=[
//                 "chnnai",
//                 "bengolore",
//                 "mumbai",
//                 "hyderabad",
//                 "pune"
//             ]
//             resolve(responsedata)
//         })
//     })
// }
// const container=document.getElementById("cities-container")

// function appendDataOntoUi(citilist){
//     let time=1000;
//     for(let i=0;i<5;i++){
//         // citilist.map(city=>{
//             const p=document.createElement("p");
//             p.innerText=citilist[i];
//             container.appendChild(p)
//         // })
//         time=time+1000;

//     }
    

        //   let city=citilist;
        //     setTimeout((city)=>{
        //         const p=document.createElement("p");
        //         p.innerText=city;
        //         container.appendChild(p)
        //         console.log(time)
                
    
        //     },100)
            
        // }
    
    // citilist.map((city)=>{
       
    //     setTimeout(()=>{
           
    //         console.log(time)
    //         time=time+1000;
        
    //     },time)
    // }
//}
       
       


    // })

    



// let promise=makeNetworkCall();

// promise.then((data)=>{
    

//     appendDataOntoUi(data)

// })



// Created a for loop 
// for (let i = 0; i < 5; i++) {
//   // Delay each iteration by 1 second
//   setTimeout(function() { 
//     console.log(i); 
//   }, 1000 * i, i); 
// }


// let prom1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"prashanth"})
//     },2000)

// })
// let x=prom1.then((data)=>{
//     console.log(data);
//     return "kambagouni"
// })
// setTimeout(()=>{
//     console.log(x)
// })
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "kambagouni"
// script.js:344 {name: 'prashanth'}



// let prom1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"prashanth"})
//     },2000)

// })
// let x=prom1.then((data)=>{
//     console.log(data);
//     return  data+" "+"kambagouni"
// })
// setTimeout(()=>{
//     console.log(x)
// },2000)

// {name: 'prashanth'}
// script.js:366 Promise {<fulfilled>: '[object Object] kambagouni'}


// let prom1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"prashanth"})
//     },2000)

// })
// let x=prom1.then((data)=>{
//     console.log(data);
//     return  {surname:"kambagouni"}
// })
// setTimeout(()=>{
//     console.log(x)
// },2000)



/*let prom1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("a")
    },2000)

})
prom1.then((data)=>{
    console.log(data);
    return data+"c";
}).then((data)=>{
    console.log(data)
})*/
//a
//script.js:399 ac