import express from 'express'
import { createTodo,getTodo,deleteTodo, updateTodo } from '../controllers/todoController.js'

// http://localhost:5000/api/todo/createtask - insert
// http://localhost:5000/api/todo/gettask - get All values
// http://localhost:5000/api/todo/updatetask/69f1e3fed13d8b4230676238 - Update  values
// http://localhost:5000/api/todo/deletetask/69f1e3fed13d8b4230676238 - delete values

const routes = express.Router()


routes.post("/createtask",createTodo)
routes.get("/gettask",getTodo)
routes.put("/updatetask/:userid",updateTodo)
routes.delete("/deletetask/:userid",deleteTodo)


export default routes