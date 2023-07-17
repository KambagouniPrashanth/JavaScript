

let arrayOfIntegers=[8,5,7] 

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
    console.log("function called")
  
    arrayOfIntegers.sort();
    console.log(arrayOfIntegers)
	for(let i=lowerBound;i<=upperBound;i++){
        
        console.log(`the arr value is ,${arrayOfIntegers[i]} ,at the index,${i}`)
		if(arrayOfIntegers[i]!=i){
			console.log(i);
			// return;
		}
	}
      
  }
  findMissingNumber(arrayOfIntegers,5,8)
