/* @flow */
// Dependencies
import React, { Fragment } from 'react';
// Custom
import { Sort, PaginationWrapper, DropdownWrapper, Container } from './styles';

type Props = {|
  +dropdown: React$Element<*>,
  +isVisible: boolean,
  +login: React$Element<*>,
  +pagination: React$Element<*>,
  +search: React$Element<*>,
  +table: React$Element<*>,
|}

const Layout = (props: Props) => {
  const {
    isVisible, search, table,
    pagination, dropdown, login,
  } = props;

  return (
    <Container>
      {login}
      {search}
      {isVisible && (
        <Fragment>
          {table}
          <Sort>
            <PaginationWrapper>
              {pagination}
            </PaginationWrapper>
            <DropdownWrapper>
              {dropdown}
            </DropdownWrapper>
          </Sort>
        </Fragment>
      )}
    </Container>
  );
};

export default Layout;
