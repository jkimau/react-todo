import React, { Component } from 'react';
import styled from 'styled-components';

import { topMenuHeight } from 'global/variables';

const Nav = styled.div`
  width: 40%;
  height: ${topMenuHeight};
`;

export default class TopNavigation extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(mode) {
    const { viewMode, switchViewMode } = this.props;
    if ( viewMode !== mode ) {
      switchViewMode(mode);
    }
  }

  render() {
    const { viewMode } = this.props;
    const selectedMenuStyle = { textDecoration: 'underline' };

    return (
      <Nav>
        <span
          onClick={() => this.clickHandler('list')}
          style={viewMode === 'list' ? selectedMenuStyle : {}} >
          List View
        </span>
        <span
          onClick={() => this.clickHandler('block')}
          style={viewMode === 'block' ? selectedMenuStyle : {}} >
          Block View
        </span>
      </Nav>
    )
  }
}
