// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve()
//     },2000)
// })

// function succesfulcallback(data){
//     console.log(data,"inside then")

// }
//  let x=prom.then(succesfulcallback)

//  x.then(()=>{
//     console.log("succesful call back x")
//  })

//  x.catch(()=>{
//     console.log("succesful call back   of x is failed")
//  })

// //  undefined 'inside then'
// // script.js:14 succesful call back x


// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      reject()
//     },2000)
// })

// function succesfulcallback(data){
//     console.log(data,"inside then")

// }
//  let x=prom.then(succesfulcallback)

//  x.then(()=>{
//     console.log("succesful call back x")
//  })

//  x.catch(()=>{
//     console.log("succesful call back   of x is failed")
//  })

// succesful call back   of x is failed
// index.html:1 
        
// Uncaught (in promise) undefined



// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      reject()
//     },2000)
// })

// function succesfulcallback(data){
//     console.log(data,"inside then")

// }
//  let x=prom.then(succesfulcallback)
//  setTimeout(()=>{
//     console.log(x)
//  },5000)

//  x.then(()=>{
//     console.log("succesful call back x")
//  })

//  x.catch(()=>{
//     console.log("succesful call back   of x is failed")
//  })

//  succesful call back   of x is failed
// index.html:1 
// Uncaught (in promise) undefined
// Promise.then (async)
// (anonymous) @ script.js:67
// script.js:64 Promise {<rejected>: undefined}



// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve({name:"aravind"})
//     },2000)
// })

// function succesfulcallback(data){
//     console.log(data,"inside then")

// }
//  let x=prom.then(succesfulcallback)
//  setTimeout(()=>{
//     console.log(x)
//  },5000)

//  x.then(()=>{
//     console.log("succesful call back x")
//  })

//  x.catch(()=>{
//     console.log("succesful call back   of x is failed")
//  })


// {name: 'aravind'} 'inside then'
// script.js:100 succesful call back x
// script.js:96 Promise {<fulfilled>: undefined}


// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve({name:"aravind"})
//     },2000)
// })

// function succesfulcallback(data){
//     console.log(data,"inside then")

// }
//  let x=prom.then(succesfulcallback)
//  setTimeout(()=>{
//     console.log(x)
//  },5000)
//  x.then(()=>{
//     console.log("succesful call back x")
//  }).catch(()=>{
//     console.log("succesful call back   of x is failed")
//  })

// {name: 'aravind'} 'inside then'
// script.js:128 succesful call back x
// script.js:125 Promise {<fulfilled>: undefined}



// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve({name:"aravind"})
//     },2000)
// })

// function succesfulcallback(data){
//     console.log(data,"inside then")

// }
//  let x=prom.then(succesfulcallback)
//  setTimeout(()=>{
//     console.log(x)
//  },5000)

//  let y=x.then(()=>{
//     console.log("succesful call back x")
//  })

//  x.catch(()=>{
//     console.log("succesful call back   of x is failed")
//  })

//  setTimeout(()=>{
//     console.log(y)
//  },5000)
//  {name: 'aravind'} 'inside then'
// script.js:155 succesful call back x
// script.js:151 Promise {<fulfilled>: undefined}
// script.js:163 Promise {<fulfilled>: undefined}



// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve({name:"aravind"})
//     },2000)
// })

// function succesfulcallback(data){
//     console.log(data,"inside then")

// }
//  let x=prom.then(succesfulcallback)
//  setTimeout(()=>{
//     console.log(x)
//  },5000)

//  let y=x.then(()=>{
//     console.log("succesful call back x")
//  })
//  y.then(()=>{
//     console.log("succesful call back y")
//  })

//  y.catch(()=>{
//     console.log("succesful call back   of y is failed")
//  })

//  setTimeout(()=>{
//     console.log(y)
//  },5000)

