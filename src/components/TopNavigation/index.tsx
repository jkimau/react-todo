import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { topMenuHeight } from 'global/variables';

const Nav = styled.nav`
  width: 40%;
  height: ${topMenuHeight};
`;

const List = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0 5px;
`;

interface TopNavigationPropTypes {
  viewMode: string,
  changeViewModeHandler(mode: string): void
}

export default class TopNavigation extends Component<TopNavigationPropTypes, null> {
  constructor(props) {
    super(props);

    this.changeViewMode = this.changeViewMode.bind(this);
  }

  changeViewMode(mode: string) {
    this.props.changeViewModeHandler(mode);
  }

  render() {
    const linkStyle = { textDecoration: 'none' };
    return (
      <Nav>
        <ul>
          <List>
            <Link
              id="list-nav-link"
              style={{
                ...linkStyle,
                color: this.props.viewMode === 'list' ? 'blue' : 'black'
              }}
              to='/list'
              onClick={() => {this.changeViewMode('list')}}>
              List view
            </Link>
          </List>
          <List>
            <Link
              id="calendar-nav-link"
              style={{
                ...linkStyle,
                color: this.props.viewMode === 'calendar' ? 'blue' : 'black'
              }}
              to='/calendar'
              onClick={() => {this.changeViewMode('calendar')}}>
              Calendar view
            </Link>
          </List>
        </ul>
      </Nav>
    )
  }
}
