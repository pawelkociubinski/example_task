/* @flow */
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
// Types
import type { User, OrderBy, SortByProperty, Repository } from '../../types/models';
import type { Option } from '../../components/molecules/Select/types';
import type {
  SearchTermRequestedEvent, PreviousPageEvent, SortItemsPerPageEvent,
  NextPageEvent, ChangePageEvent, SortColumnEvent,
} from '../../types/actions';
// Custom
import InputField from '../../components/molecules/InputField';
import Layout from '../../components/templates/Layout';
import Login from '../../components/organisms/Login';
import Pagination from '../../components/molecules/Pagination';
import Select from '../../components/molecules/Select';
import Table from '../../components/molecules/Table';
import columns from './columns';
import options from './options';

import {
  changePage, nextPage, sortItemsPerPage,
  previousPage, searchTerm, sortByColumn,
} from '../../actions';
import { repositoriesSelector, repositoriesLengthSelector, itemsPerPageSelector } from '../../selectors';

type Props = {|
  +changePage: (page: number) => ChangePageEvent,
  +collection: Array<Repository>,
  +currentPage: number,
  +itemsPerPage: number,
  +nextPage: () => NextPageEvent,
  +orderBy: OrderBy,
  +previousPage: () => PreviousPageEvent,
  +repositoriesLength: number,
  +searchedTerm: string,
  +searchTerm: (searchedTerm: string) => SearchTermRequestedEvent,
  +selectedItemsPerPage: Option,
  +sortByColumn: (sortByProperty: string, orderBy: OrderBy) => SortColumnEvent,
  +sortByProperty: SortByProperty,
  +sortItemsPerPage: (value: number) => SortItemsPerPageEvent,
  +user: User,
|}

class Main extends Component<Props, any> {
  _handleChange = (event: Event) => {
    const { searchTerm } = this.props;

    if (event.target instanceof HTMLInputElement) {
      searchTerm(event.target.value);
    }
  };

  _onSelect = (option: Option): void => {
    const { sortItemsPerPage } = this.props;
    const { value } = option;

    sortItemsPerPage(Number(value));
  }

  render() {
    const {
      currentPage, itemsPerPage, previousPage,
      nextPage, changePage, user, searchedTerm, collection,
      repositoriesLength, sortByProperty, orderBy,
      sortByColumn, selectedItemsPerPage,
    } = this.props;

    return (
      <Layout
        isVisible={!isEmpty(collection)}
        login={
          <Login user={user} />
        }
        search={
          <InputField
            label="Search repository"
            value={searchedTerm}
            onChange={this._handleChange}
          />
        }
        table={
          <Table
            collection={collection}
            columns={columns}
            handleSort={sortByColumn}
            orderBy={orderBy}
            sortByProperty={sortByProperty}
          />
        }
        pagination={
          <Pagination
            changePage={changePage}
            currentPage={currentPage}
            itemsLength={repositoriesLength}
            itemsPerPage={itemsPerPage}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        }
        dropdown={
          <Select
            selected={selectedItemsPerPage}
            label="Items per page"
            options={options}
            handleSelect={this._onSelect}
          />
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  const collection = repositoriesSelector(state);
  const repositoriesLength = repositoriesLengthSelector(state);
  const selectedItemsPerPage = itemsPerPageSelector(state);
  const { user } = state.userReducer;
  const {
    sortByProperty, orderBy, currentPage,
    itemsPerPage, searchedTerm,
  } = state.appReducer;

  return {
    user,
    collection,
    repositoriesLength,
    sortByProperty,
    orderBy,
    currentPage,
    itemsPerPage,
    searchedTerm,
    selectedItemsPerPage,
  };
};

export default connect(mapStateToProps, {
  changePage,
  nextPage,
  previousPage,
  searchTerm,
  sortByColumn,
  sortItemsPerPage,
})(Main);
