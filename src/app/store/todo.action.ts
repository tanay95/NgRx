import { createAction, props } from "@ngrx/store";

export const Add = createAction('[Add] Add To do', props<{text: string}>());

export const Remove = createAction('[Remove] Remove To do', props<{id: string}>());

export const Toggle = createAction('[Toggle] Toggle To do',props<{
    id: string
}>());
