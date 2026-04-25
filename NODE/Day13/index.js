import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import middlewareRoutes from './routes/middlewareRoutes.js'
import connectDB from './config/db.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/middleware",middlewareRoutes)

const PORT = process.env.PORT || 4000

connectDB()
app.listen(PORT,()=>{
    console.log(`Server COnnected on http://localhost:${PORT}`);
    
})