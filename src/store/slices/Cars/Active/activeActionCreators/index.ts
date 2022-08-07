import {Dispatch} from 'redux';

import CarService from '../../../../../services/CarService';

import {CarActions, CarActionTypes, CarData, CarItemUpdate} from './cars.typings';

export const carsAll = () => {
  return async (dispatch: Dispatch<CarActions>) => {
    try {
      dispatch({type: CarActionTypes.CAR_START});
      const response = await CarService.all();
      dispatch({type: CarActionTypes.CAR_DATA, payload: response.data});
      console.log(response.data);
      dispatch({type: CarActionTypes.CAR_FINISH});
    } catch (e) {
      dispatch({
        type: CarActionTypes.CAR_ERROR,
        payload: `Ошибка при запросе всех машин: ${e}`
      });
    }
  };
};

export const carCreate = (data: CarData) => {
  return async (dispatch: Dispatch<CarActions>) => {
    try {
      dispatch({type: CarActionTypes.CAR_START});
      const responseCreate = await CarService.create(data);
      console.log(responseCreate.data);
      const responseAll = await CarService.all();
      console.log(responseAll.data);
      dispatch({type: CarActionTypes.CAR_DATA, payload: responseAll.data});
      dispatch({type: CarActionTypes.CAR_FINISH});
    } catch (e) {
      dispatch({
        type: CarActionTypes.CAR_ERROR,
        payload: `Ошибка при создании машины: ${e}`
      });
    }
  };
};

export const carSingle = (data: CarData) => {
  return async (dispatch: Dispatch<CarActions>) => {
    try {
      dispatch({type: CarActionTypes.CAR_START});
      const response = await CarService.single(data);
      dispatch({type: CarActionTypes.CAR_DATA, payload: response.data});
      console.log(response.data);
      dispatch({type: CarActionTypes.CAR_FINISH});
    } catch (e) {
      dispatch({
        type: CarActionTypes.CAR_ERROR,
        payload: `Ошибка при получении машины: ${e}`
      });
    }
  };
};

export const carUpdate = (data: CarItemUpdate) => {
  return async (dispatch: Dispatch<CarActions>) => {
    try {
      dispatch({type: CarActionTypes.CAR_START});
      const responseUpdate = await CarService.update(data);
      console.log(responseUpdate.data);
      const responseSingle = await CarService.single(data.id);
      console.log(responseSingle.data);
      dispatch({type: CarActionTypes.CAR_DATA, payload: responseSingle.data});
      dispatch({type: CarActionTypes.CAR_FINISH});
    } catch (e) {
      dispatch({
        type: CarActionTypes.CAR_ERROR,
        payload: `Ошибка при обновлении машины: ${e}`
      });
    }
  };
};

export const carDelete = (data: CarData) => {
  return async (dispatch: Dispatch<CarActions>) => {
    try {
      dispatch({type: CarActionTypes.CAR_START});
      const responseDelete = await CarService.delete(data);
      console.log(responseDelete.data);
      const responseAll = await CarService.all();
      dispatch({type: CarActionTypes.CAR_DATA, payload: responseAll.data});
      console.log(responseAll.data);
      dispatch({type: CarActionTypes.CAR_FINISH});
    } catch (e) {
      dispatch({
        type: CarActionTypes.CAR_ERROR,
        payload: `Ошибка при удалении машины: ${e}`
      });
    }
  };
};
