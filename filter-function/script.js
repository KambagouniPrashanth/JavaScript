// const ages = [32, 33, 16, 40];

// document.getElementById("demo").innerHTML = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

const ages = ["Prashanth","Amar","Navven","Ramana"];



// let agesort=(a,b)=>a-b;
function ageSort(ages.a,ages.b){
    return ages.a-ages.b;
}
new_arr=ages.filter(ageSort)
new_arr.forEach(element => {
    document.getElementById("demo").innerHTML = element;
});