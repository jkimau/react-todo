import React, { Component } from 'react';
import styled from 'styled-components';

import { mainBG, todoRowBorder } from 'global/colors';

const padding = `15px`;

const TodoRowWrapper = styled.div`
  background: white;
  border-bottom: 1px solid ${todoRowBorder};
  color: ${props => props.completed ? '#ccc' : 'inherit'};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${mainBG};
  }
`;

const Header = styled.div`
  padding: ${padding}
`;

const Body = styled.div`
  cursor: pointer;
  padding: ${padding}
`;

const OpenClose = styled.span`
  float: right;
  cursor: pointer;
`;

export default class TodoRow extends Component {
  constructor(props) {
    super(props);

    this.state = { detailOpen: false };

    this.toggleDetailsOpenStatus = this.toggleDetailsOpenStatus.bind(this);
  }

  toggleDetailsOpenStatus() {
    this.setState(prevState => ({ detailOpen: !prevState.detailOpen }));
  }

  render() {
    const { todo: { title, date, details, completed } } = this.props;

    return (
      <TodoRowWrapper completed={completed}>
        <Header>
          <span>{title}</span>
          <span>{date}</span>
          <OpenClose
            onClick={this.toggleDetailsOpenStatus}>
            {this.state.detailOpen ? 'close' : 'open'}
          </OpenClose>
        </Header>
        <Body>
          {details}
        </Body>
      </TodoRowWrapper>
    );
  }
};
