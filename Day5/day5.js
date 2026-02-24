 const key=(a,b)=>{
     return  a/b

    
 }

 console.log(key(73766,5))

 const kavi =(x,y)=>x+y
 console.log(kavi(20,70))

 const days =(a,b,roll)=>{
     return  roll(a,b)
    
 }
 const value=(x,y)=>x+y
 const roll=(x,y)=>x*y
 console.log(days (20,70,(x,y)=>{x+y}))
 console.log(days(20,70,roll))


const aji=(cb,name)=>{
    return cb(name)
    
}
const h=(m)=>m
const r=(n)=>n
console.log(aji(h,"java"))
console.log(aji(r,"react"))


 





 

 const processArray = (arr,callback)=>{
    
     const result = []
   
     for(let i = 0; i < arr.length; i++){

         result.push(callback(arr[i]))

     }
 

     return result
    
 }

 const squre = (num)=>num*num 


 console.log(processArray([1,2,3,4],squre));






 const validation = (value,rule) => rule(value);


 const isPositive = (num)=> num > 0 

 const isEven = (num)=> num % 2===0 



 console.log(validation(10,isPositive));
 console.log(validation(10,isEven));




 setTimeout(()=>{
     console.log(validation(10,isPositive));
 },2000)


 const inter=()=>{
    console.log("hi")
}
setInterval(inter,1000)


 






















    
    
    
    