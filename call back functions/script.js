// function callme(a){
//     console.log(typeof a)
    
// }
// let f=()=>{
//     console.log("inside f function")
//     return 1
// }

// callme(f)//it will tell only call me function details
// callme(f())//it will tell only call me function details
//first the passed function is executed after that calld function is executed

// output of above function
// function
// inside f function
// undefined




// 2nd type

// function callme(a){
//     console.log(typeof a)
    
// }
// let a=10;
// let f=()=>{
//     console.log("inside f function")
//     return 1
// }
// // callme(a)

// callme(f)//it will tell only call me function details
// callme(f())//it will tell only call me function details
//first the passed function is executed after that calld function is executed

// output of above function
// function
// inside f function
// number


// add function with f1 and f2 as arguments

// function add(a,b,f1,f2){
//     let result=a+b;
//     if(result%2==0){
//         f1(result);
//         //console.log("even")
//     }
//     else{
//         f2(result)
//         //console.log("odd")
//     }

// }

// function f1(a){
//     console.log(a)
//     console.log("even")

// }
// function f2(a){
//     console.log(a)
//     console.log("odd")

// }


// add(2,5,f1,f2)




// function add(a,b,f1,f2){
//     let result=a+b;
//     valid(result)//it is executed first bcz it is called first this callstack behaviour
//     function valid(days){
//         if(days>0 && days<=30){
//             console.log("valid")

//         }
//         else{
//             console.log("invalid")
//         }
//     }
    
//     if(result%2==0){
//         valid(result)
//         f1(result);
//         //console.log("even")
//     }
//     else{
//         valid(result)
//         f2(result)
//         //console.log("odd")
//     }

// }

// function f1(a){
//     console.log(a)
//     console.log("even")

// }
// function f2(a){
//     console.log(a)
//     console.log("odd")

// }


// add(2,5,f1,f2)




// 2nd typr of function in validation



function add(a,b,checkNumisEvenorODD){
    let result=a+b;
    valid(result)//it is executed first bcz it is called first this callstack behaviour
    checkNumisEvenorODD(result)
    function valid(days){
        if(days>0 && days<=30){
            console.log("valid")
        }
        else{
            console.log("invalid")
        }
    }
   

}

function checkNumisEvenorODD(result,valid){
    result+=3;
    if(result%2==0){
        console.log("it is even")
    }
    else{
        console.log("it is odd")
    }
   
    valid(reusult)//it will give error

}
add(4,5,checkNumisEvenorODD)
  









