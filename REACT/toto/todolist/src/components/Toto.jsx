import React, { useState } from 'react'

const Toto = () => {
    const[task,setTask]=useState("")
    const[todo,setTodo]=useState([])
    const add=(e)=>{
         e.preventDefault()
         if(task.trim()==="")return
         setTodo([...todo,task])
         setTask("")
    }
  return (
    <>
    <form onSubmit={add}>
        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button type='submit'>click</button>
    </form>
    <ul>
        {todo.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
    </>
  )
}

export default Toto