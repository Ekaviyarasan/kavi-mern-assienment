import fs from 'fs'


export const createFile = ()=>{


    fs.writeFile("data.txt","My First File Text",(err)=>{
     
        if(err){
            console.log(err);
            return
        }

        console.log('File Created Successfully');
        
    })


    

}


export const readFileData = ()=>{


    fs.readFile("data.txt","utf-8",(err,data)=>{
        if(err){
            console.log('something error',err);
            return
        }

        console.log(data);
        
    })

} 

export const addingText = ()=>{

    fs.appendFile("data.txt","/nAdding the datas",()=>{
        console.log("Added Succfully");
        
    })

}


export const removeFile = ()=>{
    fs.unlink("data.txt",()=>{
        console.log('Succfully Removed');
        
    })
}