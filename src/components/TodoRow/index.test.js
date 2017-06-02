import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, render, mount } from 'enzyme';

import TodoRow from '../TodoRow';
import Loading from 'components/Loading';

jest.mock('global/colors', () => ({
  mainBG: '#aaa',
  todoRowBorder: '#ccc'
}));

describe('<TodoRow/>', () => {
  const defaultProps = {
    todo: {
      title: 'test title',
      date: '2017-06-01T00:00:00Z',
      details: 'test details',
      id: 1,
      menuOpen: false,
      completed: false
    },
    toggleTodoMenu: jest.fn()
  }

  /**
  * Snapshot
  */
  describe(' -- snapshot', () => {
    test('snapshot with menuOpen true', () => {
      const tree = renderer.create(
        <TodoRow {...defaultProps}/>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('snapshot with menuOpen close', () => {
      const newProps = Object.assign({}, defaultProps);
      newProps.todo = Object.assign({}, defaultProps.todo);
      newProps.todo.menuOpen = true;

      const tree = renderer.create(
        <TodoRow {...newProps}/>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  /**
  * Shallow render
  */
  describe(' -- shallow render React', () => {
    const compileComponent = (props) => {
      return shallow(<TodoRow {...props}/>);
    }

    test('should render texts properly', () => {
      const wrapper = compileComponent(defaultProps);

      expect(wrapper.find('.todo-row-header').text()).toEqual('test title');
      expect(wrapper.find('.todo-row-date').text()).toEqual('2017-06-01T00:00:00Z');

      // above 2 are normal html element whereas .todo-row-details is a styled-component
      expect(wrapper.render().find('.todo-row-details').text()).toEqual('test details');
    });

    test('should todo row menu has className(1)', () => {
      const wrapper = compileComponent(defaultProps);

      expect(wrapper.find('.todo-row-menu').hasClass('slide-enter')).toBe(true);
    });

    test('should todo row menu has className(2)', () => {
      const newProps = Object.assign({}, defaultProps);
      newProps.todo = Object.assign({}, defaultProps.todo);
      newProps.todo.menuOpen = true;
      const wrapper = compileComponent(newProps);

      expect(wrapper.render().find('.todo-row-menu').hasClass('slide-leave')).toBe(true);
    });

    test('should call toggleTodoMenu()', () => {
      const wrapper = compileComponent(defaultProps);
      wrapper.find('.todo-menu-trigger').simulate('click');

      expect(wrapper.instance().props.toggleTodoMenu).toHaveBeenCalled();
    });

    test('should call stopPropagateEvent()', () => {
      TodoRow.prototype.stopPropagateEvent = jest.fn();
      const wrapper = compileComponent(defaultProps);
      wrapper.find('.todo-row-menu').simulate('click');

      expect(TodoRow.prototype.stopPropagateEvent).toHaveBeenCalled();
    });
  });
});
