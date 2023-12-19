const ages = [32, 33, 16, 40];

document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// const ages = ["Prashanth","Amar","Navven","Ramana"];



// let agesort=(a,b)=>a-b;
function ageSort(a,b){
    return a.length>b.length;
}
new_arr=ages.filter(ageSort)
console.log(new_arr)
new_arr.forEach(element => {
    document.getElementById("demo").innerHTML = element;
});