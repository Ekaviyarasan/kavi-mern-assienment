import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db"
import authcreate from "./routes/authRoutes.js"
dotenv.config()
const app=express()
connectDB()
app.use(cors())
app.use(express.json())
app.use("/api/auth",authcreate)

const PORT=process.env.PORT||5000



app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})