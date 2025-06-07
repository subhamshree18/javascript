// const score=400
// console.log(score);


// const balance= new Number(400)
// console.log(balance);// it created an object
// console.log(balance.toString());// object is converted to string
// console.log(balance.toFixed(3));


const num=23.894444
// console.log(num.toPrecision(3));

const hundreds=100000000000000000
// console.log(hundreds.toLocaleString());//according to USA standard
// console.log(hundreds.toLocaleString("en-in"));// according to indian


//*********************************************************************** */
//___________________________MATHS________________________________________//

// const number=-5
// console.log(Math.abs(number));

// const num1=2.5
// console.log(Math.round(num1));// it basically roundoff the digits

// const num2=3.4
// console.log(Math.ceil(num2));// roundoff the digits to next number

// const num3=4.9
// console.log(Math.floor(num3));// it roundoff the digits to lowest number

// RANDOM// /* Math.random() always gives the random value between 0 and 1 */
console.log((Math.random()*10)+1);// here +1 because to avoid 0

console.log(Math.floor(Math.random()*10)+1);// to give a single number

/* Question :
let take two numbers 10 and 20 and give random number between them
*/

const low=10
const high=20
console.log(Math.floor(Math.random()*(high-low+1))+low);





