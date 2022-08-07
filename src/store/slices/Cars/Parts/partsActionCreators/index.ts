import {Dispatch} from 'redux';

import PartsService from '../../../../../services/PartsService';

import {PartsActions, PartsActionTypes, PartsData, PartsUpdateData} from './parts.typings';

export const partsAll = () => {
  return async (dispatch: Dispatch<PartsActions>) => {
    try {
      dispatch({type: PartsActionTypes.PARTS_START});
      const response = await PartsService.all();
      dispatch({type: PartsActionTypes.PARTS_ALL, payload: response.data});
      dispatch({type: PartsActionTypes.PARTS_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: PartsActionTypes.PARTS_ERROR,
        payload: `Ошибка при запросе всех запчастей: ${e}`
      });
    }
  };
};

export const partsCreate = (data: PartsData) => {
  return async (dispatch: Dispatch<PartsActions>) => {
    try {
      dispatch({type: PartsActionTypes.PARTS_START});
      const response = await PartsService.create(data);
      dispatch({type: PartsActionTypes.PARTS_SINGLE, payload: response.data});
      dispatch({type: PartsActionTypes.PARTS_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: PartsActionTypes.PARTS_ERROR,
        payload: `Ошибка при создании запчасти: ${e}`
      });
    }
  };
};

export const partsShow = (data: PartsData) => {
  return async (dispatch: Dispatch<PartsActions>) => {
    try {
      dispatch({type: PartsActionTypes.PARTS_START});
      const response = await PartsService.single(data);
      dispatch({type: PartsActionTypes.PARTS_SINGLE, payload: response.data});
      dispatch({type: PartsActionTypes.PARTS_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: PartsActionTypes.PARTS_ERROR,
        payload: `Ошибка при получении запчасти: ${e}`
      });
    }
  };
};

export const partsUpdate = (data: PartsUpdateData) => {
  return async (dispatch: Dispatch<PartsActions>) => {
    try {
      dispatch({type: PartsActionTypes.PARTS_START});
      const response = await PartsService.update(data);
      dispatch({type: PartsActionTypes.PARTS_CHANGES, payload: response.data});
      dispatch({type: PartsActionTypes.PARTS_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: PartsActionTypes.PARTS_ERROR,
        payload: `Ошибка при обновлении запчасти: ${e}`
      });
    }
  };
};

export const partsDelete = (data: PartsData) => {
  return async (dispatch: Dispatch<PartsActions>) => {
    try {
      dispatch({type: PartsActionTypes.PARTS_START});
      const response = await PartsService.delete(data);
      dispatch({type: PartsActionTypes.PARTS_CHANGES, payload: response.data});
      dispatch({type: PartsActionTypes.PARTS_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: PartsActionTypes.PARTS_ERROR,
        payload: `Ошибка при удалении запчасти: ${e}`
      });
    }
  };
};
