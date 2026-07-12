import React, { useState } from 'react'

const List = () => {
    const[list,setList]=useState({name:"",email:""})
    const[roll,setRoll]=useState([])
    const add=(e)=>{
          e.preventDefault()
          setRoll([...roll,list])
          setList({
            name:"",
            email:""
          })
    }
  return (
    <>
    <form onSubmit={add}>
        <input type='text' placeholder='name' value={list.name} onChange={(e)=>setList({...list,name:e.target.value})}/>
        <input type='email' placeholder='email' value={list.email} onChange={(e)=>setList({...list,email:e.target.value})}/>
    <button type='submit'>cli</button>
    </form>
    <div>
        {roll.map((i,index)=>(
            <div key={index}>
                <h2>{i.name}</h2>
                <h3>{i.email}</h3>
            </div>

        ))}
    </div>

    
    </>
  )
}

export default List


