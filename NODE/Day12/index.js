import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js'
import connectDB from './config/db.js'

dotenv.config()


const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoutes)
const PORT = process.env.PORT || 3000

connectDB()
app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/auth