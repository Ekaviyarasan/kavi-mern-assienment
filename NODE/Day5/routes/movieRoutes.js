import express from "express"
import { movieCreate,  movieFilter,moviegetbyParams, movieToken } from "../controler/movieControler.js"
// http://localhost:5000/api/movie/create
// http://localhost:5000/api/movie/getbyParams/101
// http://localhost:5000/api/movie/moviefilter
// http://localhost:5000/api/movie/aditional



const route =express.Router()

route.post('/create',movieCreate)
route.get('/getbyparams/:movieid',moviegetbyParams)
route.get('/moviefilter',movieFilter)
route.get('/aditional',movieToken)

export default route