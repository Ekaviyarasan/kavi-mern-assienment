import middlewareModel from "../models/middlewareModel.js";
import bcrypt from 'bcrypt'
export const insertDatas = async(req,res)=>{

    //console.log(req.body);

    const {userName,userEmail,userPassword} = req.body

    try {
        
        const hashed = await bcrypt.hash(userPassword,10)
        const added = await middlewareModel.create({userName,userEmail,userPassword:hashed})
        res.status(201).json({msg:"Successfully insert"})
        
    } catch (error) {

        console.log('error',error);
        
        
    }
}