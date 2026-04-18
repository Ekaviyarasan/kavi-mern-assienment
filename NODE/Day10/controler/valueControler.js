import valueModule from "../module/valueModule.js"

export const valueCreate  = async (req,res)=>{
    try{
        const{studentname,studentid,studentcourse}=req.body
        const add=await valueModule.create({studentname,studentid,studentcourse})
        res.status(201).json({msg:"succesfully created"},add)
    }
    catch(err){
        console.log(err,"err");
        
    }
    
}