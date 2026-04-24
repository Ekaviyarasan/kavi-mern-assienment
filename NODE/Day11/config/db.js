import mongoose from "mongoose";
const connectDB = async ()=>{
    try{
        
    const conn=await mongoose.connect(process.env.MONGO_URI)
    console.log(`Data connect sucessfuly${conn.connection.host}`);
    }
catch(err){
    console.log(err ,"error");
    process.exit(0)
    
}
    
}
export default connectDB
