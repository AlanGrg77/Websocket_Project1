export enum Status{
    Completed = 'complete',
    Pending = 'pending'
}
export interface ToDo{
    text : string,
    deadLine : string,
    status : Status

}