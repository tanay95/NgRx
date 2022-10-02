import { Action, createReducer, on } from "@ngrx/store";
import todo from "../model/todo.model";
import { Add, Remove, Toggle } from "./todo.action";
import { intialTodoState, todoListState } from "./todo.state";

export const _todoReducer = createReducer(
  intialTodoState,
  on(Add, (state, { text }) => ({
    ...state,
    todoList: [
      ...state.todoList,
      { id: '1', description: text, status: true } as todo,
    ],
  })),
  on(Remove, (state, {id }) => ({
    ...state,
    todoList : state.todoList.filter(i => i.id !== id)
  })),

  on(Toggle,(state, {id}) => ({
    ...state,
    todoList: state.todoList.map(ele => (ele.id === id ? {...ele,todo: !ele.status} : ele) ) 
  }))
);

export function todoreducer(state: todoListState | undefined,action: Action) {
  return _todoReducer(state,action);
}

export const featureKey = 'todosState';