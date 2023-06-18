// let todo=["check for the water","milk","juice",1234,true,{a:b},[1,2,3],1234]
// let todo=["check for the water","milk","juice"]

// console.log(todo[0]);
// console.log(todo.length);
// console.log(todo[0])
// console.log(todo[todo.length-1]);
//accesing element in reverse order
// console.log(todo);
// console.log(todo[todo.length-1]);


let fruit=["apple","banana","orange"]
console.log(fruit);
fruit.push("emily")
//adding the element at the end
console.log(fruit);
fruit.unshift("sapota")
//adding the element at the start
console.log(fruit);

//removing element at the end
fruit.pop()
console.log(fruit);

//removing element at the start
fruit.shift();
console.log(fruit);

let arr=fruit//clone or copy of an array
console.log(`copy of the fruit is arr is:${arr}`)
//if we update any of arr or fruit it will reflect on the both the arrays bcz it is pass by reference


arr.push("mango");
console.log(`After push operation in arr:${arr}`)
console.log(`After push operation in arr and it is reflected the fruit:${fruit}`)

//pass by value
let a=10;
let b=a

console.log(a);
console.log(b);
a=20;
console.log(`after updating the value a=${a}`);
console.log(`after updating the value a=${b}`)
//in pass by value the values not reflected on the both the variable only on updated variable chages

arr[120]="kiwi"
console.log(arr);
console.log(`After push operation in arr:${arr}`)






