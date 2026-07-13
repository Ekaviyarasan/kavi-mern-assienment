import React, {  useState } from 'react'

const Button = () => {
    const [roll,setRoll]=useState([])
    const add = async ()=>{
        try{
            const name=await fetch ("https://dummyjson.com/products")
            const age=await name .json()
            setRoll(age.products)
            
        }
        catch(err){
            console.log(err,"err")
        }
    }
   
  return (
    <>
    <button onClick={add}>click</button>
    <div>{roll.map((i)=>(
        <h2 key={i.id}>{i.price}</h2>

    ))}</div>
    </>
  )
}

export default Button