/* @flow */
// Dependencies
import React, { Component } from 'react';
// Custom
import type { PreviousPageEvent, NextPageEvent, ChangePageEvent } from 'types/actions';

import Icon from '../../atoms/Icon';
import Dots from './Dots';
import { Container, NextPage, PreviousPage } from './styles';

type Props = {
  itemsLength: number,
  itemsPerPage: number,
  currentPage: number,
  previousPage: () => PreviousPageEvent,
  nextPage: () => NextPageEvent,
  changePage: (page: number) => ChangePageEvent,
};

type State = {
  rangeOfPages: number,
  preservePages: number,
}

class Pagination extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      rangeOfPages: 6,
      preservePages: 4,
    };
  }

  get itemsOnPage() {
    const { itemsLength, itemsPerPage } = this.props;

    return Math.ceil(itemsLength / itemsPerPage) - 1;
  }

  get totalPages() {
    return this.itemsOnPage >= 0 ? this.itemsOnPage : 0;
  }

  get isAboveRangeLimit() {
    const { rangeOfPages } = this.state;

    return this.totalPages + 1 >= rangeOfPages;
  }

  get pages() {
    return [...Array(this.totalPages + 1).keys()];
  }

  render() {
    const {
      previousPage, nextPage, changePage, currentPage,
    } = this.props;
    const { preservePages } = this.state;

    const previousPageProps = {
      onClick: currentPage !== 0 ? previousPage : undefined,
    };

    const nextPageProps = {
      onClick: currentPage !== this.totalPages ? nextPage : undefined,
    };
    return (
      <Container>
        <PreviousPage {...previousPageProps}>
          <Icon size={16} icon="arrowLeft" />
        </PreviousPage>
        {this.pages.map((page) => {
          const distanceToCurrentPage = Math.abs(page - currentPage);
          const edgePage = page === this.totalPages || page === 0;

          return (
            <Dots
              changePage={changePage}
              currentPage={currentPage}
              distanceToCurrentPage={distanceToCurrentPage}
              edgePage={edgePage}
              isAboveRangeLimit={this.isAboveRangeLimit}
              key={page}
              page={page}
              preservePages={preservePages}
              totalPages={this.totalPages}
            />
          );
        })}
        <NextPage {...nextPageProps}>
          <Icon size={16} icon="arrowRight" />
        </NextPage>
      </Container>
    );
  }
}

export default Pagination;
