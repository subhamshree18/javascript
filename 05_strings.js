const name="subham"
const surname=" mohanty"
console.log(name+surname); //it a way to write strings but we have newer way to write strings
console.log(`my name is ${name} ${surname}`);// we can write strings as this

// // we can declare a string using "new" keyword
// const name= new String("subham")

// // ***********************************************************************************************
// // string function

const gameName=new String("subham-hc")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("-"))
console.log(gameName.lastIndexOf("m"))
const anotherstr=gameName.slice(-5,5)
console.log(anotherstr);
console.log(gameName);
console.log(gameName.substring(0,5));
