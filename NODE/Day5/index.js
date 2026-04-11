import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import movieHD from './routes/movieRoutes.js'

dotenv.config()
const app=express()

app.use(cors())
app.use(express.json())
const PORT=process.env.PORT||5000
app.use('/api/movie',movieHD)

app.listen(PORT,()=>{
console.log(`server running... http://localhost:${PORT}`);

}) 


// http://localhost:5000/api/movie/