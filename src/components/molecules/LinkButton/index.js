/* @flow */
// Dependencies
import type { Node } from 'react';
import React from 'react';
// Custom
import Button from '../../atoms/Button';
import { A } from './styles';

type Props = {
  href: string,
  children: Node,
}

const LinkButton = (props: Props) => {
  const { children, href } = props;
  return (
    <A href={href}>
      <Button>
        {children}
      </Button>
    </A>
  );
};

export default LinkButton;
