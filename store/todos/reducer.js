import {SET_TODOS} from './actions';

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;
    default:
      return state;
  }
}
