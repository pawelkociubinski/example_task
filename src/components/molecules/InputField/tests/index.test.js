import React from 'react';
// import renderer from 'react-test-renderer';
import InputField from '../index';
import { shallow } from 'enzyme';


describe('<InputField />', () => {
  it('renders correctly', () => {
    const component = shallow(<InputField label="label" value="value" />);
    component.setState({ active: true });

    expect(component).toMatchSnapshot();
  });

  it('_handleFocus()', () => {
    const component = shallow(<InputField label="label" value="value" />);
    component.instance()._handleFocus();

    const state = component.state().active;

    expect(state).toEqual(true);
  });

  it('_handleBlur()', () => {
    const component = shallow(<InputField label="label" value="value" />);
    component.setState({ active: true });
    component.instance()._handleBlur();

    const state = component.state().active;

    expect(state).toEqual(false);
  });
});