//  {name: 'aravind'} 'inside then'
// script.js:188 succesful call back x
// script.js:191 succesful call back y
// script.js:184 Promise {<fulfilled>: undefined}
// script.js:199 Promise {<fulfilled>: undefined}

// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      reject({name:"aravind"})
//     },2000)
// })

// function succesfulcallback(data){
//     console.log(data,"inside then")

// }
//  let x=prom.then(succesfulcallback)
//  setTimeout(()=>{
//     console.log(x)
//  },5000)

//  let y=x.then(()=>{
//     console.log("succesful call back x")
//  })
//  y.then(()=>{
//     console.log("succesful call back y")
//  })

//  y.catch(()=>{
//     console.log("succesful call back   of y is failed")
//  })

//  setTimeout(()=>{
//     console.log(y)
//  },5000)

//  succesful call back   of y is failed
// index.html:1 
        
//        Uncaught (in promise) {name: 'aravind'}
// Promise.then (async)
// (anonymous) @ script.js:226
// script.js:220 Promise {<rejected>: {…}}
// script.js:235 Promise {<rejected>: {…}}


// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve({name:"aravind"})
//     },2000)
// })

// function succesfulcallback(data){
//     console.log(data,"inside then")

// }
//  let x=prom.then(succesfulcallback)
//  setTimeout(()=>{
//     console.log(x)
//  },5000)

//  let y=x.then(()=>{
//     console.log("succesful call back x")
//  })
//  y.then(()=>{
//     console.log("succesful call back y")
//  })

//  y.catch(()=>{
//     console.log("error callback y")
//  })

//  x.catch(()=>{
//     console.log("error callback x")
//  })
//  setTimeout(()=>{
//     console.log(y)
//  },5000)

//  {name: 'aravind'} 'inside then'
// script.js:264 succesful call back x
// script.js:267 succesful call back y
// script.js:260 Promise {<fulfilled>: undefined}
// script.js:278 Promise {<fulfilled>: undefined}

// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      reject({name:"aravind"})
//     },2000)
// })

// function succesfulcallback(data){
//     console.log(data,"inside then")

// }
//  let x=prom.then(succesfulcallback)
//  setTimeout(()=>{
//     console.log(x)
//  },5000)

//  let y=x.then(()=>{
//     console.log("succesful call back x")
//  })
//  y.then(()=>{
//     console.log("succesful call back y")
//  })

//  y.catch(()=>{
//     console.log("error callback y")
//  })

//  x.catch(()=>{
//     console.log("error callback x")
//  })
//  setTimeout(()=>{
//     console.log(y)
//  },5000)

//  error callback x
// script.js:310 error callback y
// index.html:1 
        
//        Uncaught (in promise) {name: 'aravind'}
// Promise.then (async)
// (anonymous) @ script.js:305
// script.js:299 Promise {<rejected>: {…}}
// script.js:317 Promise {<rejected>: {…}}

// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      reject({name:"aravind"})
//     },2000)
// })


//  let x=prom.then(()=>{
//     console.log("inside succesful callback")

//  })
 


//  x.then(()=>{
//     console.log("x is resolved")
//  })

//  x.catch(()=>{
//     console.log("x is rejected")
//  })


// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      resolve({name:"aravind"})
//     },2000)
// })


//  prom.then(()=>{
//     console.log("inside succesful callback")

//  }).then(()=>{
//     console.log("x is resolved")
//  }).then(()=>{
//     console.log("y is resolved")
//  })

//  inside succesful callback
// script.js:364 x is resolved
// script.js:366 y is resolved
let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     reject()
    },2000)
})


 prom.then(()=>{
    console.log("inside succesful callback")

 }).then(()=>{
    console.log("x is resolved")
 }).catch(()=>{
    console.log("x is rejected")
 }).catch(()=>{
    console.log("y is rejected")
 }).then(()=>{
        console.log("y is resolved")
 })
// x is rejected
//script.js:389 y is resolved



 