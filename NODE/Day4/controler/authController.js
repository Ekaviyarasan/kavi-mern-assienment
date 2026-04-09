export const authData = (req,res)=>{

    console.log(req);

    const {name,subject,datas} = req.body

      if(name==="React"){
         res.status(200).json({msg:"Data Good"})
      }else{
         res.status(400).json({msg:"Not Good"})
      }


}


export const getParams = (req,res)=>{

    console.log(req);

    const {userid} = req.params

    if(userid==='1000'){
        res.status(200).json({msg:"Done"})
    }else{
        res.status(500).json({msg:"Not Done"})
    }

}


export const quesryDatas  = (req,res)=>{

    console.log(req);

     const {userid} = req.params

     if(userid==='1000'){
         res.status(200).json({msg:"Done"})
     }else{
         res.status(500).json({msg:"Not Done"})
     }

}


export const headerData = (req,res)=>{

    console.log(req);
    

}