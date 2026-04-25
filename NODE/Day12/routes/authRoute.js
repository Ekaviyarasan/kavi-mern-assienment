import express from 'express'
import { insertData, loginData } from '../controler/authControler.js'


// http://localhost:5000/api/auth/insert
// http://localhost:5000/api/auth/login
const route= express.Router()

route.post("/insert",insertData)
route.post("/login",loginData)


export default route