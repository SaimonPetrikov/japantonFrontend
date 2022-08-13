import {combineReducers} from 'redux';

import authReducer from '../slices/Auth/authReducer';
import {carReducer} from '../slices/Cars/Active/carReducer';
import {partsReducer} from '../slices/Cars/Parts/partsReducer';
import {partsItemReducer} from '../slices/Cars/PartsItem/partsItemReducer';
import {providersReducer} from '../slices/Cars/Providers/providersReducer';


export const rootReducer = combineReducers({
  auth: authReducer,
  car: carReducer,
  parts: partsReducer,
  partsItem: partsItemReducer,
  providers: providersReducer
});

export type RootState = ReturnType<typeof rootReducer>
