import React, { useEffect, useState } from 'react'

const App = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((roll)=>setData(roll.products))
    .catch((err)=>console.log(err))
  },[])
  return (
    <>
    <div>
      {data.map((i)=>(
        <h1 key={i}>
          {i.price}
        </h1>
      ))}
    </div>
    
    </>
  )
}

export default App


import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;


import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div>
      <button onClick={getData}>Load Users</button>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;




