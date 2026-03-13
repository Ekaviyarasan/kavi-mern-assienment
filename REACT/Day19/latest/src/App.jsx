// import React from 'react'
// import { Route, Routes } from 'react-router-dom'


// function App() {
//   return (
    
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//        <Route path='/primitive' element={<Primitive/>}/>
//        <Route path='/taggle' element={<Taggle/>}/>
// <Route path='/array' element={<Array/>}/>



//     </Routes>
    
    
//   )
// }

// export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Compontent/Home'
import Primitive from './Compontent/Primitive'
import Taggle from './Compontent/Taggle'
import  Nonpri from './Compontent/Nonpri'
import Navebar from './Navebar/Navebar'
import Profile from './Compontent/Prifile'

function App() {
  return (
    <>
    <Navebar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/primitive' element={<Primitive />} />
      <Route path='/taggle' element={<Taggle />} />
      <Route path='/Nonpri' element={<Nonpri />} />
      <Route path='/prifile' element={<Profile />} />
    </Routes>
    </>
    
  )
}

export default App