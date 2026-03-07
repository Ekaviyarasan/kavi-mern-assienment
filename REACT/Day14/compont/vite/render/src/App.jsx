// function App() {
//   const name = "Rahul";
//   const age = 22;
//   const city = "Chennai";

//   return (
//     <div>
      
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       <p>City: {city}</p>
//     </div>
//   );
// }

// export default App;



// function App() {
//   const user = {
//     name: "Rahul",
//     email: "rahul@gmail.com",
//     phone: "9876543210"
//   };

//   return (
//     <div>
      
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       <p>Phone: {user.phone}</p>
//     </div>
//   );
// }

// export default App
// function App(){
//   const sports=["cricket","kabadi","hacky","freefire"]
//   return(
//     <>
//     {sports.map((sport,intex)=>(
//       <h2 key={intex}>{sport}</h2>

//     ))
//   }
    
    
//     </>
//   )
// }
// export default App


// function App() {
//   const users = [
//     { id: 1, name: "John", age: 25 },
//     { id: 2, name: "David", age: 30 },
//     { id: 3, name: "Sara", age: 22 }
//   ];

//   return (
//     <div>
//       <h2>Users</h2>
//       {users.map(user => (
//         <p key={user.id}>
//           {user.name} - {user.age}
//         </p>
//       ))}
//     </div>
//   );
// }
// export default App


// function App() {
//   const users = [
//     {
//       name: "John",
//       skills: ["HTML", "CSS", "JavaScript"]
//     }
//   ];

//   return (
//     <div>
//       <h2>Users Skills</h2>

//       {users.map((user, index) => (
//         <div key={index}>
//           <h3>{user.name}</h3>

//           <ul>
//             {user.skills.map((skill, i) => (
//               <li key={i}>{skill}</li>
//             ))}
//           </ul>

//         </div>
//       ))}

//     </div>
//   );
// }

// function login(){
//   const sport= false;
//   return(<>
//   {sport?  <h1>successful</h1>:<h2>failled</h2>}
  
//   </>)
// }
// export default login


// function App() {
//   const age = 17;

//   return (
//     <div>
//       <h2>Age Status</h2>
//       <p>{age >= 18 ? "Adult" : "Minor"}</p>
//     </div>
//   );
// } export default App


// function App() {
//   const isAdmin = true;

//   return (
//     <div>
      
//       {isAdmin && <p>Admin Dashboard</p>}
//     </div>
//   );
// } 
// export default App


// function App(){
//   const student={
//     name:"kavi",
//     city:{
//       chennai:"kk nagar"
//     }
//   }
//   return(
//     <>
//     <h1>{student?.city?.chennai}</h1>
//     </>
//   )
// }
// export default App


function App() {
  const username = "See The value";

  return (
    <div>
      
      <p>{username ?? "Guest User"}</p>
    </div>
  );
}
export default App