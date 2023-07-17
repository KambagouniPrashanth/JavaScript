// this.alert("Hello")
// console.log(this.window)


// console.log(this.a)
// let a=20;
// console.log(this.a)//both are undefined


// console.log(this.a)//undefined
// var a=20;
// console.log(this.a)//20


// var a=10;
// let aa=20;
// console.log(window)


// var a=10;
// function aaa(){
//     console.log("inside aaa")
// }
// console.log(aaa())

// function callme(){
//     console.log("Inside call me")
// }
// window.callme()

// function callme(){
//     console.log("Inside call me")
// }
// this.callme()

// let obj={//#450
//     x:10,
//     y:20,
//     callme:function(){
//         //this=#450 in heap
//         console.log(this)//this keyword refer to the obj reference
//     }
// }
// obj.callme()
// console.log(obj)
// console.log(obj.callme())//undefined



// let obj={//#450
//     x:10,
//     y:20,
//     callme1:function(){
//         //this=#450 in heap
//         console.log(this)//this keyword refer to the obj reference
//     },
//     parent:{//#300
//         a:10,
//         b:40,
//         callme2:function(){
//             //this=#300 in heap
//             console.log(this)

//         }


//     }
// }
// //  obj.callme1()
// obj.parent.callme2()


let obj={//#450
    x:10,
     parent:function(){
            //this=#300 in heap
            console.log(this)
            let obj2={
                x:32,
                callme:function(){
                    console.log(this)
                }

            }
            obj2.callme();
            }
            

        
        }


    

//  obj.callme1()
obj.parent