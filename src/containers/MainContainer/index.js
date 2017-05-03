import React, { Component } from 'react';
import styled from 'styled-components';

// import Sidebar from 'components/Sidebar';
import AddTodoForm from 'components/AddTodoForm';
import TodoRow from 'components/TodoRow';
import { mainBG, todoRowBorder } from 'global/colors';

const MainContainerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  background: ${mainBG};
`;

const ContentContainer = styled.div`
  min-width: 400px;
  max-width: 590px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const TodoListWarpper = styled.div`
  border: 1px solid ${todoRowBorder};
`;

export default class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { ...props };

    this.toggleRowMenuHandler = this.toggleRowMenuHandler.bind(this);
    this.closeAllRowMenu = this.closeAllRowMenu.bind(this);
  }

  toggleRowMenuHandler(id) {
    const index = this.state.todos.findIndex(todo => (todo.id === id));
    const newTodos = this.state.todos.slice();
    newTodos[index].menuOpen = !newTodos[index].menuOpen;

    this.setState(prevState => ({
      ...prevState,
      todos: newTodos
    }));
  }

  closeAllRowMenu(e) {
    e.stopPropagation();
    const newTodos = this.state.todos.slice();
    newTodos.forEach(todo => {
      todo.menuOpen = false;
    });

    this.setState(prevState => ({
      ...prevState,
      todos: newTodos
    }));
  }

  render() {
    const { viewMode } = this.props;
    console.log('view mode: ', viewMode);

    return (
      <MainContainerWrapper>
        {/* <Sidebar /> */}
        <ContentContainer>
          <AddTodoForm />
          <TodoListWarpper>
            {this.state.todos.map(todo => (
              <TodoRow
                key={todo.id}
                todo={todo}
                toggleRowMenuHandler={this.toggleRowMenuHandler}
                onBlurHandler={this.closeAllRowMenu}
              />
            ))}
          </TodoListWarpper>
          <p className="App-intro">
            Testing...
          </p>
        </ContentContainer>
      </MainContainerWrapper>
    )
  }
}
