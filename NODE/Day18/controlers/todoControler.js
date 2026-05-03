import productModel from "../models/productModel.js";


export const added = async(req,res)=>{

 const {producName} = req.body

 const image = req.file.filename

 const fullpath = `http://localhost:5000/uploads/${image}`

  try {


    const productadd = await productModel.create({producName,image:fullpath})

    res.status(200).json({msg:"successfully added"})
    
  } catch (error) {
      
    console.log('Error',error);
    
     res.status(404).json({msg:error})
  }




}



export const getDatas = async(req,res)=>{


   const dataGet = await productModel.find() 
  res.status(200).json({dataGet})


}