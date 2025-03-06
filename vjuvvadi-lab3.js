// Veera Venkata Satya Vrath Juvvadi
// ITMD 541-01 Graduate Student

// Exercise 1: minMaxAverage
function minMaxAverage(arr) {
    let total = arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let avg = arr.reduce((sum, num) => sum + num, 0) / total;
    console.log(`Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

// Test cases
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([7, 14, 21, 28, 35, 42]);

// Exercise 2: countVowels
function countVowels(str) {
    let vowels = str.match(/[aeiou]/gi);
    let count = vowels ? vowels.length : 0;
    console.log(`${str}: ${count} vowels`);
}

// Test cases
countVowels("Winter");
countVowels("Education");
countVowels("Javascript");

// Exercise 3: sortNumbers
function sortNumbers(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    console.log(`Original Array: ${arr} output Sorted Array: ${sortedArr}`);
}

// Test cases
sortNumbers([9, 4, 6, 2]);
sortNumbers([15, 3, 8, 10, 1]);
sortNumbers([100, 50, 75, 25, 0]);

// Exercise 4: celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
    let c = parseFloat(celsius);
    let fahrenheit = (c * 9/5) + 32;
    console.log(`${c.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test cases
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(-10);
celsiusToFahrenheit("35");
celsiusToFahrenheit("12.5");

// Exercise 5: Sort people object
function sortPeople(people) {
    let sortedPeople = people.sort((a, b) => a.age - b.age);
    let introductions = sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
    console.log(introductions);
}

// Test cases
let testPeople = [
    {name: 'Niraj', age: 40, city: 'Seattle'},
    {name: 'Ahan', age: 20, city: 'Boston'},
    {name: 'Aditya', age: 18, city: 'San Diego'},
    {name: 'Ram', age: 50, city: 'Dallas'},
    {name: 'Srikanth', age: 33, city: 'San Francisco'}
];
sortPeople(testPeople);

let peopleArray = [
    {name: 'Veera', age: 25, city: 'Chicago'},
    {name: 'Venkata', age: 30, city: 'New York'},
    {name: 'Satya', age: 22, city: 'Los Angeles'},
    {name: 'Adarsh', age: 28, city: 'Houston'},
    {name: 'Virat', age: 35, city: 'Miami'}
];
sortPeople(peopleArray);

let morePeople = [
    {name: 'Vikrant', age: 40, city: 'Seattle'},
    {name: 'Loka', age: 20, city: 'Boston'},
    {name: 'Pratap', age: 18, city: 'New Jersey'},
    {name: 'Rahul', age: 50, city: 'Dallas'},
    {name: 'Shan', age: 33, city: 'San Francisco'}
];
sortPeople(morePeople);
