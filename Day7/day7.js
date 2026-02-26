


    //  let a = 10;
    //  console.log(`This is the value of the ${a}
    //  this is the process
    
    //  `);
    
 Destructuring

 array
 const arr = [1,2,3,4,5,6]

 const [a,b,c] = arr

 console.log(a,b,c);


//  object Destructuring

// const obj = {
//     name:"React",
//     subject:"Node"
// }

// const {name,subject} = obj


// console.log(subject);


 const arr1 = [1,2,3,4,5]

 console.log('original array',arr1);

// const copyarry = [...arr1]


  
 const adding = [...arr1,45,658,87]

 console.log(adding);

 const merge = [...arr1]


 console.log(merge);




// Object Speart

 const obj = {
     name:"Dhoni",
     year:"2011"
 }

 console.log(obj);


 const data = {...obj,year:2026,city:"Chennai"}

 console.log(data);


// rest opretrs

// const add = (...a)=>{

   

//     const data = a.filter((e)=>e===1)
    
//  console.log(data);
// }

// console.log(add(1,2,1,4,5,1,3,4));



// let data="this is data";

// console.log(data??10);



// console.log(data);

 const kl = {data:"player"}

 const jaddu = {kl}

 console.log(jaddu);




