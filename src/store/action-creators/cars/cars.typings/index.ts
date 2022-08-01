
export interface ICarProps {
  id: number,
  created_at: string,
  updated_at: string,
  manufacturer_id: number,
  model_id: number,
  body_id: number,
  engine_id: number,
  transmission_id: number,
  mileage: number,
  headlight: string,
  taillight: string,
  marriage: string,
  notes: string,
  notes_zibiz: string,
  images: string,
  videos: string,
  user_id: number,
  body_no: string,
  engine_no: string,
  in_the_way: number,
  retail: number,
  small: number,
  archive: number,
  color: null,
  optic: null,
  sticker_notes: string,
  manager_id: number,
  documents: string,
  provider_id: number,
  provider_engine_price: number
}

export interface CarResponse {
  message: string,
  car: ICarProps | ICarProps[] | boolean,
}

export interface CarState {
  payload?: CarResponse | string | null;
  carAll?: CarResponse | null
  loadingCars?: boolean;
}

export interface CarItem {
  id?: number,
  manufacturer_id?: number,
  model_id?: number,
  body_id?: number,
  engine_id?: number,
  transmission_id?: number,
  mileage?: number,
  headlight?: string,
  taillight?: string,
  marriage?: string,
  notes?: string,
  notes_zibiz?: string,
  images?: string,
  videos?: string,
  user_id?: number,
  body_no?: string,
  engine_no?: string,
  in_the_way?: number,
  retail?: number,
  small?: number,
  archive?: number,
  color?: null,
  optic?: null,
  sticker_notes?: string,
  manager_id?: number,
  documents?: string,
  provider_id?: number,
  provider_engine_price?: number
}

export type CarData = CarItem | number

export enum CarActionTypes {
  // eslint-disable-next-line no-unused-vars
  CAR = 'CAR',
  // eslint-disable-next-line no-unused-vars
  CAR_ALL = 'CAR_ALL',
  // eslint-disable-next-line no-unused-vars
  CAR_CREATE = 'CAR_CREATE',
  // eslint-disable-next-line no-unused-vars
  CAR_UPDATE = 'CAR_UPDATE',
  // eslint-disable-next-line no-unused-vars
  CAR_DELETE = 'CAR_DELETE',
  // eslint-disable-next-line no-unused-vars
  CAR_SINGLE = 'CAR_SINGLE',
  // eslint-disable-next-line no-unused-vars
  CAR_ERROR = 'CAR_ERROR'
}

interface CarAllAction {
  type: CarActionTypes.CAR_ALL;
  payload: CarResponse;
}

interface CarCreateAction {
  type: CarActionTypes.CAR_CREATE;
  payload: CarResponse;
}

interface CarUpdateAction {
  type: CarActionTypes.CAR_UPDATE;
  payload: CarResponse;
}

interface CarDeleteAction {
  type: CarActionTypes.CAR_DELETE;
  payload: CarResponse;
}

interface CarSingleAction {
  type: CarActionTypes.CAR_SINGLE;
  payload: CarResponse;
}

interface CarAction {
  type: CarActionTypes.CAR;
}

interface CarErrorAction {
  type: CarActionTypes.CAR_ERROR;
  payload: string;
}

// eslint-disable-next-line max-len
export type CarActions = CarAllAction | CarCreateAction | CarUpdateAction | CarDeleteAction | CarSingleAction | CarAction | CarErrorAction
