//Functions are the same in all programming languages.
//A function is a collection of code statements executed to achieve a particular result.
//Functions need to be called in order to do their work.
//They are reusable.
//A function can take one or more parameter(s) and return a result.
//You can also have a function that doesn't take any parameter and doesn't return anything; returns void.

//Function Definition in ES5:
function greet(name, time) {
  if (typeof time != "number") {
    return "Invalid input, please put a number instead.";
  }
  if (time > 24) {
    return "Hey, unfortunately the time is out of range...";
  }
  let period = "";
  if (time < 12) {
    period = "morning";
  } else if (time < 16) {
    period = "afternoon";
  } else if (time < 21) {
    period = "evening";
  } else {
    period = "night";
  }
  return `Good ${period} ${name}!`;
}
console.log(greet("Kiki", "14"));

//Function Definition ES6:
// const greetES6 = () => "Good morning Kiki!";
const showRestaurant = (cuisine) => {
  const restaurants = [
    {
      name: "Olive Garden",
      cuisine: "Italian",
      location: "Victoria Island",
    },
    {
      name: "Orchid",
      cuisine: "Thai",
      location: "Ikoyi",
    },
    {
      name: "Yellow Plate",
      cuisine: "Nigerian",
      location: "Victoria Island",
    },
    {
      name: "Eric Kayser",
      cuisine: "Dessert",
      location: "Ajah",
    },
    {
      name: "Domino's",
      cuisine: "Pizza",
      location: "Agungi",
    },
    {
      name: "KFC",
      cuisine: "Chicken",
      location: "Ilupeju",
    },
    {
      name: "Johnny Rocket",
      cuisine: "Burgers",
      location: "Chevron",
    },
  ];

  console.log("------ Test ------");
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].cuisine == cuisine) {
      return restaurants[i];
      // console.log(`Name: ${restaurants[i].name}`);
      // console.log(`Location: ${restaurants[i].location}`);
    }
  }
};
console.log(showRestaurant("Italian"));
