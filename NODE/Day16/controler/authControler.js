import bcrypt from 'bcrypt'
import authModle from '../models/authModel.js'
import jwt from 'jsonwebtoken'

export const insertDatas = async(req,res)=>{

    //console.log(req.body);

    const {username,email,password} = req.body

    try {
        
        const hashed = await bcrypt.hash(password,10)
        const added = await authModle.create({username,email,password:hashed})
        res.status(201).json({msg:"Successfully insert"})
        
    } catch (error) {

        console.log('error',error);
        
        
    }
    

}


export const checkLogin = async(req,res)=>{

const {email,password} = req.body

 try{

  const user = await authModle.findOne({email}) 

  if(!user){
     res.status(404).json({msg:"Email ID Not Match"})
     return
  }

  const passwordCheck = await bcrypt.compare(password,user.password)
  console.log(passwordCheck);
  
  if(!passwordCheck){
     res.status(404).json({msg:"Password  Not Match"})
     return
  }

 
  const token = await jwt.sign({id:user._id,email:user.email},process.env.JWT_SECURE,{expiresIn:"1h"})
  
  console.log(token);
  
  res.status(200).json({msg:"Succfully login",token})


 }catch(err){

    console.log('error',err);
    

 }

   


}



export const getDashBoardInfo = async (req,res)=>{
   
    console.log(req);
    
    try {

      res.status(200).json({msg:"Ok",user:req.setUser})  
        
    } catch (error) {

        console.log('error',error);
        
        
    }

}