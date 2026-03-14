import React, { useState } from 'react'

function Text() {
const [name,setName]=useState("")

  return (
    <>
    <input type="name" onChange={(e)=>setName(e.target.value)}/>
    <h1>{name}</h1>
    </>

  )
}

export default Text

