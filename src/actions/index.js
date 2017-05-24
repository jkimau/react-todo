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
