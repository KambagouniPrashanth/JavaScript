// navigator.geolocation.getCurrentPosition((position)=>{
//     console.log("success",{position})
// },()=>{
//     console.log("first")
// })

// navigator.geolocation.getCurrentPosition((position)=>{
//     console.log("success",{position})
// },(error)=>{
//     console.log(error)
//     alert("please allow the location")
//     console.log("first")
// })

const para=document.getElementById("demo")
const btn=document.getElementById("btn")
function geoLocation(){
    console.log("function called")
    try{
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    catch(error){
        para.innerText=error;

    }
}
function showPosition(){
    para.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}
btn.addEventListener("click",geoLocation)
