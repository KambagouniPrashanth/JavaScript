let numbers = [4, 9, 16, 25];
numbers[10]=64;
// numbers.forEach(element => {
//     // document.getElementById("demo").innerHTML+= [element].join(" ,");
//     document.getElementById("demo").innerHTML+= [element]+"sr";


// //    document.getElementById("demo").innerHTML+= JSON.stringify(element);

// });
document.getElementById("demo").innerHTML = numbers.map(Squreroot);
function Squreroot(ele){
    return Math.sqrt(ele)
}

numbers = [1,2,3,4];

const new_arr=numbers.map(multiplyWithTen)

new_arr.forEach(element => {
    // document.getElementById("demo").innerHTML+= [element].join(" ,");
    document.getElementById("demo").innerHTML+= [element]+"mb10 ";


//    document.getElementById("demo").innerHTML+= JSON.stringify(element);

});
setTimeout(()=>{
    document.getElementById("demo").innerHTML=numbers.map(multiplyWithTen)

},3000)

function multiplyWithTen(element){
    return element*10;
}



