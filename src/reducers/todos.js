const initialState = {
  viewMode: 'list',
  todos: [
    {
      id: 1,
      title: 'test 1',
      date: '2017-04-20T00:00:00Z',
      details: 'test details',
      completed: false,
      menuOpen: false
    },
    {
      id: 2,
      title: 'test 3',
      date: '2017-04-22T00:00:00Z',
      details: 'test details',
      completed: true,
      menuOpen: false
    },
    {
      id: 3,
      title: 'test 2',
      date: '2017-04-21T00:00:00Z',
      details: 'test details',
      completed: false,
      menuOpen: false
    },
    {
      id: 4,
      title: 'test 3',
      date: '2017-04-22T00:00:00Z',
      details: 'test details',
      completed: false,
      menuOpen: false
    },
    {
      id: 5,
      title: 'test 3',
      date: '2017-04-22T00:00:00Z',
      details: 'test details',
      completed: true,
      menuOpen: false
    }
  ]
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
