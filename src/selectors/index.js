/* @flow */
import { createSelector } from 'reselect';
import { orderBy, sortBy } from 'lodash';

const getCurrentPage = state => state.appReducer.currentPage;
const getItemsPerPage = state => state.appReducer.itemsPerPage;
const getRepositories = state => state.repositoriesReducer.repositories;
const getOrder = state => state.appReducer.orderBy;
const getsortByProperty = state => state.appReducer.sortByProperty;
const getUser = state => state.userReducer.user;

export const sortedRepositoriesSelector = createSelector(
  [getRepositories, getsortByProperty, getOrder],
  (repos, property, order) => orderBy(repos, [property], [order]),
);

export const userSelector = createSelector(
  [sortedRepositoriesSelector, getUser],
  (repositories, user) =>
    sortBy(repositories, (repository) => {
      if (user) {
        return repository.login === user.login ? 0 : 1;
      }

      return repository;
    }),
);

export const fromIndexSelector = createSelector(
  [getCurrentPage, getItemsPerPage],
  (currentPage, itemsPerPage) =>
    currentPage * itemsPerPage,
);

export const repositoriesSelector = createSelector(
  [fromIndexSelector, userSelector, getItemsPerPage],
  (pageRangeFromIndex, repositories, itemPerPage) => repositories.slice(
    pageRangeFromIndex,
    pageRangeFromIndex + itemPerPage,
  ),
);

export const repositoriesLengthSelector = createSelector(
  getRepositories,
  repositories => repositories.length,
);

export const itemsPerPageSelector = createSelector(
  getItemsPerPage,
  perPage =>
    ({ label: `${perPage}`, value: perPage }),
);

export const userNameSelector = createSelector(
  getUser,
  user =>
    user ? user.name : '',
);
