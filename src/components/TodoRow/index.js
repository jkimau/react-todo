import React from 'react';
import styled from 'styled-components';

const padding = () => `15px`;

const TodoRowWrapper = styled.div`
  background: white;
  border: 1px solid #e6ecf0;
  border-radius: 5px;
`;

const Header = styled.div`
  border-bottom: 1px solid #e6ecf0;
  padding: ${padding()}
`;

const Body = styled.div`
  padding: ${padding()};
  cursor: pointer;

  &:hover {
    background: grey;
  }
`;

const TodoRow = ({ todo: { title, date, details }}) => {
  return (
    <TodoRowWrapper>
      <Header>
        <span>{title}</span><span>{date}</span>
      </Header>
      <Body>
        {details}
      </Body>
    </TodoRowWrapper>
  )
};

export default TodoRow;
