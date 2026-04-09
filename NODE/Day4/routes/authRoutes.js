import express from "express";
import { authData,getParams, quesryDatas, headerData } from "../controler/authController.js";



const route = express.Router()


route.post("/user",authData)
route.get("/paramsuser/:userid",getParams)
route.get("/quesrydata",quesryDatas)
route.post("/headers",headerData)
export default route


// http://localhost:5000/api/auth/user
// http://localhost:5000/api/auth/paramsuser
// http://localhost:5000/api/auth/quesrydata
// http://localhost:5000/api/auth/headers