import axios from 'axios';

export const SET_TODOS = 'SET_TODOS';

export const loadTodos = () => (dispatch) => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => dispatch(setTodos(response.data)));
};

const setTodos = (todos) => ({
  type: SET_TODOS,
  todos,
});
