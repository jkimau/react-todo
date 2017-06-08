import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'

import TopNavigation from '../TopNavigation';

describe('<TopNavigation/>', () => {
  const defaultProps = {
    viewMode: 'list',
    changeViewModeHandler: jest.fn()
  }

  const compileComponent = (props = defaultProps) => {
    return shallow(<TopNavigation {...props}/>);
  }

  test('snapshot - list viewMode', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <TopNavigation {...defaultProps}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot - calendar viewMode', () => {
    const newProps = Object.assign(
      defaultProps,
      { viewMode: 'calendar' }
    );
    const tree = renderer.create(
      <MemoryRouter>
        <TopNavigation {...newProps}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should call changeViewMode() function', () => {
    const wrapper = compileComponent();
    wrapper.find('#list-nav-link').simulate('click');

    expect(wrapper.instance().props.changeViewModeHandler).toHaveBeenCalledWith('list');

    wrapper.find('#calendar-nav-link').simulate('click');

    expect(wrapper.instance().props.changeViewModeHandler).toHaveBeenCalledWith('calendar');
  });
});
