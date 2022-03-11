export interface Task{
    _id?: {$oid: string};
    name: string;
    createdDate: string;
    endDate?: string;
    isDone: boolean;
}