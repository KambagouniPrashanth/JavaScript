
const sillcontainer=document.getElementById("container")
const tag=document.getElementsByTagName("input")[0];
        tag.addEventListener("keyup",(e)=>{
            const key=e.key;
            const enterdValue=tag.value.trim();
            if(key==="Enter" && enterdValue){
                // console.log(enterdValue)
                // console.log("add the skill")
                const b=document.createElement("b");
                b.innerText=enterdValue;
                b.className="chip"
                
                sillcontainer.appendChild(b)
                //appendnewElementAtFront();

                tag.value="";

                
            }
            // key==="Enter" && !enterdValue &&(tag.value="");
        })
        //  function appendnewElementAtFront(){
        //     let stack=[];
        //     let nodeList=skillcontainer.children;
        //     for(let i=0;i<nodeList.length;i++){
        //         stack.unshift(nodeList[i])
        //         console.log(nodeList[i])
        //         nodeList[i].remove();
        //     }
        //     stack.reverse()
        //     while(stack.length>0){
        //         sillcontainer.appendChild(stack.pop())
        //     }
        // }
        
