// console.log("500"+1);
// console.log(null >= 0);
//  console.log(0 >= 0);
//     console.log(false == "0");
    

 function calculateTotal(price, qty) {
  const numericPrice = Number(price);
  const numericQty = Number(qty);

  return numericPrice * numericQty;
}


calculateTotal("19.99", "3"); 


// Expression	Result	Explanation
// "5" == 5	true	String coerced to number
// "5" === 5	false	Different types
// false == 0	true	Both coerced to 0
// false === 0	false	Boolean ≠ number
// null == undefined	true	Special rule in ==
// null === undefined	false	Different types

toBoolean(0);       
toBoolean("hello"); 
toBoolean("");       
toBoolean([]);     
toBoolean(null);    