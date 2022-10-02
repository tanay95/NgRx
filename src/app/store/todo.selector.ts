import { createFeatureSelector, createSelector, createSelectorFactory } from "@ngrx/store";
import { featureKey } from "./todo.reducer";
import { todoListState } from "./todo.state";

export const selectTodosSliceState = createFeatureSelector<todoListState>(featureKey);

export const selectTodos = createSelector(
selectTodosSliceState,
(state: todoListState) => state.todoList
)