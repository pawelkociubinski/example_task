/* @flow */
// Dependencies
import type { Node } from 'react';
import React from 'react';
import { noop } from 'lodash';
import { ThemeProvider } from 'styled-components';
// Custom
import themes, { CircleButton, RectangularButton } from './styles';

const ButtonComponents = {
  circle: CircleButton,
  rectangle: RectangularButton,
};

type Props = {
  children: Node,
  handleClick?: () => void,
  shape: string,
  theme: string,
}

const Button = (props: Props) => {
  const {
    children, shape, handleClick, theme,
  } = props;

  const ButtonComponent = ButtonComponents[shape];
  return (
    <ThemeProvider theme={themes[theme]}>
      <ButtonComponent onClick={handleClick}>
        {children}
      </ButtonComponent>
    </ThemeProvider>
  );
};

Button.defaultProps = {
  shape: 'rectangle',
  theme: 'primary',
  handleClick: noop,
};

export default Button;
