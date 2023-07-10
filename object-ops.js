//Accessing Object Values: Objects can be accessed using .objectName or ["objectName"]
console.log("------ Accessing Object Values ------");
let address = {
  street: "Mudashiru Eletu",
  streetNo: 13,
  state: "Edo",
  country: "Nigeria",
};
console.log(address.street); //Mudashiru Eletu
console.log(address["street"]); //Mudashiru ELetu

//Assigning Value to Object Key: Objects can be accessed using .objectName or ["objectName"]
console.log("------ Assigning Value to Object Key ------");
address.zipCode = 1014;
console.log(address);
const key = "city";
address[key] = "Lekki";
console.log(address);

//Question 1: How do you check if an object has a particular key?
//Question 2: Given an object, how do you get all the keys/values in an array?
