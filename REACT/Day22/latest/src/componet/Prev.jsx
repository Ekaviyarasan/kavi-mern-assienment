import React, { useState } from 'react'

function Prev() {
    const [value,setValue]=useState(10)
    const obj=()=>{
        setValue(prev=>prev+2)
        setValue(prev=>prev+2)
        setValue(prev=>prev+2)
        setValue(prev=>prev+2)
    }
  return (
    <>
    <button onClick={obj}>click</button>
    <h1>{value}</h1>
    
    
    </>
  )
}

export default Prev