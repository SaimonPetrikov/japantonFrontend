import {combineReducers} from 'redux';

import authReducer from '../slices/Auth/authReducer';
import {carReducer} from '../slices/Cars/Active/carReducer';
import {partsReducer} from '../slices/Cars/Parts/partsReducer';


export const rootReducer = combineReducers({
  auth: authReducer,
  car: carReducer,
  parts: partsReducer
});

export type RootState = ReturnType<typeof rootReducer>
