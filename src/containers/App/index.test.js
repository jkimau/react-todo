import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

// import TopNavigation from 'components/TopNavigation';
// import SearchInput from 'components/Search';
// import ListView from 'containers/ListView';
// import CalendarView from 'containers/CalendarView';
import { App } from '../App';

describe('<App/>', () => {
  const defaultProps = {
    viewMode: 'list',
    closeAllTodoMenus: jest.fn(),
    setViewMode: jest.fn(),
    location: {
      pathname: 'fake_pathname'
    }
  };

  const compileComponent = (props = defaultProps) => {
    return shallow(<App {...props}/>)
  };

  // test('snapshot with view mode list', () => {
  //   const tree = renderer.create(
  //     <MemoryRouter>
  //       <App {...defaultProps}/>
  //     </MemoryRouter>
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  test('should call setInitialViewMode() on load', () => {
    App.prototype.setInitialViewMode = jest.fn();
    compileComponent();

    expect(App.prototype.setInitialViewMode).toHaveBeenCalled();
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
