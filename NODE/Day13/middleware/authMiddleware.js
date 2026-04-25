import middlewareModel from "../models/middlewareModel.js"

export const validateUsers = async(req,res,next)=>{


    const {userName,userEmail,userPassword} = req.body

    const checkEmail = await middlewareModel.findOne({userEmail})

    if(checkEmail) {
        res.status(404).json({msg:"Alert In Use"})
        return
    }

    if(!userName || !userEmail || !userPassword) {
        res.status(404).json({msg:"Please Fill the Datas"})
        return
    }
    
    if(userPassword.length < 6){
        res.status(404).json({msg:"Need more"})
        return
    }

    next()

}