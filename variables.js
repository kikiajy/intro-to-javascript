// this is a comment
//variables are values that can change depending on the use case
//In JS, we declare variables using the key words: var, let, and const(constant). Use let instead or var
// When you declare using var or let, the variable can be changed down the line
var price = 50;
console.log({ price });
price = 70;
console.log(price);

let price2 = 40;
console.log({ price2 });
price2 = 60;
console.log(price2);

const price3 = 30;
console.log({ price3 });
//This will throw an error because you can't reassign a constant variable.
price3 = 70;
console.log(price3);
