let mydate=new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// to create a specific date

// let mycreatedate= new Date(2025,0,23)
// let mycreatedate= new Date(2025,0,23,5,6)
let mycreatedate= new Date("2025-1-23")
// console.log(mycreatedate);

//TIMESTAMP

let mystamp=Date.now()
console.log(mystamp);
console.log(mycreatedate.getTime());// returns in miliseconds

console.log(Math.floor(Date.now()/1000));// returns in seconds

