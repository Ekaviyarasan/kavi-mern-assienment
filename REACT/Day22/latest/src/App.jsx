  import React, { useState } from 'react'
 import Decrease from './componet/Decrease'
 import Prev from './componet/Prev'
 import Hite from './componet/Hite'
import Array from './componet/Array'
import Update from './componet/Update'

function App() {
   const [count,setCount]=useState(0)
   const btn =()=>{
 setCount(valu=>valu+1)
  }
  return (
    <>
    <Update/>
     <Hite/> 
    <Array/>
     <Prev/>
    <button className='bg-red-500 m-3 p-2 ' onClick={btn}>click</button>
    <h1>{count}</h1>
    <Decrease/> 
    
    </>
  )
}

export default App