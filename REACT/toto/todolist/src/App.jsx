import React, { useState } from 'react'
import Toto from './components/Toto'
import List from './components/List'
import Crud from './components/Crud'

const App = () => {
  const[data,setData]=useState("")
  const[todo,setTodo]=useState([])
  const add =(e)=>{
    e.preventDefault()
    if(data.trim()==="")return
    setTodo([...todo,data])
    setData("")

  }
  return (
    <>
    <Toto/>
    <List/>
    <Crud/>
    <form onSubmit={add}>
      <input type='text' value={data} onChange={(e)=>setData(e.target.value)}/>
      <button type='submit'>click</button>

    </form>
    <ul>
      {todo.map((i,e)=>(
        <li key={e}>{i}</li>

      ))}
    </ul>
    </>
  )
}

export default App