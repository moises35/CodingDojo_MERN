const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;           // 2
const [,,,second] = numbers;        // 5
const [,,,,,,,,third] = numbers;    // 2
//Predict the output
console.log(first == second);       // false
console.log(first == third);        // true

