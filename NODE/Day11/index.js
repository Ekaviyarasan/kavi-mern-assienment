import express from "express"
import cors from "cors"
import  dotenv from "dotenv"
import authValue from "./routes/authRoutes.js"
import connectDB from "./config/db.js"
dotenv.config()
connectDB()
const app=express()
const PORT=process.env.PORT||5000
app.use(cors())
app.use(express.json())
app.use("/api/auth",authValue)
app.listen(PORT,()=>{
    console.log(`server running on:http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/auth