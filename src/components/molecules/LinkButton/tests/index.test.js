import React from 'react';
import renderer from 'react-test-renderer';
import LinkButton from '../index';

describe('<LinkButton />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<LinkButton href="www.example.com">example</LinkButton>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
