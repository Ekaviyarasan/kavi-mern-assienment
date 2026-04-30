import todoModel from "../models/todoModel.js";

export const createTodo = async (req,res)=>{

  //console.log(req.body);
  
  try {

    const {taskName,taskType,taskDate} = req.body

    const create = await todoModel.create({taskName,taskType,taskDate})

    res.status(201).json({msg:"Successfully The Task Added"})
    
  } catch (error) {

    console.log('error',error);
    
     res.status(404).json({msg:"error",error})
  }


}



export const getTodo = async (req,res)=>{

   try {

    const getData = await todoModel.find()

    res.status(200).json({getData})
    
   } catch (error) {
 
     console.log('error',error);
    
     res.status(404).json({msg:"error",error})

    
   }

}


export const updateTodo = async (req,res)=>{


    const {taskName,taskType,taskDate} = req.body
    const {userid} = req.params 


try {



// { returnDocument: 'after' }
    const updateData = await todoModel.findByIdAndUpdate(userid,{taskName,taskType,taskDate}, { returnDocument: 'after' })
   
    res.status(200).json({msg:"Successfully Updated"})

    
} catch (error) {


  console.log('error',error);
    
     res.status(404).json({msg:"error",error})

    
}



}



export const deleteTodo = async(req,res)=>{



    try {

         const {userid} = req.params 

         const deteleData = await todoModel.findByIdAndDelete(userid)

          res.status(200).json({msg:"Successfully Deleted"})
        
    } catch (error) {

    console.log('error',error);
    
     res.status(404).json({msg:"error",error})
        
    }




}