import * as ActionCreator from '../index';

describe('Action Creators', () => {
  it('searchTerm', () => {
    expect(ActionCreator.searchTerm('react')).toMatchSnapshot();
  });

  it('sortByColumn', () => {
    expect(ActionCreator.sortByColumn('id', 'asc')).toMatchSnapshot();
  });

  it('changePage', () => {
    expect(ActionCreator.changePage(1)).toMatchSnapshot();
  });

  it('previousPage', () => {
    expect(ActionCreator.previousPage()).toMatchSnapshot();
  });

  it('nextPage', () => {
    expect(ActionCreator.nextPage()).toMatchSnapshot();
  });

  it('getGithubToken', () => {
    expect(ActionCreator.getGithubToken('github_code')).toMatchSnapshot();
  });

  it('sortItemsPerPage', () => {
    expect(ActionCreator.sortItemsPerPage(1)).toMatchSnapshot();
  });
});
