import http from 'http'

import dotenv from 'dotenv'

import {createFile,readFileData,addingText, removeFile} from './File.js'
import { getDatas } from './os.js'
import { abPath, makePath } from './path.js'
import { makeingFile } from './handlingFiles.js'

dotenv.config()


const app = http.createServer()

const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})

 File System
 createFile()
 readFileData()
 removeFile()
 addingText()


 path

 makePath()
 abPath()
 OS
 getDatas()

 makeingFile()