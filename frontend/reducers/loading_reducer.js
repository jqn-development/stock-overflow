import merge from 'lodash/merge';

import {
  RECEIVE_COMPANIES,
  RECEIVE_COMPANY,
  START_LOADING_ALL_COMPANIES,
  START_LOADING_SINGLE_COMPANY
} from '../actions/companies_actions';

const initialState = {
  indexLoading: true,
  detailLoading: true
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COMPANIES:
      return merge({}, state, { indexLoading: false });
    case RECEIVE_COMPANY:
      return merge({}, state, { detailLoading: false });
    case START_LOADING_ALL_COMPANIES:
      return merge({}, state, { indexLoading: true });
    case START_LOADING_SINGLE_COMPANY:
      return merge({}, state, { detailLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;
