import React from 'react';
import { mount } from 'enzyme';
import Loading from '../Loading';

describe('Loading', () => {
  let compiledComponent;

  beforeEach(() => {
    compiledComponent = mount(<Loading/>);
  });

  test('test', () => {
    expect(compiledComponent.find('div').text()).toEqual('Loading...');
  });
});
