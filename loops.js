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
