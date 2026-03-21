import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Feacth from './component/Feacth'

function App() {
  return (
    <>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/assinment25' element={<Feacth/>}/>

    </Routes>
    
    </>
  )
}

export default App