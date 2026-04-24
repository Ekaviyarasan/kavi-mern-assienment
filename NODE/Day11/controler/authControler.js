
import mongoose from "mongoose";
import authModule from"../module/authModule.js"
export const authcreate = async(req,res)=>{
  try{
    const{name,email,password}=req.body
    const add = await authModule.create({name,email,password})
    res.status(201).json({msg:"succesfuly save",add})
    
  }
  catch(err){
    console.log(err ,"err");
    res.status(404).json({msg:"error"})

    
  }
    
}