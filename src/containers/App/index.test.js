import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { App } from '../App';

jest.mock('containers/ListView');
jest.mock('containers/CalendarView');

describe('<App/>', () => {
  const defaultProps = {
    viewMode: 'list',
    closeAllTodoMenus: jest.fn(),
    setViewMode: jest.fn(),
    location: {
      pathname: 'list'
    }
  };

  const compileComponent = (props = defaultProps) => {
    return shallow(<App {...props}/>)
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('snapshot - list view mode', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <App {...defaultProps}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot - list view mode', () => {
    const newProps = Object.assign(
      {},
      defaultProps,
      { viewMode: 'calendar' }
    );
    const tree = renderer.create(
      <MemoryRouter>
        <App {...newProps}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should call setInitialViewMode() on load', () => {
    const setInitialViewModeClone = App.prototype.setInitialViewMode;
    App.prototype.setInitialViewMode = jest.fn();
    compileComponent();

    expect(App.prototype.setInitialViewMode).toHaveBeenCalled();
    App.prototype.setInitialViewMode = setInitialViewModeClone;
  });

  test('should call changeViewModeHandler()', () => {
    App.prototype.changeViewModeHandler = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <App {...defaultProps}/>
      </MemoryRouter>
    );

    wrapper.find('#calendar-nav-link').simulate('click');

    expect(App.prototype.changeViewModeHandler).toHaveBeenCalled();
  });

  test('should call documentClickHandler()', () => {
    const event = {
      target: {
        className: 'todo-menu-trigger'
      }
    };

    const wrapper = compileComponent();
    wrapper.instance().documentClickHandler(event);

    expect(wrapper.instance().props.closeAllTodoMenus).not.toHaveBeenCalled();

    const newEvent = {
      target: {
        className: 'random-class-name'
      }
    };

    wrapper.instance().documentClickHandler(newEvent);

    expect(wrapper.instance().props.closeAllTodoMenus).toHaveBeenCalled();
  });

  test('should run setInitialViewMode() properly', () => {
    const newProps = Object.assign(
      {},
      defaultProps,
      { location: { pathname: '/list' } }
    );
    const wrapper = compileComponent(newProps);
    wrapper.instance().setInitialViewMode();

    expect(wrapper.instance().props.setViewMode).toHaveBeenCalledWith('list');
  });

  test('should render <Route/> properly', () => {
    const wrapper = compileComponent();

    expect(wrapper.find('Route').length).toBe(3);
  });

  test('should pass correct props to <TopNavigation/>', () => {
    const wrapper = compileComponent();

    expect(wrapper.find('TopNavigation').props()).toEqual({
      viewMode: 'list',
      changeViewModeHandler: wrapper.instance().changeViewModeHandler
    })
  });
});
