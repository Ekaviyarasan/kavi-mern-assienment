import express from 'express'
import { checkLogin, getDashBoardInfo, insertDatas } from '../controllers/authController.js'
import { checkToken } from '../middleware/verification.js'

// http://localhost:5000/api/auth/login
// http://localhost:5000/api/auth/dashboard
const routes = express.Router()

routes.post('/login',checkLogin)
routes.post('/register',insertDatas)
routes.get('/dashboard',checkToken,getDashBoardInfo)
export default routes