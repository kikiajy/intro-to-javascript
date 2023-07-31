export const shoppingList = ["eggs", "chicken"];

export const printShoppingList = (list) => {
  console.log(list);
};

export class Shopping {
  constructor(list, day) {
    this.list = list;
    this.day = day;
  }

  goToShop() {
    console.log(
      `Today is ${this.day} and we are going to shop for these items: ${this.list}.`
    );
  }
}
