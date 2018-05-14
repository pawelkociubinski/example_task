/* @flow */
// Dependencies
import React from 'react';
// Custom
import type { SortByProperty, OrderBy } from 'types/models';
import type { SortColumnEvent } from 'types/actions';
import type { Column } from './types';

import TableHeadCell from './TableHeadCell';
import { HeadRow } from './styles';

type Props = {
  handleSort: (sortByProperty: string, orderBy: OrderBy) => SortColumnEvent,
  orderBy: OrderBy,
  sortByProperty: SortByProperty,
  columns: Array<Column>,
};

const TableHeader = (props: Props) => {
  const {
    columns, sortByProperty, orderBy, handleSort,
  } = props;

  return (
    <thead>
      <HeadRow>
        {columns.map(column => (
          <TableHeadCell
            {...column}
            handleSort={handleSort}
            key={column.property}
            orderBy={orderBy}
            sortByProperty={sortByProperty}
          />
          ))}
      </HeadRow>
    </thead>
  );
};

export default TableHeader;
