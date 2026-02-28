// function createProfile(user) {
//   const { name, age, role = "User" } = user;
//   return `${name} is ${age} years old and works as ${role}`;
// }


// createProfile({ name: "kavi", age: 22 });

const calculateTotal = (discount, ...prices) => {
  const total = prices.reduce((sum, price) => sum + price, 0);
  return total - (total * discount) / 100;
};


calculateTotal(10, 100, 200, 300);



function createUser(key, value) {
  return {
    [key]: value,
    display() {
      console.log(`${key}: ${value}`);
    }
  };
}


createUser("role", "Admin");



const users = [
  { name: "A", marks: 80 },
  { name: "B" },
  { name: "C", marks: 60 }
];

const result = users.map(
  user => `${user.name} scored ${user.marks ?? 0}`
);

result;