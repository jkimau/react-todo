import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { topMenuHeight } from 'global/variables';

const Nav = styled.div`
  width: 40%;
  height: ${topMenuHeight};
`;

const List = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0 5px;
`;

export default class TopNavigation extends Component {
  render() {
    const linkStyle = { textDecoration: 'none', color: 'black' };
    return (
      <Nav>
        <ul>
          <List><Link style={linkStyle} to='/list'>List view</Link></List>
          <List><Link style={linkStyle} to='/calendar'>Calendar view</Link></List>
        </ul>
      </Nav>
    )
  }
}
