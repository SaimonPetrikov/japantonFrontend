import {combineReducers} from 'redux';

import authReducer from './authReducer';
import carReducer from './carReducer';


export const rootReducer = combineReducers({
  auth: authReducer,
  car: carReducer
});

export type RootState = ReturnType<typeof rootReducer>
