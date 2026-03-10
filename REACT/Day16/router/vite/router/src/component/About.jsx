import React from 'react'

function About() {
    const fruite=[{name:"apple",price:500},{name:"apple",price:500},{name:"apple",price:500}]
  return (
<>
<div className='bg-yellow-200 w-343 h-70 flex justify-center gap-30'>
    <h1 className=' w-70 h-70 m-4 p-4'>{fruite[0].name}</h1>
<h2  className=' w-70 h-70 m-4 p-4'>{fruite[1].price}</h2>

</div>
</>
  )
}

export default About