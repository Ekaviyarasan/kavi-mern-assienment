import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const handelClick = ()=>{
        navigate("/assinment25")
    }
  return (
    <>
    <div className='bg-green-500 p-10 '>
        <button onClick={handelClick} className='bg-black text-white p-1 rounded w-40 mx-4'>Assinment </button>
    </div>
    </>
  )
}

export default Home