const initialState = {
  viewMode: 'list',
  isFetching: false,
  todos: []
};

const todoState = (state = initialState, action) => {
  const newTodos = [...state.todos];

  switch (action.type) {
    case 'FETCHING_TODOS':
      return { ...state, isFetching: true };

    case 'TODOS_FETCHED':
      return { ...state, isFetching: false, todos: action.data };

    case 'ADD_TODO':
      const todo = action.data;
      newTodos.push(todo);
      return { ...state, todos: newTodos };

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

export default todoState;
