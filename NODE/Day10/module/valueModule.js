import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentname:String,
    studentid:Number,
    studentcourse:String,
    createdby:{type:String,default:"admin"},
    updatedby:{type:String,default:"admin"}

},{timestamps:true})

const valueModule = mongoose.model("studentData",studentSchema)

export default valueModule