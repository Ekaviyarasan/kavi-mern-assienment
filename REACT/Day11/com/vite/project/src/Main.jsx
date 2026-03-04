// //  import { StrictMode } from 'react'
// //  import { createRoot } from 'react-dom/client'
// //  import './index.css'
// //  import App from './App.jsx'

// //  createRoot(document.getElementById('root')).render(
// //    <StrictMode>
// //      <App />
// //    </StrictMode>,
// //  )


// function Main() {
//   return <p>This is the main content area.</p>;
// }
// export default Main
// ;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);