import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Content from './component/Content'
import Navber from './Navbar/Navber'
import About from './component/About'

function App() {
  return (
    <>
    <Navber/>
    <Routes>
      <Route path='/' element={<Home/>}/>
<Route path='/Content' element={<Content/>}/>
<Route path='/About' element={<About/>}/>



      
    </Routes>
  
    </>
  

  )
}

export default App