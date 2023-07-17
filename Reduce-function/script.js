const numbers = [375, 50, 25,100];

document.getElementById("demo").innerHTML=numbers.reduce(myfunction)
//first number is taking as total and remaining number is substracted form 0th index number
function myfunction(total,num){
   return total-num;
}