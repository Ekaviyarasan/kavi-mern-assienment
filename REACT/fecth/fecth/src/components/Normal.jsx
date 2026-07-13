// // import React from 'react'

// // const Normal = () =>{
// //     const kavi = async ()=>{
// //         try{
// //         const res= await fetch("https://dummyjson.com/posts",{
// //             method:"POST",
// //             headers:{
// //                 "Content-type":"application/json",
// //             },
// //             body:JSON .stringify({
// //                 name:"kavi"
// //             })
// //         }
            
// //         )
// //         const req=await res.json("")
// //         console.log(req)
// //     }
// //     catch(err){
// //         console.log(err,"err")
// //     }
// //   return (
// //     <>
// //     <button onClick={kavi}>click me</button>
    
// //     </>
// //   )
// // }
// // }

// // export default Normal


// import React from "react";

// const App = () => {

//   const addUser = async () => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: "Kavi",
//           email: "kavi@gmail.com",
//         }),
//       });

//       const data = await res.json();
//       console.log(data);
//       alert("User Added Successfully");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <h1>POST API Example</h1>

//       <button onClick={addUser}>Add User</button>
//     </div>
//   );
// };

// export default App;






























import React from 'react'

const Normal = () => {
    const kavi = async() =>{
        try{
            const res=await fetch ("https://jsonplaceholder.typicode.com/users",{
                method:"post",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify({
                    name:"kavi",
                    

                  })
            }
            
            )
            const req=await res.json("")
            console.log(req)

        }
        catch(err){
            console.log(err,"err")
        }

    }
  return (
    <>
    <button onClick={kavi}>click meplzz</button>
    </>
  )
}

export default Normal