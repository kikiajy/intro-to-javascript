//For loops: Iterating through a list (or any iterable) using index number
console.log("------ For Loops ------");
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
//You can exit a for loop by using a condition and a return statement.

const getFirstPrimeNumberBetweenTwoNumbers = (num1, num2) => {
  for (let i = num1; i <= num2; i++) {
    let isPrime = true;
    for (let y = 2; y <= i; y++) {
      if (i % y == 0 && y != i) {
        isPrime = false;
      }
      if (y == i && isPrime == true) {
        return i;
      }
    }
  }
  return 0;
};
console.log(getFirstPrimeNumberBetweenTwoNumbers(8, 30));

//While loop:
console.log("------ While Loops ------");
const getFirstPrimeNumBetweenTwoNums = (num1, num2) => {
  for (let i = num1; i <= num2; i++) {
    let isPrime = true;
    let divider = 2;
    while (divider < i && isPrime == true) {
      if (i % divider == 0) {
        isPrime = false;
      }
      divider++;
    }
    console.log(i, divider, isPrime);
    if (isPrime) {
      return i;
    }
  }
  return 0;
};
console.log(getFirstPrimeNumBetweenTwoNums(8, 30));

//In-built Iterative Methods:

const studentScores = [
  [7, 8, 10],
  [9, 5, 10],
  [7, 3, 7],
  [6, 4, 9],
];

//Maps
["orange", "banana", "apple"].map(function (fruit) {
  console.log(`The fruit is ${fruit}`);
});

["orange", "banana", "apple"].map((fruit) => {
  console.log(`The fruit is ${fruit}`);
});

const totalScores = studentScores.map((scores) => {
  return scores[0] + scores[1] + scores[2];
});
console.log(totalScores);

//ForEach
["orange", "banana", "apple"].forEach((fruit) => {
  console.log(`The fruit is ${fruit}`);
});

const totalScoresForEach = studentScores.forEach((scores) => {
  return scores[0] + scores[1] + scores[2];
});
console.log(totalScoresForEach);

//Reduce: It takes a list of items and returns just one thing. In the example below, it returns just one object. That's what the reduce does.
const students = ["Adam", "Tobi", "Korede", "Chioma"];
const studentScoresObject = studentScores.reduce(
  (previousValue, currentValue, currentIndex) => {
    const currentStudent = students[currentIndex];
    previousValue[currentStudent] = currentValue;
    return previousValue;
  },
  {} //intial value is this empty object
);
console.log(studentScoresObject);

//Assignment: find how to use concat method.
