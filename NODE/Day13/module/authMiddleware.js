import mongoose from "mongoose";



const middlewarevalidSchema = new mongoose.Schema({

    userName:String,
    userEmail:String,
    userPassword:String

},{timestamps:true})


const middlewareModel = mongoose.model("middlewareDatas",middlewarevalidSchema)

export default middlewareModel