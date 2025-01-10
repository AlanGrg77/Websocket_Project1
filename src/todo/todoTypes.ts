export enum Status{
    Completed = 'complete',
    Pending = 'pending'
}
export interface IToDo{
    text : string,
    deadLine : string,
    status : Status

}