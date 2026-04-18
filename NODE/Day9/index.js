import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authValue from "./routes/authRoutes.js"
dotenv.config()
const app= express()
app.use(cors())
app.use('./api/auth/',authValue)
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/auth