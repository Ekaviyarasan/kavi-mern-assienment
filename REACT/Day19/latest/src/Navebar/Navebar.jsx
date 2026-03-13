import React from 'react'
import { Link } from 'react-router-dom'

function Navebar() {
  return (
    <div className='bg-red-400 flex justify-between'>
    <Link to="/">Home</Link>
    <Link to="/primitive">Primitive</Link>
    <Link to="/taggle">Taggle</Link>
    <Link to="/nonpri">Nonpri</Link>
    <Link to="/prifile">Prifile</Link>
    </div>
  )
}

export default Navebar