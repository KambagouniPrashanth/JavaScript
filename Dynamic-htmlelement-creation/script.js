// const boldelement=document.createElement("b");
// boldelement.innerText="bold text"
// console.log(boldelement)
// const paraElement=document.createElement("p")
// paraElement.innerText="para Text"
// console.log(paraElement)
// const divElement=document.createElement("div")
// console.log(divElement)
// divElement.innerText="div element"
// divElement.append(boldelement,paraElement)

const rootElement=document.getElementById("root")
rootElement.style.border="2px solid green"
rootElement.style.padding="40px"
console.log(rootElement)

function addElement(){
    const boldelement=document.createElement("b");
    boldelement.innerText="Prashanth Kambagouni"
    boldelement.style.border="2px solid red"

    boldelement.style.padding="10px"
   
    const paraElement=document.createElement("p");
    paraElement.innerText="Hello How are you"
    paraElement.style.border="2px solid yellow"
    
   
    paraElement.style.padding="20px"
   


    
    
    rootElement.append(boldelement,paraElement)
    
    
}






