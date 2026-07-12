import React, { useState } from 'react'

const Rew = () => {
    const[detail,setDetail]=useState({name:"",email:""})
    const[student,setStudent]=useState([])
    const[mark,setMark]=useState(null)
    const add =(e)=>{
        e.preventDefault()
        if(detail.name===""|| detail.email==="")return
        if(mark===null){
            setStudent([...student,detail])
        }
        else{
              const newList=[...student]   
              newList[mark]=detail
              setStudent(newList)
              setMark(null)

        }
        setDetail({
            name:"",
            email:""
        })
    }
  return (
    <>
    <form  onSubmit={add}>
        <input type='text' value={detail.name} placeholder='Your name' onChange={(e)=>setDetail({...detail,name:e.target.value})}/>
        <input type='text' value={detail.email} placeholder='Your email' onChange={(e)=>setDetail({...detail,email:e.target.value})}/>
        <button type='submit'>{mark===null?"add":"update"}</button>

    </form>
    
    </>
  )
}

export default Rew