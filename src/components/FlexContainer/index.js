import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  align-items: center;
  flex-wrap: wrap;
`;

export default FlexContainer;
