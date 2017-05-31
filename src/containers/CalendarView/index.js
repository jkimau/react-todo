import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTodos, toggleTodoMenu, setViewMode } from 'actions';

class CalendarView extends Component {
  componentDidMount() {
    if (!this.props.isFetching) {
      this.props.fetchTodos();
    }
  }

  shouldComponentUpdate(nextState) {
    const hasSameTodos = this.props.todos.length === nextState.todos.length;
    const hasSameViewMode = this.props.viewMode === nextState.viewMode;
    return !hasSameTodos && !hasSameViewMode;
  }

  render() {
    return (
      <h1>Calendar view page</h1>
    );
  }
}

const mapStateToProps = ({ todoState: { isFetching, todos } }) => {
  return { isFetching, todos }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    toggleTodoMenuHandler: (id) => dispatch(toggleTodoMenu(id)),
    setViewMode: (mode) => dispatch(setViewMode(mode))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarView);
