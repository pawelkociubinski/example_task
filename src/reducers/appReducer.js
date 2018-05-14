/* @flow */
import type { AppModel } from '../types/models';

import * as actions from '../constants/actions';

export const initialState = {
  currentPage: 0,
  itemsPerPage: 2,
  searchedTerm: '',
  sortByProperty: 'id',
  orderBy: 'desc',
};

const appReducer = (state: AppModel = initialState, action: any) => {
  switch (action.type) {
    case actions.CHANGE_PAGE: {
      return { ...state, currentPage: action.payload.page };
    }

    case actions.PREVIOUS_PAGE: {
      return { ...state, currentPage: state.currentPage - 1 };
    }

    case actions.NEXT_PAGE: {
      return { ...state, currentPage: state.currentPage + 1 };
    }

    case actions.SORT_COLUMN_BY_ORDER: {
      return {
        ...state,
        sortByProperty: action.payload.sortByProperty,
        orderBy: action.payload.orderBy,
      };
    }

    case actions.SORT_ITEMS_PER_PAGE: {
      return {
        ...state,
        currentPage: 0,
        itemsPerPage: action.payload.itemsPerPage,
      };
    }

    case actions.CHANGE_SEARCHED_TERM: {
      return { ...state, searchedTerm: action.payload.searchedTerm };
    }

    // case actions.CHANGE_ITEMS_PER_PAGE: {
    //   return { ...state, itemsPerPage: action.payload.itemsPerPage };
    // }

    default:
      return state;
  }
};

export default appReducer;
