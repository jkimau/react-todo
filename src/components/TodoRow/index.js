import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';

import { mainBG, todoRowBorder } from 'global/colors';

const padding = `15px`;

const TodoRowWrapper = styled.div`
  position: relative;
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
  padding: ${padding};
`;

const OpenClose = styled.span`
  float: right;
  cursor: pointer;
`;

const TodoRowMenu = styled.ul`
  position: absolute;
  top: 45px;
  right: -100px;
  z-index: 100;
  margin: 0;
  width: 160px;
  border-radius: 4px;
  list-style: none;
  padding-left: 0;
  background: white;
  color: #666;
  overflow: hidden;

  &.slide-enter {
    opacity: 0;
    height: 0px;
    border: none;
    transition: all 0.05s ease;
  }

  &.slide-leave {
    opacity: 1;
    height: ${props => props.totalHeight ? `${props.totalHeight}px` : '100px'};
    border: 1px solid #ddd;
    transition: all 0.05s ease;
  }

  &:focus {
    outline: none;
  }

  li {
    height: ${props => props.listHeight ? `${props.listHeight}px` : 'auto'};
    padding: 6px;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background: #2FC2EF;
      color: white;
    }
  }
`;

export default class TodoRow extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    const { todo: { id }, toggleRowMenuHandler } = this.props;
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
          <OpenClose onClick={this.toggleMenu} className="todo-menu-trigger">
            {menuOpen ? 'close' : 'open'}
          </OpenClose>
          <ReactCSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}>
            <TodoRowMenu
              className={menuOpen ? 'slide-leave' : 'slide-enter'}
              totalHeight={30 * 2}
              listHeight={30}>
              <li>Mark complete</li>
              <li>Delete</li>
            </TodoRowMenu>
          </ReactCSSTransitionGroup>
        </Header>
        <Body>{details}</Body>
      </TodoRowWrapper>
    );
  }
}
