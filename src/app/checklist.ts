export class Checklist {

    id: number;
    username: string;
    todolist: Array<ToDoList>

}

export class ToDoList {
    isDone: boolean;
    taskID: string;
    taskDesc: string;
    isEditable: boolean;
}
