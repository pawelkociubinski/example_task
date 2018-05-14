import React from 'react';
import renderer from 'react-test-renderer';
import TextField from '../index';

describe('<TextField />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<TextField active={false} value="value" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
