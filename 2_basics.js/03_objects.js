// if objects are made from constructer then it always treated as SINGLETON 
// Object.create


// OBJECT LITERALS
const mysym=Symbol("key1")

const user={
    name:"SUBHAM",
    "full name":"Subhamshree",
    [mysym]:"mykey1",
    age:20,
    course:"java script",
    email:"abcd@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// TO ACCESS OBJECTS
// console.log(user.name);

// ANOTHER WAY TO ACCESS OBJECT
// console.log(user["name"]);
// console.log(user["full name"]);
// MAIN OBJECTIVE TO USE [] IS TO ACCESS THE KEYS WHICH ARE IN DOUBLE QUOTES
// console.log(user[mysym]);
// console.log(typeof mysym);



user.email="subham@gmail.com"
// Object.freeze(user) // TO LOCK OBJECT WE USE FREEZE METHOD
user.email= "subham@google.com"
// console.log(user);


user.greetings= function(){
    console.log("hello subhamshree");
    
}
console.log(user.greetings); // it gives the function return back 
console.log(user.greetings());

user.greetingTwo= function(){
    console.log(`hello jsuser, ${this.name}`);
    
}
console.log(user.greetingTwo());
