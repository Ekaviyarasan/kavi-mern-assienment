// // let n = 5;
// // for (let i = 0; i < n; i++) {
// //   let row = "";
// //   for (let j = 0; j < n; j++) {
// //     row += "*";
// //   }
// //   console.log(row);
// // }


// // let rows = 3, cols = 5;
// // for (let i = 0; i < rows; i++) {
// //   let row = "";
// //   for (let j = 0; j < cols; j++) {
// //     row += "*";
// //   }
// //   console.log(row);
// // }



// // for (let i = 1; i <= n; i++) {
// //   console.log("*".repeat(i));
// // }


// // for (let i = 1; i <= n; i++) {
// //   console.log(" ".repeat(n - i) + "*".repeat(i));
// // }


// // for (let i = n; i >= 1; i--) {
// //   console.log("*".repeat(i));
// // }



// for (let i = 1; i <= n; i++) {
//   console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
// }


// for (let i = n; i >= 1; i--) {
//   console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
// }


// for (let i = 1; i <= n; i++) {
//   console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
// }
// for (let i = n - 1; i >= 1; i--) {
//   console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
// }


for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n || j === 1 || j === n) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}










for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (i === n || j === 1 || j === i) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}


function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

reverseString("hello"); 



function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}

reverseNumber(1234); 



function isPalindromeString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

isPalindromeString("madam"); 


function isPalindromeNumber(num) {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return original === reversed;
}

isPalindromeNumber(121); 



function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

factorial(5); 


function fibonacci(n) {
  let a = 0, b = 1;
  console.log(a);
  console.log(b);

  for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

fibonacci(7);



function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

isPrime(7); 



