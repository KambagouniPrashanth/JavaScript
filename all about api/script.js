// const pincode=518176
// const endpoint=`https://api.postalpincode.in/pincode/${pincode}`;
// const response=fetch(endpoint,{method:"GET"})
// response.then(serverResponse=>{
//     console.log(serverResponse)
// })

/*const pincode = 518176
const endpoint = `https://api.postalpincode.in/pincode/${pincode}` ;
const response = fetch(endpoint, {method: "GET"})
console.log(response)
response.then(serverResponse=>{
    console.log(serverResponse instanceof Response)
    let promise=serverResponse.json()
    promise.then(finaldata=>{
        console.log(finaldata)
    })

})*/

// Promise {<pending>}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "pending"
// [[PromiseResult]]
// : 
// undefined
// script.js:13 
// Response {type: 'cors', url: 'https://api.postalpincode.in/pincode/518176', redirected: false, status: 200, ok: true, …}
// body
// : 
// (...)
// bodyUsed
// : 
// true
// headers
// : 
// Headers {}
// ok
// : 
// true
// redirected
// : 
// false
// status
// : 
// 200
// statusText
// : 
// ""
// type
// : 
// "cors"
// url
// : 
// "https://api.postalpincode.in/pincode/518176"
// [[Prototype]]
// : 
// Response
// script.js:16 
// [{…}]
// 0
// : 
// {Message: 'Number of pincode(s) found:9', Status: 'Success', PostOffice: Array(9)}
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)

/*async function fetchPincodeDetails(){
        const pincode = 518176
        const endpoint = `https://api.postalpincode.in/pincode/${pincode}` ;
        const response=await fetch(endpoint,{method:"GET"})
        const result=await response.json()
        // console.log(result)
        addDatatoUI(result)


}
fetchPincodeDetails()

function addDatatoUI(serverResult){
    console.log(serverResult)
    const tb=document.getElementsByTagName("table");
    // const tbody=document.getElementById("tbody")
    // const divContainer=document.getElementById("cryptodata")
    const tbody=document.getElementById("tbody")

    for(let i=1;i<=serverResult.length;i++){
        // divContainer.innerHTML=`<span>${name}</span>
        // <img src="${Image}" alt="">`
        // document.body.appendChild(divContainer)
        let {Name,BranchType,Circle}=serverResult[i];

        const row=document.createElement("tr")
        row.innerHTML=`
        
        <td>${Name}</td>
        <td>${BranchType}</td>
        <td>${Circle}</td>`
        tbody.appendChild(row)
        

    }

}*/

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false

/*const urlofcrypto='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
async function fetchStockData(){
    console.log("called function")
    const response=await fetch(urlofcrypto,{method:"GET"});
    const result=await response.json();
    return result;
}
console.log(fetchStockData())*/



const urlofcrypto='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
async function fetchStockData(){
    // console.log("called function")
    const response=await fetch(urlofcrypto,{method:"GET"});
    const result=await response.json();
    addDataontoUI(result)
    
}
fetchStockData()



function addDataontoUI(serverResult){
    
    // const divContainer=document.getElementById("cryptodata")
    //one way of fetch the data to the table
   /* for(let i=0;i<serverResult.length;i++){
        // divContainer.innerHTML=`<span>${name}</span>
        // <img src="${Image}" alt="">`
        // document.body.appendChild(divContainer)
        let {id,symbol,name,image,current_price}=serverResult[i];

        const div=document.createElement("div")
        div.innerHTML=`
        <span>${id}</span>
        <span>${symbol}</span>
        <span>${name}</span>
         
        <img src="${image}" alt="">
        <span>${current_price}</span>`
        document.body.appendChild(div)

    }*/
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