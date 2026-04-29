import jwt from 'jsonwebtoken'
export const checkToken = (req,res,next)=>{

    //console.log(req);
    
    try {
    
      const token = req.headers.authorization 

      if(!token){
        res.status(404).json({msg:"Token is invalid"})
        return
      }

      
      
      const checkjwt = jwt.verify(token,process.env.JWT_SECURE)
      //console.log(checkjwt);

      
      
       req.setUser = checkjwt
      
       next()
        
    } catch (error) {

        console.log('Error',error);
        
        
    }
}