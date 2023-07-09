// String Concatenation: it's simply adding 2 or more strings together
console.log("------ String Concatenation ------");
const myName = "Kiki";
const time = "morning";
const greeting = "Good " + time + " " + myName + "!";
console.log(greeting);

//ES6 String Formatting
console.log("------ String Formatting ------");
const formattedGreeting = `Good ${time} ${myName}!`;
console.log(formattedGreeting);

//String Indexing: Accessing a character in the string using index
console.log("------ String Indexing ------");
console.log(myName[0]);
console.log(formattedGreeting[3]);

//String Splitting: Splitting a string
console.log("------ String Splitting ------");
console.log(time.split(""));
console.log(time.split("i"));

//String Slicing: Slicing a string (it seems that slice omits the last character)
console.log("------ String Slicing ------");
console.log(time.slice(1, 3));
console.log(time.slice(0, 4));
console.log(time.slice(4));

//Substring:
console.log("------ Substring Splicing ------");
console.log(time.substring(0, 4));
