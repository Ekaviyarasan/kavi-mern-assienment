import React from 'react'

function Team({lead}) {
  return (
    <div className='bg-red-600'>
       
        <h1 className='text-amber-300 m-2 flex gap-2' >
            {lead.map((i)=>(
                <h2 key={i.name}>
                <h3>{i.name}</h3>
                <h2>{i.cup}</h2>
                </h2>

            ))}
            
            
            </h1>   



        



    </div>
  )
}

export default Team