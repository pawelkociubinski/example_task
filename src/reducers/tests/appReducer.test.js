
import reducer from '../appReducer';
import * as actions from '../../constants/actions';

describe('appReducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle CHANGE_PAGE', () => {
    const action = {
      type: actions.CHANGE_PAGE,
      payload: {
        page: 1,
      },
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle PREVIOUS_PAGE', () => {
    const action = {
      type: actions.PREVIOUS_PAGE,
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle NEXT_PAGE', () => {
    const action = {
      type: actions.NEXT_PAGE,
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle SORT_COLUMN_BY_ORDER', () => {
    const action = {
      type: actions.SORT_COLUMN_BY_ORDER,
      payload: {
        sortByProperty: 'name',
        orderBy: 'asc',
      },
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle SORT_ITEMS_PER_PAGE', () => {
    const action = {
      type: actions.SORT_ITEMS_PER_PAGE,
      payload: {
        itemsPerPage: 20,
      },
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle CHANGE_SEARCHED_TERM', () => {
    const action = {
      type: actions.CHANGE_SEARCHED_TERM,
      payload: {
        searchedTerm: 'react',
      },
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  });
});
