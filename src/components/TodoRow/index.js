import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
  padding: ${padding}
  cursor: pointer;
`;

const OpenClose = styled.span`
  position: relative;
  float: right;
  cursor: pointer;
`;

const TodoRowMenu = styled.ul`
  position: absolute;
  top: 25px;
  margin: 0;
  width: 160px;
  border: 1px solid #ddd;
  border-radius: 4px;
  list-style: none;
  padding-left: 0;
  background: white;
  color: #666;

  li {
    height: ${props => props.listHeight ? `${props.listHeight}px` : 'auto'};
    padding: 6px;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
  }

  &.slide-enter {
    opacity: 0;
    height: 0px;
    transition: all 0.05s ease;
  }

  &.slide-leave {
    opacity: 1;
    height: ${props => props.totalHeight ? `${props.totalHeight}px` : '100px'};
    transition: all 0.05s ease;
  }
`;

export default class TodoRow extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { todo : { id }, toggleRowMenuHandler } = this.props;
    toggleRowMenuHandler(id);
  }

  render() {
    const {
      todo: {
        title,
        date,
        details,
        completed,
        menuOpen
      }
    } = this.props;
    return (
      <TodoRowWrapper completed={completed}>
        <Header>
          <span>{title}</span>
          <span>{date}</span>
          <OpenClose
            onClick={this.toggleMenu}>
            {menuOpen ? 'close' : 'open'}
            <ReactCSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={0}
              transitionLeaveTimeout={0}
            >
              <TodoRowMenu
                totalHeight={30 * 2}
                listHeight={30}
                className={menuOpen ? 'slide-leave' : 'slide-enter'}
              >
                <li>Mark complete</li>
                <li>Delete</li>
              </TodoRowMenu>
            </ReactCSSTransitionGroup>
          </OpenClose>
        </Header>
        <Body>{details}</Body>
      </TodoRowWrapper>
    );
  }
};
