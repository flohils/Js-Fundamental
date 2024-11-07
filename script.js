let greatings = 'Hai Everyone, my name Floria Hilary!';
let age = 20;
const favcolor = ['White', 'Blue', 'Black'];
const myidol = { name: 'Jeon Wonwoo', age: 28 };

console.log(greatings);
console.log('Age:', age);
console.log('My Favorite Color:', favcolor);
console.log('My Favorite Idol :', myidol);

//JS Control Flow
//1. Our First For Loop Practice
for (let i = 0; i < 6; i++) {
  console.log('Da ba dee da ba daa');
}

//2. For Loops Practice
for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

//3. Ilerating Array Exercise
const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}

//JS Exception
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
