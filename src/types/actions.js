/* @flow */

import type { OrderBy } from 'types/models';

export type LogoutEvent = {|
  type: string,
|}

export type SearchTermRequestedEvent = {|
  type: string,
  payload: {|
    searchedTerm: string
  |}
|};

export type PreviousPageEvent = {|
  type: string,
|}

export type NextPageEvent = {|
  type: string,
|}

export type ChangePageEvent = {|
  type: string,
  payload: {|
    page: number,
  |}
|}

export type SortColumnEvent = {|
  type: string,
  payload: {|
    sortByProperty: string,
    orderBy: OrderBy,
  |}
|}

export type GithubTokenRequestedEvent = {|
  type: string,
  payload: {|
    code: string,
  |}
|}

export type SortItemsPerPageEvent = {|
  type: string,
  payload: {|
    itemsPerPage: number,
  |}
|}

export type Action =
  ChangePageEvent
  | GithubTokenRequestedEvent
  | LogoutEvent
  | NextPageEvent
  | NextPageEvent
  | PreviousPageEvent
  | SearchTermRequestedEvent
  | SortColumnEvent
  | SortItemsPerPageEvent

export type SearchTermEvent = SearchTermRequestedEvent;
