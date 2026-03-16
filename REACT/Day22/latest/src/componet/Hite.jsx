import React, { useState } from 'react'

function Hite() {
    const[name,setName]=useState(true)
    const see=()=>{
        setName(prev=>!prev)
    }
  return (
    <>
    <button onClick={see}>HITE</button>
    <h1>{name&&"this normal"}</h1>
    
    </>
  )
}

export default Hite