import {Dispatch} from 'redux';

import PartsItemService from '../../../../../services/PartsItemService';

import {PartsItemActions, PartsItemActionTypes, PartsItemData, PartsItemUpdateData} from './partsItem.typings';

export const partsItemAll = () => {
  return async (dispatch: Dispatch<PartsItemActions>) => {
    try {
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_START});
      const response = await PartsItemService.all();
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_ALL, payload: response.data});
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: PartsItemActionTypes.PARTS_ITEM_ERROR,
        payload: `Ошибка при запросе всех запчастей: ${e}`
      });
    }
  };
};

export const partsItemCreate = (data: PartsItemData) => {
  return async (dispatch: Dispatch<PartsItemActions>) => {
    try {
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_START});
      const response = await PartsItemService.create(data);
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_SINGLE, payload: response.data});
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: PartsItemActionTypes.PARTS_ITEM_ERROR,
        payload: `Ошибка при создании запчасти: ${e}`
      });
    }
  };
};

export const partsItemShow = (data: PartsItemData) => {
  return async (dispatch: Dispatch<PartsItemActions>) => {
    try {
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_START});
      const response = await PartsItemService.single(data);
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_SINGLE, payload: response.data});
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: PartsItemActionTypes.PARTS_ITEM_ERROR,
        payload: `Ошибка при получении запчасти: ${e}`
      });
    }
  };
};

export const partsItemUpdate = (data: PartsItemUpdateData) => {
  return async (dispatch: Dispatch<PartsItemActions>) => {
    try {
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_START});
      const response = await PartsItemService.update(data);
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_CHANGES, payload: response.data});
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: PartsItemActionTypes.PARTS_ITEM_ERROR,
        payload: `Ошибка при обновлении запчасти: ${e}`
      });
    }
  };
};

export const partsItemDelete = (data: PartsItemData) => {
  return async (dispatch: Dispatch<PartsItemActions>) => {
    try {
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_START});
      const response = await PartsItemService.delete(data);
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_CHANGES, payload: response.data});
      dispatch({type: PartsItemActionTypes.PARTS_ITEM_FINISH});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: PartsItemActionTypes.PARTS_ITEM_ERROR,
        payload: `Ошибка при удалении запчасти: ${e}`
      });
    }
  };
};
