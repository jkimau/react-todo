import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { closeAllTodoMenus, setViewMode } from 'actions';
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
  background: white;

  >div {
    width: 33.33%;
  }
`;

const MainTitle = styled.div`
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
  height: ${topMenuHeight};
`;

export class App extends Component {
  constructor(props) {
    super(props);

    this.documentClickHandler = this.documentClickHandler.bind(this);
    this.changeViewModeHandler = this.changeViewModeHandler.bind(this);
    this.setInitialViewMode = this.setInitialViewMode.bind(this);

    this.setInitialViewMode();
  }

  changeViewModeHandler(mode) {
    this.props.setViewMode(mode)
  }

  documentClickHandler(e) {
    const classNames = e.target.className.split(' ');
    if (!classNames.includes('todo-menu-trigger')) {
      this.props.closeAllTodoMenus();
    }
  }

  setInitialViewMode() {
    const path = this.props.location.pathname;
    const mode = path.replace(/\//, '');
    this.props.setViewMode(mode)
  }

  render() {
    return (
      <div className="app-container" onClick={this.documentClickHandler}>
        <TopMenuBar>
          <div>
            <TopNavigation
              viewMode={this.props.viewMode}
              changeViewModeHandler={this.changeViewModeHandler}
            />
          </div>
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

App.propTypes = {
  viewMode: PropTypes.string,
  closeAllTodoMenus: PropTypes.func
};

const mapStateToProps = ({ todoState: { viewMode }}) => {
  return { viewMode }
};

const mapDispatchToProps = dispatch => {
  return {
    closeAllTodoMenus: () => { dispatch(closeAllTodoMenus()) },
    setViewMode: (mode) => { dispatch(setViewMode(mode)) }
  }
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
