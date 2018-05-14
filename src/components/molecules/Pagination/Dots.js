/* @flow */
// Dependencies
import React, { Component } from 'react';
// Custom
import type { ChangePageEvent } from 'types/actions';

import Button from '../../atoms/Button';
import { Dot } from './styles';

type Props = {
  currentPage: number,
  page: number,
  changePage: (page: number) => ChangePageEvent,
  distanceToCurrentPage: number,
  edgePage: boolean,
  isAboveRangeLimit: boolean,
  preservePages: number,
  totalPages: number,
}

class Dots extends Component<Props> {
  get isActive() {
    const { currentPage, page } = this.props;

    return page === currentPage;
  }

  _changePage = (): void => {
    const { changePage, page } = this.props;

    changePage(page);
  };

  render() {
    const {
      currentPage,
      distanceToCurrentPage,
      edgePage,
      isAboveRangeLimit,
      page,
      preservePages,
      totalPages,
    } = this.props;

    const isNeighborOfCurrentPage = distanceToCurrentPage > 1;
    const isStartPreserved =
      page <= preservePages && currentPage < preservePages;
    const isEndPreserved =
      page >= totalPages - preservePages &&
      currentPage > totalPages - preservePages;

    const displayEllipsis =
      isAboveRangeLimit &&
      isNeighborOfCurrentPage &&
      !edgePage &&
      !isStartPreserved &&
      !isEndPreserved;

    return (
      <Dot showEllipsis={displayEllipsis}>
        <Button
          shape="circle"
          handleClick={this._changePage}
          theme={this.isActive ? 'primary' : 'transparent'}
        >
          {displayEllipsis ? '...' : page + 1}
        </Button>
      </Dot>
    );
  }
}

export default Dots;
