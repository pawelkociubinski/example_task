/* @flow */

export type SortByProperty = 'id' | 'name' | 'login' | 'stargazers_count' | 'created_at';
export type OrderBy = 'asc' | 'desc';
export type User = {
  +name: string,
  +login: string,
  +id: number,
}
export type Repository = {
  +created_at: string,
  +id: number,
  +login: string,
  +name: string,
  +stargazers_count: number,
}

export type AppModel = {|
  +currentPage: number,
  +itemsPerPage: number,
  +searchedTerm: string,
  +sortByProperty: SortByProperty,
  +orderBy: OrderBy,
|}

export type AuthModel = {|
  +token: ?string,
  +inProgress: boolean,
  +error: boolean,
|}

export type RepositoriesModel = {|
  +repositories: Array<Repository>,
  +inProgress: boolean,
  +error: boolean,
|}

export type UserModel = {|
  +user: ?User,
  +inProgress: boolean,
  +error: boolean,
|}

export type State =
AppModel
& AuthModel
& RepositoriesModel
& UserModel
