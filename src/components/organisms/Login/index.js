/* @flow */

import React from 'react';
import invariant from 'invariant';
// Types
import type { User } from '../../../types/models';
// Custom
import LinkButton from '../../molecules/LinkButton';
import { ButtonWrapper } from './styles';

type Props = {|
  +user: User,
|}

const Login = (props: Props) => {
  const { user } = props;

  invariant(process.env.CLIENT_ID, 'There is no CLIENT_ID env variable defined');

  const href = `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`;

  return (
    <ButtonWrapper>
      {!user && (
        <LinkButton href={href}>
          Login with GitHub
        </LinkButton>
      )}
      {user && `Hello ${user.name}`}
    </ButtonWrapper>
  );
};

export default Login;
