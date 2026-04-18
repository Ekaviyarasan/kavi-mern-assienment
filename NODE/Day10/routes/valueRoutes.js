import express from "express"
import { valueCreate } from "../controler/valueControler.js"

const valus=express.Router()


valus.post("/create",valueCreate)

export default valus

//  http://localhost:5000/api/value/create