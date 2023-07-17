// let obj={
//     a:10,
//     b:20,
// }
// console.log(typeof obj)
//object

// let obj={
//     a:10,
//     b:20,
// }
// let parsedString=JSON.stringify(obj)
// console.log(parsedString)
// console.log(typeof parsedString)

// {"a":10,"b":20}
// script.js:13 string

// let string='{"name":"prashanth","age":20}'
// console.log(string)
// console.log(typeof string)
// {"name":"prashanth","age":20}
// script.js:19 string

 let str='{"name":"prashanth","age":20}'

let parsedString=JSON.parse(str)
console.log(parsedString)
console.log(typeof parsedString)
// {name: 'prashanth', age: 20}
// script.js:27 object