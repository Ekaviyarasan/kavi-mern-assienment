// import React, { useState } from 'react'

// const Toto = () => {
//     const[task,setTask]=useState("")
//     const[todo,setTodo]=useState([])
//     const add=(e)=>{
//          e.preventDefault()
//          if(task.trim()==="")return
//          setTodo([...todo,task])
//          setTask("")
//     }
//   return (
//     <>
//     <form onSubmit={add}>
//         <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
//          <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
//           <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
//         <button type='submit'>click</button>
//     </form>
//     <ul>
//         {todo.map((item,index)=>(
//             <li key={index}>{item}</li>
//         ))}
//     </ul>
//     </>
//   )
// }

// export default Toto

// import React, { useState } from "react";

// const Toto = () => {

//   const [form, setForm] = useState({
//     name: "",
//     age: "",
//     city: ""
//   });

//   const [data, setData] = useState([]);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const add = (e) => {
//     e.preventDefault();

//     setData([...data, form]);

//     setForm({
//       name: "",
//       age: "",
//       city: ""
//     });
//   };

//   return (
//     <>
//       <form onSubmit={add}>

//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Name"
//         />

//         <input
//           type="text"
//           name="age"
//           value={form.age}
//           onChange={handleChange}
//           placeholder="Age"
//         />

//         <input
//           type="text"
//           name="city"
//           value={form.city}
//           onChange={handleChange}
//           placeholder="City"
//         />

//         <button type="submit">Add</button>

//       </form>

//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.age} - {item.city}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Toto;


import React, { useState } from 'react'

const Toto = () => {
    const[emp,setEmp]=useState({
        name:"",
        age:"",
        email:""
    })
    const [rate,setRate]=useState([])
    const add=(e)=>{
        e.preventDefault()
        setRate([...rate,emp])
        setEmp({
            name:"",
        age:"",
        email:""
        })
    }
  return (
    <>
    <form onSubmit={add}>
        <input type='text' value={emp.name} onChange={(e)=>setEmp({...emp,name:e.target.value})}/>
        <input type='text' value={emp.age} onChange={(e)=>setEmp({...emp,age:e.target.value})}/>
       <input type='text' value={emp.email} onChange={(e)=>setEmp({...emp,email:e.target.value})}/>
     <button type='submit'>click me</button> 
    </form>
    <div>
        {rate.map((i,index)=>(
            <h1 key={index}>
                <h2>{i.name}</h2>
                <h2>{i.age}</h2>
                <h2>{i.email}</h2>
            </h1>
             
             

        ))}

    </div>
        
    
    
    </>
  )
}

export default Toto