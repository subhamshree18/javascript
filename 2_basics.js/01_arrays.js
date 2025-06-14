const arr=[1,2,3,4,5]
console.log(arr);

// ANOTHER WAY TO CREATE AN ARRAY
const arr2=new Array(0,1,2,3)
console.log(arr2);

// METHODS OF ARRAYS


// *******PUSH*******
arr.push(6)  // enter the number at last 
console.log(arr);


// ******POP******
arr2.pop() // delete the last value of array
console.log(arr2);


// ******UNSHIFT******
arr.unshift(9) // enter elemnets at first position
console.log(arr);


// ******SHIFT******
arr.shift() // delete elements from first
console.log(arr);


// *****INCLUDES******
 console.log(arr2.includes(2)); // CHECKS IF VALUE IS PRESENT OR NOT


// ******INDEXOF******
// IT BASICALYY RETURN THE INDEX OF THE VALUE
console.log(arr.indexOf(3));


// ********SLICE AND SPLICE*******
console.log("A",arr);
const myn1= arr.slice(2,4) // here we pass the index of the values and it returns the portion of the array it doesnot make any changes in the original array
console.log("AFTER SLICE",myn1);
console.log("AFTER SLICE ORIGINAL ARRAY",arr);

console.log("B",arr);
const myn2=arr.splice(1,3)
// SPLICE MAKES CHANGES IN THE ORIGINAL ARRAY IT GIVES THE PORTION OF THE GIVEN INDEXES BUT ALSO CHANGES IN THE ORIGINAL ARRAY
console.log("AFTER SPLICE",myn2);
console.log("AFTER SPLICE ORIGINAL ARRAY",arr);




