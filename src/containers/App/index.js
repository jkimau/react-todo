import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom'

import TopNavigation from 'components/TopNavigation';
import SearchInput from 'components/Search';
import MainContainer from 'containers/MainContainer';
import { lightGreyBorder } from 'global/colors';
import { topMenuHeight } from 'global/variables';

const TopMenuBar = styled.div`
  display: flex;
  height: ${topMenuHeight};
  border-bottom: 1px solid ${lightGreyBorder};
`;

const MainTitle = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${topMenuHeight};
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  width: 33%;
  height: ${topMenuHeight};
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.closeAllRowMenu = this.closeAllRowMenu.bind(this);
    this.documentClickHandler = this.documentClickHandler.bind(this);
    this.switchViewMode = this.switchViewMode.bind(this);

    this.todoMock = [
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
    ];

    this.state = { todos: this.todoMock, viewMode: 'list' };
  }

  documentClickHandler(e) {
    const hasClickedOnTodoMenuTrigger = e.target.classList.contains('todo-menu-trigger');
    if (!hasClickedOnTodoMenuTrigger) {
      this.closeAllRowMenu();
    }
  }

  closeAllRowMenu() {
    if (this.state.todos.filter(todo => todo.menuOpen).length === 0) { return; }

    const newTodos = this.state.todos.slice();
    newTodos.forEach(todo => { todo.menuOpen = false });

    this.setState(prevState => ({
      ...prevState,
      todos: newTodos
    }))
  }

  switchViewMode(mode) {
    this.setState(prevState => ({
      ...prevState,
      viewMode: mode
    }));
  }

  render() {
    return (
      <div onClick={this.documentClickHandler}>
        <TopMenuBar>
          <TopNavigation
            viewMode={this.state.viewMode}
            switchViewMode={this.switchViewMode} />
          <MainTitle>Sick TODO</MainTitle>
          <SearchInputWrapper>
            <SearchInput />
          </SearchInputWrapper>
        </TopMenuBar>
        <MainContainer
          todos={this.state.todos}
          viewMode={this.state.viewMode} />
      </div>
    );
  }
}

class Test extends Component {
  render() {
    return (
      <h1>Test</h1>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/test' component={Test} />
        </div>
      </Router>
    )
  }
}

export default App;
