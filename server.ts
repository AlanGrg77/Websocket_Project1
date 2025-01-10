import app from "./src/app";
import envConfig from "./src/config/config";
import connectToDB from "./src/config/db";

const startServer = async () =>{
    await connectToDB()
    const port = envConfig.port || 4000
    app.listen(port,()=>{
        console.log(`Server has started at port ${port}`)
    })
}
startServer()