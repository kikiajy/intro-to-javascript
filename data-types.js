//Data types are just the different forms of data that we have in a programming language.

//String: anything we put in quotation marks is a string
const myName = "Kiki";

//Number: they can be integers or floating numbers
const age = 17;

//Boolean: it's just true or false
const likesSchool = false;

//Array: it's just a list
const gender = ["Male", "Female"];

//Object: they're key-value pairs
const address = {
  street: "Mudashiru Eletu",
  streetNo: 13,
  state: "Edo",
  country: "Nigeria",
};

console.log("My name is " + myName + ".");
console.log("I am " + age + " years old.");
console.log("I am a " + gender[1] + ".");
console.log(
  "I live at number " +
    address.streetNo +
    ", " +
    address.street +
    ", " +
    address.state +
    ", " +
    address.country +
    "."
);
if (likesSchool) {
  console.log("I am a student.");
} else {
  console.log("I hate school.");
}
