let obj={}
try{
    console.log("before error")
    throw new Error("random error")
    console.log("after the error")
}
catch(error){
    console.log(`inside catch block,${error}`)

}
// before error
// script.js:8 inside catch block,Error: random error