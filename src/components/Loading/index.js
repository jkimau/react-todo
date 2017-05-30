import React from 'react';
import styled from 'styled-components';

const LoadingDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -35px;
`;

const Loading = () => (
  <LoadingDiv>Loading...</LoadingDiv>
);

export default Loading;
