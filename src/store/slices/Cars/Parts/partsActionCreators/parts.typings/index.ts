
export interface IPartsProps {
  id: number,
  created_at: string,
  updated_at: string,
  name_ru: string,
  name_en: string,
  sticker_fields: string,
  sort: number
}

export interface PartsAllResponse {
  message: string,
  part: IPartsProps[]
}

export interface PartsSingleResponse {
  message: string,
  part: IPartsProps
}

export interface PartsChangedResponse {
  message: string,
  part: boolean
}

export interface PartsState {
  loading?: boolean;
  partsList?: PartsAllResponse | null;
  partsSingle?: PartsSingleResponse | null;
  partsChange?: PartsChangedResponse | null;
  isChanged?: boolean;
  error?: string
}

export interface PartsHandle {
  name_ru: string,
  name_en: string,
  sticker_fields: string,
  sort: number
}

export interface PartsUpdateData {
  id: number,
  updateData: PartsHandle
}

export type PartsData = PartsHandle | number

export enum PartsActionTypes {
  // eslint-disable-next-line no-unused-vars
  PARTS_START = 'PARTS_START',
  // eslint-disable-next-line no-unused-vars
  PARTS_ALL = 'PARTS_ALL',
  // eslint-disable-next-line no-unused-vars
  PARTS_SINGLE = 'PARTS_SINGLE',
  // eslint-disable-next-line no-unused-vars
  PARTS_CHANGES = 'PARTS_CHANGES',
  // eslint-disable-next-line no-unused-vars
  PARTS_FINISH = 'PARTS_FINISH',
  // eslint-disable-next-line no-unused-vars
  PARTS_ERROR = 'PARTS_ERROR'
}

interface PartsStartAction {
  type: PartsActionTypes.PARTS_START;
}

interface PartsAllAction {
  type: PartsActionTypes.PARTS_ALL;
  payload: PartsAllResponse;
}

interface PartsSingleAction {
  type: PartsActionTypes.PARTS_SINGLE;
  payload: PartsSingleResponse;
}

interface PartsChangesAction {
  type: PartsActionTypes.PARTS_CHANGES;
  payload: PartsChangedResponse;
}

interface PartsFinishAction {
  type:PartsActionTypes.PARTS_FINISH;
}

interface PartsErrorAction {
  type: PartsActionTypes.PARTS_ERROR;
  payload: string;
}

// eslint-disable-next-line max-len
export type PartsActions = PartsAllAction | PartsStartAction | PartsErrorAction | PartsFinishAction | PartsSingleAction | PartsChangesAction
