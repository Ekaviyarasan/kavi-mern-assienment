
import './App.css'
import Navber from './Navebar'
import Welcome from './Welcome'

function App() {
  

  return (
    <>
   

<h1 className="text-4xl font-bold text-green-500 bg-pink-500 text-center">THE FIGHTERS</h1>  
 
    <Navber />    
     <Welcome/> 
    </>
  )
}

 export default App
// export default function App() {
//   const name = "John";

//   return (
//     <div>
//       <h1>Hello {name}</h1>
//     </div>
//   );
// }

// export default function App() {
//   const isLoggedIn = false;

//   if (isLoggedIn) {
//     return <h1>Welcome User</h1>;
//   }

//   return <h1>Please Login</h1>;
// }


// export default function App() {
//   const isAdmin = true;

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {isAdmin && <button>Delete User</button>}
//     </div>
//   );
// }
// export default function App() {
//   const username = null;

//   return (
//     <h1>Hello {username ?? "Guest"}</h1>
//   );
// }

