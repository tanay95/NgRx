import todo from "../model/todo.model";

export interface todoListState {
    todoList: ReadonlyArray<todo>; 
}

export const intialTodoState : todoListState = {
    todoList : []
} 