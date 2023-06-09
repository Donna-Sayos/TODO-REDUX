import * as actions from "./actionTypes";

// ACTION CREATORS
export const setTodos = (todos) => ({
  type: actions.SET_TODOS,
  payload: {
    todos,
  },
});

export const addTodo = (todo) => ({
  type: actions.ADD_TODO,
  payload: {
    todo: {
      ...todo,
      createdAt: todo.createdAt ? todo.createdAt : null, // in case a timeStamp is passed in
    },
  },
});

export const removeTodo = (id) => ({
  type: actions.REMOVE_TODO,
  payload: {
    id,
  },
});

export const toggleTodo = (id) => ({
  type: actions.TOGGLE_TODO,
  payload: {
    id,
  },
});

export const updateTodo = (id, todo) => ({
  type: actions.UPDATE_TODO,
  payload: {
    id,
    todo,
  },
});

export const clearTodos = () => ({
  type: actions.CLEAR_TODOS,
});

export const undo = () => ({ // FIXME: testing feature
  type: actions.UNDO,
});

export const redo = () => ({ // FIXME: testing feature
  type: actions.REDO,
});
