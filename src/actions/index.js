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
}
