import path from 'path'


export const makePath = ()=>{

   const pathmake =  path.join("client","documents","data.txt")
   
   console.log(pathmake);
   

   

}

export const abPath = ()=>{
  
//   const start = "Day3"  
//   const pathLink =  path.relative(start,"backend/file.js")

//   console.log(pathLink);

console.log(path.basename("D:\BackEnd---Batch-4-to-6-17-02-2026\Node\Day3\backend\index.js"));

  
   
}