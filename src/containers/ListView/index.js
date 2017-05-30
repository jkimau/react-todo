import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TodoRow from 'components/TodoRow';
import { mainBG, todoRowBorder } from 'global/colors';
import { getTodos, toggleTodoMenu } from 'actions'

const ListViewWrapper = styled.div`
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
  constructor(props) {
    super(props);

    this.state = { todos: null };
  }

  componentDidMount() {
    this.props.getTodosAsync().then((response) => {
      this.setState({ todos: response.data });
    });
  }

  render() {
    const todoListWrapper = () => (
      <TodoListWarpper>
        {this.state.todos.map(todo => (
          <TodoRow
            key={todo.id}
            todo={todo}
            clickTodoMenuHandler={this.props.toggleTodoMenuHandler}
          />
        ))}
      </TodoListWarpper>
    );

    const loading = () => (
      <div>Loading...</div>
    );

    return (
      <ListViewWrapper>
        <h1>List view page</h1>
        <ContentContainer>
          {this.state.todos ? todoListWrapper() : loading()}
        </ContentContainer>
      </ListViewWrapper>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return todos;
};

const mapDispatchToProps = (dispatch) => ({
  getTodosAsync: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dispatch(getTodos()));
      }, 1000);
    });
  },
  toggleTodoMenuHandler: (id) => {
    dispatch(toggleTodoMenu(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);
