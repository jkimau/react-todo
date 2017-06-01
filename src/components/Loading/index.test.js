import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Loading from '../Loading';

describe('<Loading/> component', () => {
  const compileComponent = () => {
    return shallow(<Loading/>);
  }

  test('snapshot', () => {
    const tree = renderer.create(
      <Loading/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render Loading... text', () => {
    const compiledComponent = compileComponent();

    expect(compiledComponent.dive().find('div').text()).toEqual('Loading...');
  });
});
