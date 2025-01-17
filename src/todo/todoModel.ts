import { IToDo, Status } from './todoTypes';
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema<IToDo>({
    text : String,
    deadLine : String,
    status : {
        type : String,
        enum : [Status.Completed,Status.Pending],
        default : Status.Pending
    }

})

export default mongoose.model('Todo',todoSchema)