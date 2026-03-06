import Input from "./Input"




const Navber=()=>{
    return(<>
<div className="bg-sky-400 flex gap-2 justify-end text-2xl p-2 m-2 ">
    

    <a href="home"   className="border-b border-pink-300  bg-pink-600 px-6 py-4" >HOME</a>
    <a href="home"  className="border-b border-pink-300 bg-pink-600 px-6 py-4" >CONTENT</a>
    <a href="home"  className="border-b border-pink-300 bg-pink-600 px-6 py-4" >SETTING</a>
    <a href="home"  className="border-b border-pink-300 bg-pink-600 px-6 py-4" >HELP</a>
    <a href="home"  className="border-b border-pink-300 bg-pink-600 px-6 py-4" >EXIT</a>
    
    
    </div>
    <Input/>
   

        
    
    
    </>)
}
export default Navber












