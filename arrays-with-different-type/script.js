let Product={
name:'Red Mi',
model:'8 Pro',
Price:15000,
details:{
    processor:'snap Drogen',
    ram:'6GB',
    camera:'16MP',
    storage:'128 GB',
    battery:'4500mAh',

},
colors: [
    "black","white","gray"
],
available:true

    

}
// console.log(Product.details)
// console.log(Product.details.ram)
// console.log(Product.details["ram"])//second way of accesing elements from object array

// console.log(Product.Price)
// console.log(Product.colors)
// console.log(Product.colors[0])//second way accesing from the array type
// console.log(Product.colors[1])//second way accesing from the array type
// console.log(Product.colors[2])//second way accesing from the array type

// console.log(`No of the colors in${Product.name} is ${Product.colors.length}`)
// console.log(`Batter backup of${Product.name} is ${Product.details.battery}`)
// console.log(`Storage of${Product.name} is ${Product.details.storage}`)





if(Product.available){
    console.log("The Product is Available")
}
else{
    console.log("The Product is Not Available")
}
for(let x in Product){
    console.log(x,Product[x])
}
Product.available=false;
if(Product.available){
    console.log("The Product is Available")
}
else{
    console.log("The Product is Not Available")
}

// for(let x of Product){
//     console.log(x,product[x])
// }
// let count=0;
// for(let i=0;i<library.length;i++){
//     if(library[i].readingStatus==true){
//         count++
//     }
// }
// return count;