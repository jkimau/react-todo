import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Loading from '../Loading';

describe('Loading', () => {
  const compileComponent = () => {
    return shallow(<Loading/>);
  }

  test('<Loading/> snapshot', () => {
    const tree = renderer.create(
      <Loading/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test', () => {
    const compiledComponent = compileComponent();
    expect(compiledComponent.dive().find('div').text()).toEqual('Loading...');
  });
});
