import {combineReducers} from 'redux';

import authReducer from '../slices/Auth/authReducer';
import {carReducer} from '../slices/Cars/Active/carReducer';
import {partsReducer} from '../slices/Cars/Parts/partsReducer';
import {partsItemReducer} from '../slices/Cars/PartsItem/partsItemReducer';


export const rootReducer = combineReducers({
  auth: authReducer,
  car: carReducer,
  parts: partsReducer,
  partsItem: partsItemReducer
});

export type RootState = ReturnType<typeof rootReducer>
