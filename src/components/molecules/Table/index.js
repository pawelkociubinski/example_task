/* @flow */
// Dependencies
import React from 'react';
// Custom
import type { Repository, SortByProperty, OrderBy } from 'types/models';
import type { SortColumnEvent } from 'types/actions';
import type { Column } from './types';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { Table } from './styles';

type Props = {
  collection: Array<Repository>,
  columns: Array<Column>,
  sortByProperty: SortByProperty,
  orderBy: OrderBy,
  handleSort: (sortByProperty: string, orderBy: OrderBy) => SortColumnEvent,
};

const TableList = (props: Props) => {
  const {
    collection, columns, sortByProperty, orderBy, handleSort,
  } = props;

  return (
    <Table>
      <TableHeader
        columns={columns}
        handleSort={handleSort}
        orderBy={orderBy}
        sortByProperty={sortByProperty}
      />
      <TableBody
        columns={columns}
        collection={collection}
      />
    </Table>
  );
};

export default TableList;
