/* @flow */
// Dependencies
import React from 'react';
import { noop } from 'lodash';
// Custom
import { Container, CoverLayer, StyledTextField } from './styles';

type Props = {
  active: boolean,
  onBlur: () => void,
  onChange: (event: Event) => void,
  onFocus: () => void,
  readOnly?: boolean,
  value: string
};

const TextField = (props: Props) => {
  const {
    onBlur, onChange, onFocus, readOnly, value, active,
  } = props;

  return (
    <Container>
      <StyledTextField
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        readOnly={readOnly}
        value={value}
      />
      <CoverLayer active={active} />
    </Container>
  );
};

TextField.defaultProps = {
  theme: 'neutral',
  readOnly: false,
  onChange: noop,
};

export default TextField;
