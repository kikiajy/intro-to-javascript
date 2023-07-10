//Given  the array below, create a json object containing the countries as keys and the year of creation as the values.
const countries = [
  "Nigeria 1960",
  "Ghana 1964",
  "Rwanda 1965",
  "Togo 1959",
  "India 1966",
  "Botswana 1971",
  "Egypt 1975",
  "Cameroon 1978",
  "Belgium 1979",
  "Benin 1978",
];

//STEPS
//1. Initialize an empty object
//2. Iterate over countries array
//3. Spilt each item into country and year using arrray destructuring
//4. Add each country-year pair to the initialized objects
//5. Print the object

let countryObject = {};
countries.map((item) => {
  // const splitted = item.split(" ");
  // const countryA = splitted[0];
  // const yearA = splitted[1];
  const [country, year] = item.split(" ");
  countryObject[country] = year;
});

console.log(countryObject);
console.log(countryObject["Nigeria"]);
console.log(countries[0]);
