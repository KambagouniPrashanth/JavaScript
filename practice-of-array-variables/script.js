let a=(true&&20)
console.log(a)
a=(name&&true)
console.log(a)
a=("name"&&true)
console.log(a)
//here the first statement is string it will print true
a=(true&&"name")
console.log(a)
//here the first operand is true so second operand will printed
/*true && ? => 
true && ? =>true
false&& ? =>false*/
//here one of the statement is true so other value can be any type that will printed
//while executing an expression when the result is judgable with the first operand CPU won't consider the second operand(ignores it)
// a=("name"&&false)
// console.log(a)

// a=(false&&"name")
// console.log(a)
//here one of the statement is false so other value can be any type that will printed as false


a=("name"||true)
console.log(a)
a=(true||"name")
console.log(`the a is updated with,${a}`)

for(let i=0;i<4;i++){
    console.log(`preincrement inside let,${i++}`)
    //after printing the i is updated
    //print(0)=>up=>1
    //2=>2<4
    //print(0)=>up=>3
    //4=>4<4 comes out of the loop
}
let i=0;
while(i<4){
    console.log(`preincrement,${i++}`)
    console.log(`postincrement,${i++}`)
}