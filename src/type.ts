export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// export interface IAction<T, P> extends Action<T>

export interface addTodoAction {
  type: typeof ADD_TODO;
  payload: String;
}

export interface toggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export interface setVisibilityFilterAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}
