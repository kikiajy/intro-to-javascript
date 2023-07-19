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
//Solution 1: if ('key' in myObj)
console.log("Question 1");
console.log("Solution #1");
if ("street" in address) {
  console.log(address.street);
}
if ("road" in address) {
  console.log(address.road);
} else {
  console.log("No road in address");
}

//Solution 2: myObj.hasOwnProperty('key')
console.log("Solution #2");
if (address.hasOwnProperty("city")) {
  console.log(address.city);
}
if (address.hasOwnProperty("continent")) {
  console.log(address.continent);
} else {
  console.log("No continent mentioned");
}

//Question 2: Given an object, how do you get all the keys/values in an array?
console.log("Question 2");
let biodata = {
  name: "Stacy",
  age: 15,
  gender: "Female",
  nationality: "Congolese",
};

let biodataKeys = Object.keys(biodata);
console.log(biodataKeys);
let biodataValues = Object.values(biodata);
console.log(biodataValues);
