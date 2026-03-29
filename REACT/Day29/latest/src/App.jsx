import React, { useRef, useState } from 'react'


 const App = () => {
  const [name,setName]=useState()
  const inRef=useRef()
  const kavi = ()=>{
const lk=document.getElementById("kl")
lk.style.background="yellow"
  }
  return (
    <>
    <input id='kl' type='text' ref={inRef} onChange={(e)=>setName(e.target.value)}></input>
    <h1>{name}</h1>
    <button onClick={kavi}>click</button>
    </>
  )
}
export default App