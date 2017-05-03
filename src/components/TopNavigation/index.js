import React from 'react';
import styled from 'styled-components';

import { topMenuHeight } from 'global/variables';

const Nav = styled.div`
  width: 40%;
  height: ${topMenuHeight};
`;

export default function TopNavigation(props) {
  const { clickHandler } = props;

  return (
    <Nav>
      <span onClick={() => { clickHandler('list') }}>List View</span>
      <span onClick={() => { clickHandler('block') }}>Block View</span>
    </Nav>
  )
}
