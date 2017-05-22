import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 200px;
  height: 25px;
  padding: 2px 10px;
  border-radius: 15px;
  border: 1px solid #ddd;
  line-height: 1;

  &:focus {
    border: none;
  }
`;

export default () => {
  return <Input type="text" placeholder="Please enter keywordss" />
};
