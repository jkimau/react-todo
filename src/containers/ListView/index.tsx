import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TodoRow from 'components/TodoRow';
import Loading from 'components/Loading';
import { mainBG, todoRowBorder } from 'global/colors';
import { fetchTodos, setViewMode, toggleTodoMenu } from 'actions';
// import { TodoPropTypes } from 'propTypes';

const ListViewWrapper = styled.div`
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

export interface ListViewPropTypes {
  todos: Array<{
    id: number,
    title: string,
    date: string,
    details: string,
    completed: boolean,
    menuOpen: boolean
  }>,
  isFetching: boolean,
  fetchTodos(): void,
  setViewMode(mode: string): void,
  toggleTodoMenu(id: number): void
}

export class ListView extends Component<ListViewPropTypes, null> {
  componentDidMount() {
    if (!this.props.isFetching) {
      this.props.fetchTodos();
    }
  }

  shouldComponentUpdate(nextState) {
    const hasSameTodos = this.props.todos === nextState.todos;
    return !hasSameTodos;
  }

  render() {
    const todoListWrapper = () => (
      <TodoListWarpper>
        {this.props.todos.map(todo => (
          <TodoRow
            key={todo.id}
            todo={todo}
            toggleTodoMenu={this.props.toggleTodoMenu}
          />
        ))}
      </TodoListWarpper>
    );

    const loading = () => (<Loading/>);

    return (
      <ListViewWrapper>
        <h1>List view page</h1>
        <ContentContainer>
          {
            this.props.todos
            && this.props.todos.length > 0
            ? todoListWrapper()
            : loading()
          }
        </ContentContainer>
      </ListViewWrapper>
    );
  }
}

const mapStateToProps = ({ todoState: { isFetching, todos }}) => {
  return { isFetching, todos }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    setViewMode: (mode: string) => dispatch(setViewMode(mode)),
    toggleTodoMenu: (id: number) => dispatch(toggleTodoMenu(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);
