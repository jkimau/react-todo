import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { ListView } from '../ListView';
import TodoRow from 'components/TodoRow';
import Loading from 'components/Loading';

describe('<ListView/>', () => {
  const defaultProps = {
    fetchTodos: jest.fn(),
    setViewMode: jest.fn(),
    toggleTodoMenu: jest.fn(),
    isFetching: false,
    todos: []
  };

  const compileComponent = (props = defaultProps) => {
    return shallow(<ListView {...props}/>);
  };

  test('snapshot with no todos', () => {
    const tree = renderer.create(
      <ListView {...defaultProps}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  test('snapshot with todos', () => {
    const newProps = Object.assign({}, defaultProps);
    newProps.todos = [
      {
        id: 1,
        title: 'test 1',
        date: '2017-04-20T00:00:00Z',
        details: 'test details',
        completed: false,
        menuOpen: false
      }
    ];

    const tree = renderer.create(
      <ListView {...newProps}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should render <Loading/>', () => {
    const wrapper = compileComponent();

    expect(wrapper.find(Loading).length).toBe(1);
    expect(wrapper.find(TodoRow).length).toBe(0);
  })

  test('should render <TodoRow/>', () => {
    const newProps = Object.assign({}, defaultProps);
    newProps.todos = [
      {
        id: 1,
        title: 'test 1',
        date: '2017-04-20T00:00:00Z',
        details: 'test details',
        completed: false,
        menuOpen: false
      }
    ];
    const wrapper = compileComponent(newProps);

    expect(wrapper.find(TodoRow).length).toBe(1);
    expect(wrapper.find(Loading).length).toBe(0);
  });

  test('should pass correct props to <TodoRow/>', () => {
    const newProps = Object.assign({}, defaultProps);
    newProps.todos = [
      {
        id: 1,
        title: 'test 1',
        date: '2017-04-20T00:00:00Z',
        details: 'test details',
        completed: false,
        menuOpen: false
      }
    ];
    const wrapper = compileComponent(newProps);

    expect(wrapper.find(TodoRow).prop('todo')).toEqual({
      id: 1,
      title: 'test 1',
      date: '2017-04-20T00:00:00Z',
      details: 'test details',
      completed: false,
      menuOpen: false
    });
  });

  test('should call fetchTodos()', () => {
    const wrapper = mount(<ListView {...defaultProps}/>);

    expect(wrapper.instance().props.fetchTodos).toHaveBeenCalled();
  });

  test('should not call fetchTodos()', () => {
    const newProps = Object.assign({}, defaultProps);
    // has to set spy again as Object.assign only copies top level
    newProps.fetchTodos = jest.fn();
    newProps.isFetching = true;
    const wrapper = mount(<ListView {...newProps}/>);

    expect(wrapper.instance().props.fetchTodos).not.toHaveBeenCalled();
  });
});
