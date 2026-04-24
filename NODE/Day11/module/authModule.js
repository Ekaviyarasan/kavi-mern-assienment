import mongoose, { model } from "mongoose";
const studentScheame = new mongoose.Schema({
    name:String,
    email:String,
    password:Number
},{timestamps:true})
const authModule = mongoose .Model("createschema", studentScheame)