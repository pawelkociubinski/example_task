/* @flow */
import type { RepositoriesModel } from 'types/models';

import * as actions from '../constants/actions';

const initialState = {
  repositories: [],
  inProgress: false,
  error: false,
};

const repositoriesReducer = (state: RepositoriesModel = initialState, action: any) => {
  switch (action.type) {
    case actions.FETCH_REPOSITORIES_STARTED: {
      return { ...state, inProgress: true };
    }

    case actions.FETCH_REPOSITORIES_SUCCEEDED: {
      return {
        ...state,
        repositories: action.payload.repositories,
      };
    }

    case actions.FETCH_REPOSITORIES_FINISHED: {
      return { ...state, inProgress: false };
    }

    case actions.FETCH_REPOSITORIES_FAILED: {
      return { ...state, error: action.payload.error };
    }

    default:
      return state;
  }
};

export default repositoriesReducer;
