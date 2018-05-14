import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../index';

describe('<Icon />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Icon icon="sort" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
