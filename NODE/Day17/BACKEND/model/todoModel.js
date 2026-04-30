import mongoose from "mongoose";


const todoSchema =  new mongoose.Schema({

    taskName:String,
    taskType:String,
    taskStatus:{type:Number,default:0},
    taskDate:Date

},{timestamps:true})


const todoModel = mongoose.model("todolist",todoSchema)


export default todoModel