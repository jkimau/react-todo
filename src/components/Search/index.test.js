import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Search from '../Search';

describe('<Search/> component', () => {
  const compileComponent = () => {
    return shallow(<Search/>);
  }

  test('snapshot', () => {
    const tree = renderer.create(
      <Search/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render input elelment', () => {
    const component = compileComponent();

    expect(component.dive().find('input').length).toBe(1);
    expect(component.prop('type')).toEqual('text');
    expect(component.prop('placeholder')).toEqual('Please enter keywords');
  });
});
