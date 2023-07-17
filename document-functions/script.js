

// let htmlNode=document.getElementById("abc")

// htmlNode.innerText="Kambagouni Prashanth"

// console.log(htmlNode.className)
//by doing this we can remove the classname
// htmlNode.className="";

//to remove node from html
// htmlNode.remove()
// htmlNode.success;
const paraElement=document.getElementById("abc")
function changetext(){
    paraElement.innerText=paraElement.innerText==="prashanth"?"Kalyan":"kamal";
  
}

function changecolor(){
    paraElement.className=paraElement.className==="danger"?"success":"danger"
}