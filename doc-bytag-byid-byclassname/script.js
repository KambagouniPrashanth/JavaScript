// let tagElement=document.getElementsByTagName("div")
// console.log(tagElement)

// let idElement=document.getElementById("child")
// console.log(idElement)
// idElement.innerHTML="prashanth";
// idElement.className="Prashanth" //changing the classname it will not reflect in html document



//accesing the tagelement
// let tagElement=document.getElementsByTagName("div")

// console.log(tagElement[0])
// console.log(tagElement[1])
// console.log(tagElement[2])


//by using this we can chage the inner text also
// let tagElement=document.getElementsByTagName("div")

// function change(){
//     tagElement[0].innerText="Hey How r u";

// }
// console.log(tagElement[0])

// let divElement=document.getElementsByTagName("div")

// function change(){
//      const target=divElement[0];
//     console.log(target.style.length)
//  }


//let divElement=document.getElementsByTagName("div")

//no of style target tag 
//  function change(){
//     const target=divElement[2];
//     let count=0;
//     for(let x in target.style){
//         count++
//     }
    
//     console.log(`${count} ,these no of styles for the target elemnt`)
//  }



//  let divElement=document.getElementsByTagName("div")

// //no of style target tag 
//  function change(){
//     const target=divElement[2];
    
    
//     for(let x of target.style){
//         console.log(x)
//     }
   
//  }
 

 //printing the style for the target tag
// function change(){
//         const target=tagElement[0]
//         let count=0;
//         //by this we know how many style the targetelement has
//         for(let x in target.style){
//         if(target.style[i]){
           
//             console.log(i,target.style[i])
//         }
//         }
      
// }


//to know the specified tag properties like size,color
// let divElement=document.getElementsByTagName("div")

// function change(){
//     const target=divElement[2];
//     const computedsyle=window.getComputedStyle(target)
//     console.log(computedsyle.fontSize)
//     console.log(computedsyle.color)

// }


// let divElement=document.getElementsByTagName("div")
// //by this we can change the color target tag text color
// function change(){
//     const target=divElement[1];
//     target.style.color="blue"

// }



// let divElement=document.getElementsByTagName("div")
// //by this we can change the color target tag text color
// function change(){
//     const target=divElement[0];
//    console.log(target.children)


// }

// let divElement=document.getElementsByTagName("div")
// //by this we can change the color target tag text color
// function change(){
//     const target=divElement[2];
//    console.log(target.parentNode)
   

// }

// let divElement=document.getElementsByTagName("div")
// //by this we can change the color target tag text color
// function change(){
//     const target=divElement[2];
//    console.log(target.nextSibling)
   

// }


let divElement=document.getElementsByTagName("div")
//by this we can change the color target tag text color
function change(){
    const target=divElement[2];
   console.log(target.parentElement)
   

}


// let divElement=document.getElementsByTagName("div")
// //by this we can change the color target tag text color
// function change(){
//     const target=divElement[1];
//    console.log(target.nextElementSibling)
   

// }


//let divElement=document.getElementsByTagName("div")
//by this we can change the color target tag text color
// function change(){
//     const target=divElement[2];
//     target.style.color="red";   

// }



// let divElement=document.getElementsByTagName("div")

// function change(){
//     const target=divElement[1];
//     target.style.border="2px solid red";   

// }