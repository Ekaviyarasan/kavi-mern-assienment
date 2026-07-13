import React, { useEffect, useState } from 'react'

const Fecth = () => {
    const[data,setData]=useState([])
   const value = async ()=>{
    try{
        const res=await fetch("https://dummyjson.com/products")
        const req=await res.json()
        setData(req.products)
    }
    catch(err){
        console.log(err,"err")
    }
   }
   useEffect(()=>{
    value()
   },[])

  return (
    <>
    <div>
        {data.map((i)=>(
            <h1 key={i.id}>{i.price}</h1>
        ))}
    </div>
    
    </>
  )
}

export default Fecth