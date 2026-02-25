// let original = [[1, 2], [3, 4]];

// let shallow = original.slice();

// shallow[0][0] = 99;

// console.log(original); 
// console.log(shallow);  



let original = [[10, 20], [30, 40]];

let shallow = [...original];

shallow[1][1] = 888;

console.log(original); // [[10, 20], [30, 888]]
console.log(shallow);  // [[10, 20], [30, 888]]


Deepcopy
// let original = [[1, 2], [3, 4]];

// let deep = original.map(arr => [...arr]);

// deep[0][0] = 77;

// console.log(original); 
// console.log(deep);     


// let original = [[5, 6], [7, 8]];

// let deep = JSON.parse(JSON.stringify(original));

// deep[1][0] = 999;

// console.log(original); 
// console.log(deep);     