import React from 'react';
import styled from 'styled-components';

import AddTodoButton from 'components/AddTodoButton';

const Sidebar = styled.div`
  width: 290px;
  height: 100px;
  background-color: white;
  float: left;
`;

export default () => {
  return (
    <Sidebar>
      <AddTodoButton />
    </Sidebar>
  )
};
