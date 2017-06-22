import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { topMenuHeight } from 'global/variables';

const Nav = styled.nav`
  height: ${topMenuHeight};
`;

const List = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0 5px;
`;

export default class TopNavigation extends Component {
  constructor(props) {
    super(props);

    this.changeViewMode = this.changeViewMode.bind(this);
  }

  changeViewMode(mode) {
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

TopNavigation.propTypes = {
  viewMode: PropTypes.string,
  changeViewModeHandler: PropTypes.func
};
