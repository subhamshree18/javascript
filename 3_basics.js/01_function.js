function say(){
    console.log("o");
    console.log("m");
    console.log("m");
}
// say()  // FUNCTION EXECUTION


// ADD TWO NUMBERS
function AddTwoNumbers(num1,num2){
    // console.log(num1+num2);
    return num1+num2
}
// AddTwoNumbers(4,3)
// console.log(AddTwoNumbers(4,3));


function LoginUserMessage(username){
    return`${username} just loggedin` 
}
// console.log(LoginUserMessage("subham"))


// CHECKING CONDION ON LOGINUSERMESSAGE()

function LoginUserMessage(username="omm"){
    if(!username){
        console.log("please enter a user name");
        return
    }
    return`${username} just loggedin` 
}
// console.log(LoginUserMessage("subham"))


// SHOPPING CART

function Calculateprice(...num1){ //rest operator
    return num1
}
// console.log(Calculateprice(200,300,400));



function Calculateprice(val1,val2,...num1){ //rest operator
    // console.log (val1,val2, num1)
    return num1
}
// console.log(Calculateprice(200,300,400,500,600));
// Calculateprice(200,300,400,500,600)


// passing object in function
const user={
    username:"subham",
    price:20000
}

function handelobj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}

// handelobj(user)

// passing array in function

const arr=[100,200,300,400]
function returnvalue(getarr){
    return getarr[3]

}
console.log(returnvalue(arr));