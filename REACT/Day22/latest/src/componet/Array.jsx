


import React, { useState } from 'react'

function Array() {
  const [names, setName] = useState(["html", "css"])

  const kavi = () => {
    setName(prev => [...prev, "react", "Node", "mongoDB"])
  }

  return (
    <>
      <button onClick={kavi}>Click</button>

      {names.map((name, i) => (
        <h3 key={i}>{name}</h3>
      ))}
    </>
  )
}

export default Array