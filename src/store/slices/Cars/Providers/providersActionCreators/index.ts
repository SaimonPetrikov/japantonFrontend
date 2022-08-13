import {Dispatch} from 'redux';

import ProvidersService from '../../../../../services/ProvidersServise';

import {ProvidersActions, ProvidersActionTypes, ProvidersData, ProvidersUpdateData} from './providers.typings';

export const providersAll = () => {
  return async (dispatch: Dispatch<ProvidersActions>) => {
    try {
      dispatch({type: ProvidersActionTypes.PROVIDERS_START});
      const response = await ProvidersService.all();
      dispatch({type: ProvidersActionTypes.PROVIDERS_ALL, payload: response.data});
      dispatch({type: ProvidersActionTypes.PROVIDERS_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: ProvidersActionTypes.PROVIDERS_ERROR,
        payload: `Ошибка при запросе всех запчастей: ${e}`
      });
    }
  };
};

export const providersCreate = (data: ProvidersData) => {
  return async (dispatch: Dispatch<ProvidersActions>) => {
    try {
      dispatch({type: ProvidersActionTypes.PROVIDERS_START});
      const response = await ProvidersService.create(data);
      dispatch({type: ProvidersActionTypes.PROVIDERS_SINGLE, payload: response.data});
      dispatch({type: ProvidersActionTypes.PROVIDERS_CHANGES});
      dispatch({type: ProvidersActionTypes.PROVIDERS_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: ProvidersActionTypes.PROVIDERS_ERROR,
        payload: `Ошибка при создании запчасти: ${e}`
      });
    }
  };
};

export const providersShow = (data: ProvidersData) => {
  return async (dispatch: Dispatch<ProvidersActions>) => {
    try {
      dispatch({type: ProvidersActionTypes.PROVIDERS_START});
      const response = await ProvidersService.single(data);
      dispatch({type: ProvidersActionTypes.PROVIDERS_SINGLE, payload: response.data});
      dispatch({type: ProvidersActionTypes.PROVIDERS_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: ProvidersActionTypes.PROVIDERS_ERROR,
        payload: `Ошибка при получении запчасти: ${e}`
      });
    }
  };
};

export const providersUpdate = (data: ProvidersUpdateData) => {
  return async (dispatch: Dispatch<ProvidersActions>) => {
    try {
      dispatch({type: ProvidersActionTypes.PROVIDERS_START});
      const response = await ProvidersService.update(data);
      dispatch({type: ProvidersActionTypes.PROVIDERS_CHANGES, payload: response.data});
      dispatch({type: ProvidersActionTypes.PROVIDERS_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: ProvidersActionTypes.PROVIDERS_ERROR,
        payload: `Ошибка при обновлении запчасти: ${e}`
      });
    }
  };
};

export const providersDelete = (data: ProvidersData) => {
  return async (dispatch: Dispatch<ProvidersActions>) => {
    try {
      dispatch({type: ProvidersActionTypes.PROVIDERS_START});
      const response = await ProvidersService.delete(data);
      dispatch({type: ProvidersActionTypes.PROVIDERS_CHANGES, payload: response.data});
      dispatch({type: ProvidersActionTypes.PROVIDERS_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: ProvidersActionTypes.PROVIDERS_ERROR,
        payload: `Ошибка при удалении запчасти: ${e}`
      });
    }
  };
};
