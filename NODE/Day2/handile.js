import path from 'path'
import fs from 'fs'

export const makeingFile = ()=>{
 
    
const pathCreate = path.join("movie","recent")

fs.mkdir(pathCreate,{recursive:true},(err)=>{
    
    if(err){
        console.log('error',err);
        return
    }
    console.log('Folder Created');
    

})


fs.writeFile(`${pathCreate}/data.txt`,"New Movie's List",(error)=>{
    
    if(error){
     console.log('error',error);
     return
    }
    console.log('File Created');
    
})

fs.readFile(`${pathCreate}/data.txt`,"utf-8",(err,data)=>{
    console.log(data);
    
})
   


}