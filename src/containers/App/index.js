import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { closeAllTodoMenus } from 'actions';
import TopNavigation from 'components/TopNavigation';
import SearchInput from 'components/Search';
import ListView from 'containers/ListView';
import CalendarView from 'containers/CalendarView';
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

class App extends Component {
  constructor(props) {
    super(props);

    this.documentClickHandler = this.documentClickHandler.bind(this);
  }

  documentClickHandler(e) {
    const classNames = e.target.className.split(' ');
    if (!classNames.includes('todo-menu-trigger')) {
      this.props.closeAllTodoMenus();
    }
  }

  render() {
    return (
      <div className="app-container" onClick={this.documentClickHandler}>
        <TopMenuBar>
          <TopNavigation />
          <MainTitle>TODO</MainTitle>
          <SearchInputWrapper>
            <SearchInput />
          </SearchInputWrapper>
        </TopMenuBar>

        <Route exact path="/" component={ListView}/>
        <Route path="/list" component={ListView}/>
        <Route path="/calendar" component={CalendarView}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  closeAllTodoMenus: () => { dispatch(closeAllTodoMenus()) }
})

export default connect(
  null,
  mapDispatchToProps
)(App);
