function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise((resolve, reject)=> {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
     resolve({message:"Ok"})
    } else {
      reject({message:"Error"})
    }
  });
  myPromise.then((data)=>{
      myDisplayer(data.message)
  })
  