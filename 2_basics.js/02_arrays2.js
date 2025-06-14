const marvel_heros=["ironman","thor","spiderman"]
const dc_heros=["batman","flash","superman"]

/* TO MERGE TWO ARRAYS THERE ARE SEVERAL METHODS
    PUSH()
    CONCAT()
    SPREAD OPERATOR
*/


marvel_heros.push(dc_heros)
console.log(marvel_heros);  // IN PUSH WE GOT ARRAY OF ARRAYS


const all_heros= marvel_heros.concat(dc_heros)
console.log(all_heros); // IN CONCAT WE GOT THE SINGLE ARRAY


const heros=[...marvel_heros,...dc_heros]  // THIS IS SPREAD OPERATOR WE USE THIS OPERATOR MOST OF THE TIMES WE CAN MERGE MANY ARRYS BY THIS OPERATOR IN A SINGLE SYNTAX
console.log(heros);


// *********FLAT*********

const arr=[1,2,3,[4,5,6,[7,8,9]]]
const arr1=arr.flat(Infinity) // IN BEACKETS WE SPECIFIES THE DEPTH OF THE ARRAY MEANS AT WHAT DEPTH WE WANT TO SOLVE THE  ARRAY... IT BASICALY GIVES THE SINGLE ARRAY
console.log(arr1);

// ***********Array.from()*************
const name="subham"
console.log(Array.from(name));

// console.log(Array.from({name:"subham"}));// it gives an empty array because we donot specify to make which to array 

let score1= 100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
