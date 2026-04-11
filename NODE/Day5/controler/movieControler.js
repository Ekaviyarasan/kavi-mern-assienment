export const movieCreate=(req,res)=>{
const{
    acter,
    movie
}=req.body

try{
const data=[]

const obj={acter:acter,
    movie:movie}
    data.push(obj)

    console.log(data);
    res.status(200).json({msg:"succesfly update"})
    
}
catch(err){
    console.log("Error",err);
    res.status(200).json({msg:"updete error"})
    

}

}

export const moviegetbyParams=(req,res)=>{
console.log(req);

}


export const movieFilter=(req,res)=>{
console.log(req);

}

export const movieToken=(req,res)=>{
console.log(req.headers.authorization);

}

