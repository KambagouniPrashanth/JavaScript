




const urlofcrypto='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false';

async function fetchStockData(){
    // console.log("called function")
    const response=await fetch(urlofcrypto,{method:"GET"});
    const result=await response.json();
    console.log(result)
    addDataontoUI(result)
    
    
}
fetchStockData()



function addDataontoUI(serverResult){
    
    // const divContainer=document.getElementById("cryptodata")
    //one way of fetch the data to the table
  
    const tbody=document.getElementById("tbody")
   //another way of fetch the data to the table
    serverResult.forEach(item=>{
        let {id,symbol,name,image,current_price}=item;

        const row=document.createElement("tr")
        row.innerHTML=`
        
        <td>${id}</td>
        <td>${symbol}</td>
        <td>${name}</td>
        <td><img src="${image}" alt=""></td>
        <td>${current_price}</td>`
        tbody.appendChild(row)

    })
}

//another methodd
// const urlofcrypto='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';
// async function fetchStockData(){
//     console.log("called function")
//     const response=await fetch(urlofcrypto,{method:"GET"});
//     const result=await response.json();
//     addDataontoUI(result)
    
// }
// fetchStockData()



// function addDataontoUI(serverResult){
//     // const tb=document.getElementsByTagName("table");
//     // const tbody=document.getElementById("tbody")
//     // const divContainer=document.getElementById("cryptodata")
//     const tbody=document.getElementById("tbody")
 
//only for the cheking purpose


//     for(let i=1;i<=serverResult.length;i++){
//         // divContainer.innerHTML=`<span>${name}</span>
//         // <img src="${Image}" alt="">`
//         // document.body.appendChild(divContainer)
//         let {id,symbol,name,image,current_price}=serverResult[i];

//         const row=document.createElement("tr")
//         row.innerHTML=`
        
//         <td>${id}</td>
//         <td>${symbol}</td>
//         <td>${name}</td>
//         <td><img src="${image}" alt=""></td>
//         <td>${current_price}</td>`
//         tbody.appendChild(row)
        

//     }
    
// }