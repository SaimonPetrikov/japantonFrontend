
import {PartsActions, PartsActionTypes, PartsState} from '../partsActionCreators/parts.typings';

const initialState: PartsState = {
  loading: false,
  partsList: null,
  partsSingle: null,
  partsChange: null,
  isChanged: false,
  error: ''
};

export const partsReducer = (state = initialState, action: PartsActions): PartsState => {
  switch (action.type) {
  case PartsActionTypes.PARTS_START:
    return {...state, loading: true, error: '', isChanged: false};
  case PartsActionTypes.PARTS_ALL:
    return {...state, partsList: action.payload};
  case PartsActionTypes.PARTS_SINGLE:
    return {...state, partsSingle: action.payload};
  case PartsActionTypes.PARTS_CHANGES:
    return {...state, partsChange: action.payload, isChanged: true};
  case PartsActionTypes.PARTS_FINISH:
    return {...state, loading: false};
  case PartsActionTypes.PARTS_ERROR:
    return {...state, loading: false, error: action.payload};
  default:
    return state;
  }
};
