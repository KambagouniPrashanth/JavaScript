const itemElement=document.getElementById("item")
const containerElement=document.getElementById("container")

// itemElement.addEventListener("dragstart",()=>{
//     console.log("dragstaring the element")
// })
// // itemElement.addEventListener("dragover",()=>{
// //     console.log("drap over the element")
// // })

// itemElement.addEventListener("dragenter",()=>{
//     console.log("drag elemnt enter in container")
//     //whenever the element dragged inside the container and leave then it print
// })
// itemElement.addEventListener("dragleave",()=>{
//     console.log("item leaves the container")
// })

// itemElement.addEventListener("dragend",()=>{
//     console.log("the element drageed end of container")
// })


// containerElement.addEventListener("dragenter",()=>{
//     containerElement.className="active-container";
// })

// containerElement.addEventListener("dragleave",()=>{
//     containerElement.className="inactive-container";
// })

containerElement.addEventListener("dragover",(e)=>{
    e.preventDefault();
    //this one mamking elemnet to not to go to its originala position
})

containerElement.addEventListener("drop",(event)=>{
    event.preventDefault();
    containerElement.appendChild(itemElement)
})
 