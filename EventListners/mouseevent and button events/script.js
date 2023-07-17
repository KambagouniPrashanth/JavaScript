const x=document.getElementById("myBtn")
const p=document.getElementById("demo")
x.addEventListener("mouseover",()=>{
   
    p.innerText="Mouse over on to me"
})
x.addEventListener("mouseout",()=>{
    p.innerText="Mouse out from from me"
    
})
x.addEventListener("click",()=>{
    p.innerText="Clicked me"
})