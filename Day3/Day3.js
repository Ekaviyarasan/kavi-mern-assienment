const fruits = ["Apple", "Banana", "Mango", "Orange"];

// First fruit
console.log(fruits[0]);

// Last fruit
console.log(fruits[fruits.length - 1]);

// Total number of fruits
console.log(fruits.length);

const colors = ["Red", "Green", "Blue"];

// Change "Green" to "Yellow"
colors[1] = "Yellow";

// Print updated array
console.log(colors);


const numbers = [10, 20, 30, 40];

// Print each number
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Print square of each number
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * numbers[i]);
}


const data = [
  ["Arun", 22],
  ["Ravi", 25],
  ["Kumar", 28]
];

// Ravi's age
console.log(data[1][1]);

// Kumar's name
console.log(data[2][0]);



const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Ravi" }
];

// First user's name
console.log(users[0].name);

// Second user's id
console.log(users[1].id);


const student = {
  name: "kavi",
  age: 22,
  course: "MERN"
};


console.log(student.name);


console.log(student.course);



const car = {
  brand: "BMW",
  year: 2020
};

// Update year
car.year = 2024;

// Add new property
car.color = "Black";

console.log(car);



const employee = {
  name: "Ravi",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};


console.log(employee.address.city);


console.log(employee.address.pincode);



const product = {
  name: "Laptop",
  roll:23,
  features: ["16GB RAM", "512GB SSD", "i7 Processor"]
};


console.log(product.features[1]);
console.log(product.roll)


console.log(product.features.length);



const students = [
  { name: "Arun", marks: 80 },
  { name: "Ravi", marks: 40 },
  { name: "Kumar", marks: 90 }
];


for (let i = 0; i < students.length; i++) {
  if (students[i].marks > 50) {
    console.log(students[i].name);
  }
}