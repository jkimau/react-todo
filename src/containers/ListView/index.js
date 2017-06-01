import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TodoRow from 'containers/TodoRow';
import Loading from 'components/Loading';
import { mainBG, todoRowBorder } from 'global/colors';
import { fetchTodos, setViewMode } from 'actions';

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

class ListView extends Component {
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
          />
        ))}
      </TodoListWarpper>
    );

    const loading = () => (<Loading/>);

    return (
      <ListViewWrapper>
        <h1>List view page</h1>
        <ContentContainer>
          {this.props.todos.length > 0 ? todoListWrapper() : loading()}
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
    setViewMode: (mode) => dispatch(setViewMode(mode))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);
