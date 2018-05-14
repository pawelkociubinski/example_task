/* @flow */
// Dependencies
import React, { Component } from 'react';
// Custom
import type { OrderBy } from 'types/models';
import type { SortColumnEvent } from 'types/actions';

import Icon from 'atoms/Icon';
import { HeadCell, CellWrapper, Wrapper } from './styles';

type Props = {
  displayName: string,
  handleSort: (sortByProperty: string, orderBy: OrderBy) => SortColumnEvent,
  orderBy: OrderBy,
  property: string,
  width: number,
  sortByProperty: string
};

export default class TableHeadCell extends Component<Props> {
  _onSort = (): void => {
    const {
      handleSort, property, sortByProperty, orderBy,
    } = this.props;
    const sort = orderBy === 'asc' ? 'desc' : 'asc';

    if (sortByProperty !== property) {
      handleSort(property, 'asc');
    } else {
      handleSort(property, sort);
    }
  };

  render() {
    const {
      displayName,
      width,
      orderBy,
      sortByProperty,
      property,
    } = this.props;
    const icon = sortByProperty === property ? orderBy : 'sort';

    return (
      <HeadCell onClick={this._onSort} width={width}>
        <Wrapper>
          <CellWrapper>{displayName}</CellWrapper>
          <Icon icon={icon} />
        </Wrapper>
      </HeadCell>
    );
  }
}
