import {Dispatch} from 'redux';

import CarService from '../../../services/CarService';

import {CarActions, CarActionTypes, CarData} from './cars.typings';

export const carsAll = () => {
  return async (dispatch: Dispatch<CarActions>) => {
    try {
      dispatch({type: CarActionTypes.CAR});
      const response = await CarService.all();
      dispatch({type: CarActionTypes.CAR_ALL, payload: response.data});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: CarActionTypes.CAR_ERROR,
        payload: `Ошибка при запросе машин: ${e}`
      });
    }
  };
};

export const carCreate = (data: CarData) => {
  return async (dispatch: Dispatch<CarActions>) => {
    try {
      dispatch({type: CarActionTypes.CAR});
      const responseCreate = await CarService.create(data);
      dispatch({type: CarActionTypes.CAR_CREATE, payload: responseCreate.data});
      console.log(responseCreate.data);
      const response = await CarService.all();
      dispatch({type: CarActionTypes.CAR_ALL, payload: response.data});
      console.log(response.data);
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
      dispatch({type: CarActionTypes.CAR});
      const response = await CarService.single(data);
      dispatch({type: CarActionTypes.CAR_SINGLE, payload: response.data});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: CarActionTypes.CAR_ERROR,
        payload: `Ошибка при получении машины: ${e}`
      });
    }
  };
};

export const carUpdate = (data: CarData) => {
  return async (dispatch: Dispatch<CarActions>) => {
    try {
      dispatch({type: CarActionTypes.CAR});
      const responseUpdate = await CarService.update(data);
      dispatch({type: CarActionTypes.CAR_UPDATE, payload: responseUpdate.data});
      console.log(responseUpdate.data);
      const response = await CarService.all();
      dispatch({type: CarActionTypes.CAR_ALL, payload: response.data});
      console.log(response.data);
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
      dispatch({type: CarActionTypes.CAR});
      const responseDelete = await CarService.delete(data);
      dispatch({type: CarActionTypes.CAR_DELETE, payload: responseDelete.data});
      console.log(responseDelete.data);
      const response = await CarService.all();
      dispatch({type: CarActionTypes.CAR_ALL, payload: response.data});
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: CarActionTypes.CAR_ERROR,
        payload: `Ошибка при удалении машины: ${e}`
      });
    }
  };
};
