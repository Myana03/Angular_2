import { createAction } from "@ngrx/store";

export const increment = createAction('counter App increment action')
export const decrement = createAction('counter App decrement action')
export const reset = createAction('counter App reset action')