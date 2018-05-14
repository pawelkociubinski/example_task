/* @flow */
import type { OrderBy, SortByProperty } from '../types/models';
import type {
  ChangePageEvent, PreviousPageEvent, NextPageEvent,
  GithubTokenRequestedEvent, SortItemsPerPageEvent,
  SearchTermRequestedEvent, SortColumnEvent, LogoutEvent,
} from '../types/actions';

import * as actions from '../constants/actions';

export const logout = (): LogoutEvent => ({
  type: actions.LOGOUT,
});

export const searchTerm = (searchedTerm: string): SearchTermRequestedEvent => ({
  type: actions.SEARCH_TERM_REQUESTED,
  payload: { searchedTerm },
});

export const sortByColumn = (sortByProperty: SortByProperty, orderBy: OrderBy): SortColumnEvent => ({
  type: actions.SORT_COLUMN_BY_ORDER,
  payload: { sortByProperty, orderBy },
});

export const changePage = (page: number): ChangePageEvent => ({
  type: actions.CHANGE_PAGE,
  payload: { page },
});

export const previousPage = (): PreviousPageEvent => ({
  type: actions.PREVIOUS_PAGE,
});

export const nextPage = (): NextPageEvent => ({
  type: actions.NEXT_PAGE,
});

export const getGithubToken = (code: string): GithubTokenRequestedEvent => ({
  type: actions.GITHUB_TOKEN_REQUESTED,
  payload: { code },
});

export const sortItemsPerPage = (itemsPerPage: number): SortItemsPerPageEvent => ({
  type: actions.SORT_ITEMS_PER_PAGE,
  payload: { itemsPerPage },
});
