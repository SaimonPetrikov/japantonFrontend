
import {CarActions, CarActionTypes, CarState} from '../../action-creators/cars/cars.typings';

const initialState: CarState = {
  loading: false,
  payload: null,
  error: ''
};

export const carReducer = (state = initialState, action: CarActions): CarState => {
  switch (action.type) {
  case CarActionTypes.CAR_START:
    return {...state, loading: true, error: ''};
  case CarActionTypes.CAR_DATA:
    return {...state, payload: action.payload};
  case CarActionTypes.CAR_FINISH:
    return {...state, loading: false};
  case CarActionTypes.CAR_ERROR:
    return {...state, loading: false, error: action.payload};
  default:
    return state;
  }
};
