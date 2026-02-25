let cart = [];

cart.push("Mobile");
cart.push("Laptop");
cart.push("Headset");

let removedItem = cart.pop();

console.log("Final Cart:", cart);
console.log("Removed Item:", removedItem);



let arr = [10, 20, 30, 40];

arr.shift();        // removes 10
arr.unshift(5);     // adds 5 at start

console.log(arr);



let skills = ["JavaScript", "HTML", "CSS"];

if (!skills.includes("React")) {
  skills.push("React");
}

console.log(skills);



let nums = [1, 2, 3, 4, 5];

let middle = nums.slice(1, 4);

console.log(middle); // [2, 3, 4]


let arr2 = [1, 2, 3, 4, 5];

arr2.splice(2, 2, 100, 200);

console.log(arr2); // [1, 2, 100, 200, 5]




let a = [1, 2];
let b = [3, 4];

let combined = a.concat(b);

console.log(combined);



let tech = ["JS", "React", "Node"];

let result = tech.join(" - ");

console.log(result);




let numbers = [5, 20, 3, 100, 1];


let asc = [...numbers].sort((a, b) => a - b);


let desc = [...numbers].sort((a, b) => b - a);

console.log("Ascending:", asc);
console.log("Descending:", desc);


let revArr = [1, 2, 3, 4];

revArr.reverse();

console.log(revArr);



let data = [10, 20, 30, 40];
let value = 10;

let index = data.indexOf(value);

if (index === -1) {
  console.log("Not Found");
} else {
  console.log("Index:", index);
}


let nums1 = [1, 2, 3, 4];

 let multiplied = nums1.map(n => n * 5);

 console.log(multiplied);



 let nums2 = [10, 15, 20, 25, 30];

let result2 = nums2.filter(n => n > 20);

console.log(result2);



let prices = [100, 200, 300];

let total = prices.reduce((sum, val) => sum + val, 0);

console.log(total);


let cartItems = [
  { name: "Mobile", price: 10000 },
  { name: "Laptop", price: 50000 },
  { name: "Headset", price: 2000 }
];


let namesList = cartItems.map(item => item.name);
let above5000 = cartItems.filter(item => item.price > 5000);

let totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);


let hasCheap = cartItems.some(item => item.price < 3000);

console.log(namesList, above5000, totalPrice, hasCheap);


let marks = [80, 45, 30, 90, 60];

// Above 70
let above70 = marks.filter(m => m > 70);

// All passed
let allPassed = marks.every(m => m >= 35);

// First failed
let firstFail = marks.find(m => m < 35);

// Average
let average = marks.reduce((a, b) => a + b, 0) / marks.length;

console.log(above70, allPassed, firstFail, average);












let dupArr = [1, 2, 2, 3, 4, 4, 5];

let unique = dupArr.filter((val, index, arr) => arr.indexOf(val) === index);

console.log(unique);




let people = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 25 }
];

let grouped = people.reduce((acc, curr) => {
  acc[curr.age] = acc[curr.age] || [];
  acc[curr.age].push(curr);
  return acc;
}, {});

console.log(grouped);