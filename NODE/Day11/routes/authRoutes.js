import express from "express"
import { authcreate } from "../controler/authControler.js"
const rout=express.Router()
rout.post("/create",authcreate)

export default rout

// http://localhost:5000/api/auth/create
