// let a = 4;
// myFunction();

// function myFunction() {
//   document.getElementById("demo1").innerHTML = a * a;
// } 

const btn=document.getElementById("btn")
function a(){
    let x=10;
    return 10
}
function myFunction(){
    let count=0;
    count+=a();
    document.getElementById("demo2").innerHTML=count;
    return count;
}
let add=(a,b)=>a+b
console.log(add(2,3))

btn.addEventListener("click",myFunction)