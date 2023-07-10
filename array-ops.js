//Array Indexing: We access the array using index numbers.
console.log("------ Array Indexing ------");
const shoppingList = ["cheese", "eggs", "milk", "yogurt"];
const milk = shoppingList[2];
console.log(shoppingList[4]);
console.log("I love " + shoppingList[3]);
console.log(`I love ${shoppingList[3]}`);

//Push: Push adds items to the end of an array (EVEN IF IT'S CONST).
console.log("------ Push ------");
shoppingList.push("soap");
console.log(shoppingList);
//shoppingList = ["chicken"];

//Array Slicing:
console.log("------ Array Slicing ------");
console.log(shoppingList.slice(0, 2));
console.log(shoppingList.slice(2));
console.log(shoppingList.slice(-2));
console.log(shoppingList.slice(0, -2));

//Array Splicing: It changes what it acts on when it's spiced since it's a mutating method.
console.log("------ Array Splicing ------");
console.log(shoppingList.splice(0, 2));
console.log(shoppingList);
console.log(shoppingList.splice(2));
console.log(shoppingList.splice(-2));
console.log(shoppingList.splice(0, -2));

//Array Map: Mapping is going through iterables (eg. array) and performing 1 or 2 tasks in each iteration or item
console.log("------ Array Map ------");
shoppingList.map((item) => {
  console.log(item);
});
