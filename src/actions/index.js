import initialTodos from '../initialTodos';

const fetchTodoPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(initialTodos);
    }, 1000);
  });
};

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    data: {
      id: new Date().getTime(),
      date: todo.date,
      text: todo.text
    }
  }
};

export const toggleTodoMenu = (todoId) => {
  return {
    type: 'TOGGLE_TODO_MENU',
    data: {
      id: todoId
    }
  }
};

export const closeAllTodoMenus = () => {
  return {
    type: 'CLOSE_ALL_TODO_MENUS'
  }
};

export const getTodos = () => {
  return {
    type: 'GET_TODOS',
    data: initialTodos
  }
};

export const fetchingTodos = () => {
  return { type: 'FETCHING_TODOS' }
}

export const todosFetched = (todos) => {
  return {
    type: 'TODOS_FETCHED',
    data: todos
  }
}

export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchingTodos());

    fetchTodoPromise().then(response => {
      dispatch(todosFetched(response))
    });
  }
}

export const setViewMode = (mode) => {
  return {
    type: 'SET_VIEW_MODE',
    data: mode
  }
}
