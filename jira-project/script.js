const createissueButton=document.getElementById("create-issue")
const box=document.getElementsByClassName("box")[0]




const newmodel=document.createElement("div")
newmodel.className="model"
newmodel.id="model"
newmodel.innerHTML=` <div class="model-body">
<form class="form">
    <div class="addtask">
        <p  style="font-size: 20px;color:#182A4D">Add Task</p>

        <i class="fa-solid fa-xmark" onclick="closeModel()"></i>
    </div>

    <input type="text" name="taskname" id="taskname"  placeholder="Task name" required>
    <textarea name="description" id="description" placeholder="Description" rows="3" required></textarea>
    <input type="text" name="assinee" placeholder="assinee" id="assinee" required>
    <select name="status" id="status">

        <option value="TODO" id="TODO">Todo</option>
        <option value="IN_PR" id="IN_PR">In_PR</option>
        <option value="COMPLETED" id="COMPLETED">COMPLETED</option>


    </select>
    <button type="submit">Create</button>

</form>
</div>`

function closeModel(){
newmodel.remove();
}
/* ${task.taskname}
${task.description}
${task.assinee}
${nickName}
${task.status}
*/
function addTask(task){
   
    const card=document.createElement("div")
    
    card.className="card"
    console.log(task)
    
    const words=task.assinee.split(" ");
    let nickName=words[0][0].toUpperCase();
    if(words.length>1){
        nickName+=words[words.length-1][0].toUpperCase();
    }
    card.innerHTML=`<p class="taskname">${task.taskname}</p>
    <p class="description"> ${task.description}</p>
    <div class="status-container">
     <p data-short-name="${nickName}"  class="assinee">${task.assinee}</p>
    <p class="status">${task.status}</p>
    </div>`; 
   // console.log(task.taskname)
   //console.log(task.status);
   
    const box=document.getElementById(task.status);
    // console.log(task.status)
    box.appendChild(card)
    // card.innerHTML="";

}






createissueButton.addEventListener("click",(e)=>{
    document.body.appendChild(newmodel);
    const form=document.querySelector(".form")
    // form.removeEventListener("submit")

    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const formElement=event.target;
        const userdata={
            taskname: formElement["taskname"].value,
            assinee: formElement["assinee"].value,
            description: formElement["description"].value,
            status: formElement["status"].value,

        }
       closeModel()
       addTask(userdata)
       //console.log(userdata)

    })
   


})



