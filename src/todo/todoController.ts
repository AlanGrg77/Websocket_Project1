import { Socket } from "socket.io";
import { getSocketIo } from "../../server";
import { IToDo } from "./todoTypes";
import todoModel from "./todoModel";

class Todo{
    private io = getSocketIo()
    constructor(){
        this.io.on('connection',(socket)=>{
            console.log(`New client connected`)
            socket.on('addTodo',(data) =>this.handleAddTodo(socket,data))
            socket.on('deleteTodo',(data) =>this.handleDeleteTodo(socket,data))
        })
    }
    private handleAddTodo = async (socket:Socket,data:IToDo) =>{ 
        try {
            const {text,deadLine,status} = data
        await todoModel.create({
            text,
            deadLine,
            status
        })
        const todos = await todoModel.find()
        socket.emit('todo_updated',{
            status : 'success',
            data : todos
        })

        } catch (error) {
            socket.emit('todo_response',{
                status: 'error',
                error
            })
        }
    }

    private handleDeleteTodo = async (socket:Socket,data:{id:string}) =>{
        try {
            const {id} = data
        const deleteTodDo = await todoModel.findByIdAndDelete(id)
        if(!deleteTodDo){
            socket.emit('todo_response',{
                status : 'Error',
                message : 'Todo not found'
            })
            return
        }
        } catch (error) {
            socket.emit('todo_response',{
                status: 'error',
                error
            })
        }
    }
}

export default new Todo()

