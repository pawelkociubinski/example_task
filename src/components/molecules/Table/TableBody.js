/* @flow */
// Dependencies
import React from 'react';
import { format } from 'date-fns';
// Custom
import type { Repository } from 'types/models';
import type { Column } from './types';

import TableCell from './TableCell';
import { BodyRow } from './styles';

type Props = {
  collection: Array<Repository>,
  columns: Array<Column>,
};

const TableBody = (props: Props) => {
  const { collection, columns } = props;

  return (
    <tbody>
      {collection.map((row, rowKey) => (
        <BodyRow key={row.id}>
          {columns.map(column => (
            <TableCell
              width={column.width}
              key={column.property}
              rowKey={rowKey}
              data={row}
            >
              {column.property === 'created_at'
                ? format(row[column.property], 'MM/DD/YYYY')
                : row[column.property]}
            </TableCell>
          ))}
        </BodyRow>
      ))}
    </tbody>
  );
};

export default TableBody;
