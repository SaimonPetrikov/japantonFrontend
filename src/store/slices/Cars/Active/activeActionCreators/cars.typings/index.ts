
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
  loading?: boolean;
  payload?: CarResponse | string | null;
  error?: string
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

export interface updateCar {
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
  sticker_notes: string,
  manager_id: number,
  documents: string,
  provider_id: number,
  provider_engine_price: number
}

export interface CarItemUpdate {
  id: number,
  updateData: updateCar
}

export type CarData = CarItem | number

export enum CarActionTypes {
  // eslint-disable-next-line no-unused-vars
  CAR_START = 'CAR_START',
  // eslint-disable-next-line no-unused-vars
  CAR_DATA = 'CAR_DATA',
  // eslint-disable-next-line no-unused-vars
  CAR_FINISH = 'CAR_FINISH',
  // eslint-disable-next-line no-unused-vars
  CAR_ERROR = 'CAR_ERROR'
}

interface CarStartAction {
  type: CarActionTypes.CAR_START;
}

interface CarDataAction {
  type: CarActionTypes.CAR_DATA;
  payload: CarResponse;
}

interface CarFinishAction {
  type: CarActionTypes.CAR_FINISH;
}

interface CarErrorAction {
  type: CarActionTypes.CAR_ERROR;
  payload: string;
}

// eslint-disable-next-line max-len
export type CarActions = CarDataAction | CarStartAction | CarErrorAction | CarFinishAction
