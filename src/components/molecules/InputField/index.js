/* @flow */
// Dependencies
import React, { Component } from 'react';
import type { Node } from 'react';
// Custom
import Label from '../../atoms/Label';
import TextField from '../../atoms/TextField';

import { Container, Elevator } from './styles';

type Props = {
  label: string,
  onChange?: (event: Event) => void,
  readOnly?: boolean,
  value: string,
  icon?: Node,
};

type State = {
  active: boolean
};

class InputField extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  _handleBlur = (): void => {
    this.setState({ active: false });
  };

  _handleFocus = (): void => {
    this.setState({ active: true });
  };

  render() {
    const {
      value, onChange, readOnly, label, icon,
    } = this.props;
    const { active } = this.state;

    return (
      <Container>
        <Elevator lifted={active || value.length !== 0}>
          <Label theme={active ? 'active' : 'default'}>{label}</Label>
        </Elevator>
        <TextField
          active={active}
          onBlur={this._handleBlur}
          onChange={onChange}
          onFocus={this._handleFocus}
          readOnly={readOnly}
          value={value}
        />
        {icon}
      </Container>
    );
  }
}

export default InputField;
