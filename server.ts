import app from "./src/app";
import envConfig from "./src/config/config";
import connectToDB from "./src/config/db";
import { Server } from "socket.io";
let io:Server | undefined;
const startServer = () =>{
    connectToDB()
    const port = envConfig.port || 4000
    const server = app.listen(port,()=>{
        console.log(`Server has started at port ${port}`)
    })
    io = new Server(server)

    
    
}

// .then(()=>{
//     Todo.getSocketIo()
// })
function getSocketIo(){
    if(!io){
        throw new Error('Socket not initalized')
    }
    return io;
}
startServer()

export {getSocketIo}
