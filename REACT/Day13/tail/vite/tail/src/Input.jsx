// import React from 'react'

// function Input() {
//   return (
//     <>
//     <h1>SIMPLE</h1>
//     </>
//   )
// }

// export default Input

// export default  function Input(){
//     const data="value"
//     return(<>
//         <h1>{data}</h1>
//         </>)
// }

export default function Input(){
    // const kavi={
    //     name:"rolex",
    //     number:6385538234
    // }
    return(<>
    <div className="flex">
    {/* <h1 className="bg-green-400 text-center w-200 h-130 ">{kavi.name}</h1>
        <h1 className="bg-pink-400 text-center w-200 h-130 ">{kavi.number}</h1> */}
        <img src="k.jpg " className=" w-170 h-130 transition-transform duration-[2000ms] hover:translate-x-20"></img>
        <img src="l.jpg" className="w-170 h-130 transition-transform duration-[2000ms] hover:translate-x-20"></img>
    </div>
    
    </>)
}