// alert("Hello World this is alert")
// prompt("do u want to submit this is prompt")
// var age=prompt("Enter the age",18)
// console.log(typeof age)
// if(age>=18){
//     // document.write(age)
//     // window.write("you are eligible"+age)
//     document.write("you are eligible"+age)
// console.log("you are ligible"+age)
// }
// else{
//     // window.write("you are not eligible"+age)
//     document.write("you are not eligible"+age)
//     console.log("you are not eligible"+age)
// }

// confirm("do to want to close this tab this is confirm");

// var radius=prompt("Enter the radius")
// var length=prompt("Enter the length")
// var area=2+radius+length;
// console.log(typeof area)
// console.log(area)

// document.write(area)
// here it is treated the area as string


// var radius=prompt("Enter the radius")
// var length=prompt("Enter the length")
// var area=2*radius*length;
// console.log(typeof area)
// console.log(area)
// document.write(area)



// var radius=parseInt(prompt("Enter the radius"))
// var length=parseInt(prompt("Enter the length"))
// var area=2+radius+length
// var area1=2*radius*length
// console.log(typeof area)
// console.log(area)

// document.writeln(area)
// console.log(typeof area1)
// console.log(area1)

// document.writeln(area1)


// confirm usage
// var isClassTommorow=confirm("Tommorow we have class")
// document.writeln(isClassTommorow)
// console.log(isClassTommorow)

// var radius=parseInt(prompt("Enter the radius"))
// var length=parseInt(prompt("Enter the length"))
// var area=2+radius+length
// var area1=2*radius*length
// console.log(typeof area)
// console.log(area)

// //  the way printing in different ways
// document.writeln(`Area of Rectangle:${area1}`)
// console.log(typeof area1)
// console.log(`Area of Rectangle:${area1}`)

// document.writeln(`Area of Rectangle:${area1}`)
let a=20
let x=()=>{
    return a*10;
}
a=10;
console.log(x(a))

/* in reference call stack      heap
                1) a=undefine      #100
                 x=#100  
                  
                 2)a=20 is updated as
                 a=10 
                 function return the a=10*10=100*/