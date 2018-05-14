import React from 'react';
import renderer from 'react-test-renderer';
import Label from '../index';

describe('<Label />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Label theme="default">Label</Label>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
