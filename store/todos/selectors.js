export const selectTodos = (state) => state.todos;

export const selectTodo = (id) => (state) =>
  selectTodos(state).find((todo) => todo.id === id);
