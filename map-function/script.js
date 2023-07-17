// const numbers = [4, 9, 16, 25];
// numbers[10]=64;
// document.getElementById("demo").innerHTML = numbers.map(Math.sqrt);

const numbers = [1,2,3,4];

const new_arr=numbers.map(multiplyWithTen)

new_arr.forEach(element => {
    document.getElementById("demo").innerHTML+= [element].join(",");

   // document.getElementById("demo").innerHTML+= JSON.stringify(element);

});


function multiplyWithTen(element){
    return element*10;
}



