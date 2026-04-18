import express from "express"
import { authCreate } from "../controler/authControler.js"

const rout=express.Router()

rout.post(`/create`,authCreate)




export default rout

// http://localhost:5000/api/auth/create