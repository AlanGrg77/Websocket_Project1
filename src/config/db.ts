import mongoose from "mongoose";
import envConfig from "./config";

const connectToDB = async() => {
    try {
        mongoose.connection.on('connected',()=>{
            console.log('Connected to databse successfully')
        })
        await mongoose.connect(envConfig.mongooseDBString as string) 
    } catch (error) {
        console.log('Connection to database unsuccessfull')
    }
}

export default connectToDB