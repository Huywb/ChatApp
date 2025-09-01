
import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
    
        const connect = await mongoose.connect(process.env.DB_URL)
        if(!connect){
            console.log("Database connection failed")
        }
        console.log(connect.connection.host)
        console.log(connect.connection.name)
    } catch (error) {
        console.log(error)
    }
}