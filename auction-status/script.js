

const endpoint = `https://gauravgitacc.github.io/postAppData/auctionData.json`
const container=document.getElementById("container")
let backgroundColorMapping={
    "APPROVED":"blue",
    "PENDING":"yellow",
    "CANCELLED":"red",
    "COMPLETED":"green",

}

let textColorMapping={
    "APPROVED":"white",
    "PENDING":"black",
    "CANCELLED":"white",
    "COMPLETED":"white",
}


function appendDataOnUI(data){
    data.forEach(item => {
          const {status, caseNumber, fromLocation, toLocation, fare, date} = item ;

          const card=document.createElement("div")
          card.className="card";
          
          function navigate(){
            // console.log(item)
            let a=document.createElement("a");
            a.href='./auction.html?case_number=${caseNumber}'
            document.cookie=`case_number=${caseNumber};path=/auction-status/auction.html`;
            a.click();

          }
          card.innerHTML=`
          <div class="top-container">
              <div class="left">
                  <span class="status" style="color:${textColorMapping[status]}; background-color:${backgroundColorMapping[status]};">${status}</span>
                  <span>${caseNumber}</span>

              </div>
              <div class="right">
                  ${date}
              </div>

          </div>
          <div class="bottom-container">
              <b class="from">${fromLocation}</b>
              <p class="to">${toLocation}</p>
              <b class="price">${fare}</b>

          </div>`;
      card.addEventListener("click",navigate)
      container.appendChild(card)
      
        
    });
}

async function fetchauctionData(){
    try{
        const response=await fetch(endpoint,{method:"GET"})
        const result=await response.json();
        console.log(result)
        appendDataOnUI(result)

    }
    catch(error){
        alert(error.message)
    }
    
}

fetchauctionData();


