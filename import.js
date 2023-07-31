import { shoppingList, Shopping, printShoppingList } from "./export.js";

printShoppingList(shoppingList);

const mondayShopping = new Shopping(shoppingList, "Monday");
mondayShopping.goToShop();
