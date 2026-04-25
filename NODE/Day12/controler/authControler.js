import authModule from "../module/authModule.js"
import bcrypt from 'bcrypt'
export const insertData = async (req,res)=>{

  try {

    const {username,email,password} = req.body

    const emailCheck = await authModule.findOne({email})

    if(emailCheck){
        res.status(404).json({msg:"Already Used"})
    }

    const hashing = await bcrypt.hash(password,10)

    const insertAuth = await authModule.create({username,email,password:hashing})
    console.log(insertAuth);
    
    res.status(201).json({msg:"Succfully Done",insertAuth})
  } catch (error) {

    console.log('error',error);
    
    
  }    

}


export const loginData = async (req,res)=>{

    const {email,password} = req.body

    try {

      const checkemail = await authModule.findOne({email})
      
      if(!checkemail){
        res.status(404).json({msg:"Email Id Is not valid"})
        return
      }

      const passwordcheck = await bcrypt.compare(password,checkemail.password)

      if(!passwordcheck){
        res.status(404).json({msg:"Invalid Password"})
        return
      } 
      
      console.log('checkemail',checkemail);
      
      res.status(200).json({checkemail})
      
    } catch (error) {
      console.log('error',error);
      
    }
   


}