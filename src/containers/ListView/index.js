import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

class ListView extends Component {

  toggleRowMenuHandler(id) {
    const newTodos = this.state.todos.slice();
    newTodos.forEach(todo => {
      todo.menuOpen = todo.id === id ? !todo.menuOpen : false;
    });

    this.setState(prevState => ({
      ...prevState,
      todos: newTodos
    }));
  }

  closeAllRowMenu(e) {
    e.stopPropagation();
    const newTodos = this.state.todos.slice();
    newTodos.forEach(todo => { todo.menuOpen = false });

    this.setState(prevState => ({
      ...prevState,
      todos: newTodos
    }));
  }

  render() {
    return (
      <MainContainerWrapper>
        <h1>List view page</h1>
        <ContentContainer>
          <TodoListWarpper>
            {this.props.todos.map(todo => (
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
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return todos;
};

export default connect(mapStateToProps)(ListView);
