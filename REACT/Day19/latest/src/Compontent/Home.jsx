import React from 'react'
import { useState } from 'react'

function Home() {

    const [value,setValue]=useState(0)
    const kavi =()=>{
        setValue(value+1)
        

    } 

       const [name,setName]=useState(0)
    const aji =()=>{
        setName(name-1)
        

    }
  return (
    <>
    <button  className='bg-pink-300  m-3 p-3 justify-between' onClick={kavi}>click</button>
<button  className='bg-pink-300  m-3 p-3 justify-between' onClick={aji}>click</button>

    

    <h1  className='bg-pink-300  w-400 h-300  flex'>{value}</h1>
    <h1 className='bg-red-300  w-400 h-300  flex'>{name}</h1>
    
    
    </>
  )
}

export default Home