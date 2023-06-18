console.log(1=="1")//this print true
//==compare the value 
console.log(1==="1")
//==compare the value  as well as data type


// operators
// arthematic=> +,-,/.*,% (/,* has highest priority)
// comparistion=> ==,!=,>,>=,<AbortController.<=
// assignment operators=> =,+=,-=,*=,/=,%=
// unarty operators=>++ ,--
// logical operators => &&,||,!
// bitwise operators=> &,|,^(xor),>>,<<,~
 
let a=(true && "abc")
console.log(a)

let b=(false && "abc")
console.log(b)
console.log( "abc"&&true)//based on the second statement the value is  print in && operator
console.log( "abc"&&false)

// in || operator whichever is true statement that will be print even if true true printed

console.log(false||"abc")
console.log(true||"abc")

console.log("abc"||false)
console.log("abc"||true)



