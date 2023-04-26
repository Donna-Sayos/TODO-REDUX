import * as actionCreators from "./actionCreators";
import Axios from "axios";

// THUNKS
export const fetchTodos_ = () => async (dispatch) => {
  try {
    const { data } = await Axios.get(`/api/v1/todos`);
    dispatch(actionCreators.setTodos(data));
  } catch (err) {
    console.log(`Error in fetchTodos thunk: ${err}`);
  }
};

export const fetchSingleTodo_ = (id) => async (dispatch) => {
  try {
    const { data } = await Axios.get(`/api/v1/todos/${id}`);
    dispatch(actionCreators.setTodo(data));
  } catch (err) {
    console.log(`Error in fetchSingleTodo thunk: ${err}`);
  }
};

export const addTodo_ = (todo) => async (dispatch) => {
  try {
    const { data } = await Axios.post(`/api/v1/todos`, { description: todo });
    dispatch(actionCreators.addTodo(data));
  } catch (err) {
    console.log(`Error in addTodo thunk: ${err}`);
  }
};

export const removeTodo_ = (id) => async (dispatch) => {
  try {
    const { data } = await Axios.delete(`/api/v1/todos/${id}`);
    dispatch(actionCreators.removeTodo(data.id));
  } catch (err) {
    console.log(`Error in removeTodo thunk: ${err}`);
  }
};

export const toggleTodo_ = (id) => async (dispatch) => {
  try {
    const { data } = await Axios.put(`/api/v1/todos/${id}/toggle`);
    dispatch(actionCreators.toggleTodo(data.id));
  } catch (err) {
    console.log(`Error in toggleTodo thunk: ${err}`);
  }
};

export const updateTodo_ = (id, todo) => async (dispatch) => {
  try {
    const { data } = await Axios.put(`/api/v1/todos/${id}`, {
      description: todo,
    });
    dispatch(actionCreators.updateTodo(data.id, data));
  } catch (err) {
    console.log(`Error in updateTodo thunk: ${err}`);
  }
};

export const clearTodos_ = () => async (dispatch) => {
  try {
    await Axios.delete(`/api/v1/todos/clear`);
    dispatch(actionCreators.clearTodos());
  } catch (err) {
    console.log(`Error in clearTodos thunk: ${err}`);
  }
};