import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../index';

describe('<Button />', () => {
  it('renders correctly', () => {
    const onClickMocked = jest.fn();
    const component = renderer.create(<Button handleClick={onClickMocked}>Button</Button>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
