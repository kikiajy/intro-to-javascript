import * as shop from "./export.js";

//Object Oriented Programming (OOP)
// In OOP, we build things around objects with properties and methods.
//The properties are what the object has and the methods are what the objects can do.
//Example: A Car is an object with properties like color, model, tires, and methods(behaviors) like accelerate, stop, horn.

// const Car = {
//   color: "red",
//   model: "Toyota Land Cruiser",
//   tires: 4,
//   accelerate: () => {
//     console.log("The car is now moving.");
//   },
//   stop: () => {
//     console.log("The car has stopped.");
//   },
//   horn: () => {
//     console.log("Beep beep!");
//   },
// };

// Car.accelerate();

//In OOP, objects are usually built using classes. Classes are a template for creating objects.
// class Airplane {
//   constructor(model, noSeats, color, noEngines) {
//     this.model = model;
//     this.noSeats = noSeats;
//     this.color = color;
//     this.noEngines = noEngines;
//   }
//   fly() {
//     console.log("The plane has now taken flight.");
//   }
//   boarding() {
//     console.log("The plane is currently onboarding passengers.");
//   }
//   landing() {
//     console.log("The plane is now landing at its destination.");
//   }
// }
// const jet = new Airplane("Jetty300l", 120, "pink", 3);
// jet.boarding();

//Assignment: Build a Car class
class Vehicle {
  constructor(model, color, year, mileage) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.mileage = mileage;
  }

  details() {
    console.log(`Year: ${this.year}`);
    console.log(`Model: ${this.model}`);
    console.log(`Color: ${this.color}`);
    console.log(`Miles: ${this.mileage}`);
  }

  accelerate(miles) {
    this.mileage = this.mileage + miles;
    console.log(`Vroom! We travelled ${miles} miles.`);
  }
}

class Car extends Vehicle {
  constructor(model, color, year, mileage, tires) {
    super(model, color, year, mileage);
    this.tires = tires;
  }

  details() {
    super.details();
    console.log(`Tires: ${this.tires}`);
  }

  accelerate(miles) {
    super.accelerate(miles);
  }

  stop() {
    console.log("The car has stopped.");
  }

  horn() {
    console.log("Beep beep!");
  }
}

const myCar = new Car("Toyota Highlander", "pink", 1981, 280, 4);
myCar.details();
myCar.accelerate(200);
myCar.horn();
myCar.stop();
myCar.details();

class BankAccount {
  constructor(
    accountNo,
    accountName,
    currency,
    firstName,
    lastName,
    dateOfBirth
  ) {
    this.accountNo = accountNo;
    this.accountName = accountName;
    this.currency = currency;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    //We can initialise new variables inside of the constructor without putting them as parameters in the constructor.
    this.balance = 0.0;
    this.isVerified = false;
    this.kyc = null; //KYC is know your customer.
    this.history = [];
  }

  deposit(amount, depositor) {
    this.balance = this.balance + amount;
    this.history.push(
      `Deposit of ${this.currency}${amount} by ${depositor} on ${new Date()}.`
    );
    console.log(
      `Deposit of ${this.currency}${amount} by ${this.firstName} ${this.lastName} was successful.`
    );
    console.log(`Your new balance is ${this.balance}.`);
  }

  withdraw(amount, creditor) {
    if (!this.isVerified) {
      console.log("You cannot withdraw as you're currently unverified.");
      return;
    }
    if (this.balance >= amount) {
      this.balance = this.balance - amount;
      this.history.push(
        `Withdrawal of  ${
          this.currency
        }${amount} by ${creditor} on ${new Date()}.`
      );
      console.log(
        `Withdrawal of ${this.currency}${amount} by ${this.firstName} ${this.lastName} was successful.`
      );
      console.log(`Your new balance is ${this.balance}.`);
    } else {
      console.log(`Your balance is insufficient.`);
    }
  }

  verifyKYC(address, meansOfIdentification) {
    this.kyc = { address, meansOfIdentification };
    this.isVerified = true;
    console.log("You have now been verified.");
  }

  getKYC() {
    console.log(this.kyc);
  }

  getStatement() {
    console.log(`Current balance: ${this.balance}`);
    console.log(`Transaction history:`);
    this.history.forEach((transaction) => console.log(transaction));
  }
}

const myAccount = new BankAccount(
  "1234567890",
  "Kiki",
  "$",
  "Okikiolu",
  "Ajayi",
  "18/04/03"
);
myAccount.getStatement();
myAccount.withdraw(300, "Kiki Ajayi");
myAccount.verifyKYC("123 Street", "International Passport");
myAccount.getKYC();
myAccount.withdraw(300, "Kiki Ajayi");
myAccount.deposit(500, "Kiki Ajayi");
myAccount.withdraw(300, "Kiki Ajayi");
myAccount.getStatement();

shop.printShoppingList(shop.shoppingList);
