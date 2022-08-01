
import {CarActions, CarActionTypes, CarState} from '../../action-creators/cars/cars.typings';

const initialState: CarState = {
  loadingCars: false,
  payload: null,
  carAll: null
};

const authReducer = (state = initialState, action: CarActions): CarState => {
  switch (action.type) {
  case CarActionTypes.CAR:
    return {loadingCars: true};
  case CarActionTypes.CAR_ALL:
    return {loadingCars: false, carAll: action.payload};
  case CarActionTypes.CAR_SINGLE:
    return {loadingCars: false, payload: action.payload};
  case CarActionTypes.CAR_CREATE:
    return {loadingCars: true, payload: action.payload};
  case CarActionTypes.CAR_UPDATE:
    return {payload: action.payload};
  case CarActionTypes.CAR_DELETE:
    return {loadingCars: true, payload: action.payload};
  case CarActionTypes.CAR_ERROR:
    return {loadingCars: false, payload: action.payload};
  default:
    return state;
  }
};

export default authReducer;
