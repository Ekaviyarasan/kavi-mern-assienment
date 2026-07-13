// import React, { useEffect, useState } from 'react'
// import Fecth from './components/Fecth'

// const App = () => {
//   const[name,setName]=useState([])
//   useEffect(()=>{
//     fetch("https://dummyjson.com/products")
//     .then((res)=>res.json())
//     .then((data)=>setName(data.products))
//     .catch((err)=>console.log(err))
//   },[])
//   return (
//     <>
//     <Fecth/>
//     <div>
//       {name.map((i)=>(
//         <h1 key={i.id}>{i.price}</h1>
//       ))}
//     </div>
    
//     </>
//   )
// }

// export default App

import React from 'react'
import Fecth from './components/Fecth'
import Button from './components/Button'
import Normal from './components/Normal'

const App = () => {
  return (
    <div>
      <Fecth/>
      <Button/>
      <Normal/>
    </div>
  )
}

export default App