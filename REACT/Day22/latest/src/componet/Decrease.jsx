import React, { useState } from 'react'

 function Decrease() {
     const [count,setCount]=useState(10)
     const rolex= ()=>{
         setCount(dec=>dec-1)
     }
   return (
     <>
     <button onClick={rolex}>decrese</button>
   <h1>{count}</h1>
    
     </>
   )
 }

 export default Decrease