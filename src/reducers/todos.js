import initialTodos from 'initialTodos';

const initialState = {
  viewMode: 'list',
  todos: initialTodos
};

const todos = (state = initialState, action) => {
  const newTodos = [...state.todos];

  switch (action.type) {
    case 'ADD_TODO':
      const todo = action.data;
      return { ...state, todo };

    case 'TOGGLE_TODO_MENU':
      const todoId = action.data.id;
      newTodos.forEach(todo => {
        todo.menuOpen = todo.id === todoId ? !todo.menuOpen : false;
      });
      return { ...state, todos: newTodos };

    case 'CLOSE_ALL_TODO_MENUS':
      newTodos.forEach(todo => {
        todo.menuOpen = false;
      });
      return { ...state, todos: newTodos };

    default:
      return state;
  }
};

export default todos;
