import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import valueRout from "./routes/valueRoutes.js"
import connectDB from "./config/db.js"
dotenv.config()
connectDB()
const app=express()
const PORT=process.env.PORT||5000
app.use(cors())
app.use(express.json())
app.use("/api/value",valueRout)

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/value