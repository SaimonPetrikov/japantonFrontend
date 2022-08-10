
export interface IPartsItemProps {
  id: number,
  parent_id: number,
  created_at: string,
  updated_at: string,
  name_ru: string,
  name_en: string,
  name_jp: string,
  sort: number,
  type: number,
  weight: number,
  price: number,
  car_type: number,
  options: string,
  code: string,
}

export interface PartsItemAllResponse {
  message: string,
  part: IPartsItemProps[]
}

export interface PartsItemSingleResponse {
  message: string,
  part: IPartsItemProps
}

export interface PartsItemChangedResponse {
  message: string,
  part: boolean
}

export interface PartsItemState {
  loadingItem?: boolean;
  partsItemList?: PartsItemAllResponse | null;
  partsItemSingle?: PartsItemSingleResponse | null;
  partsItemChange?: PartsItemChangedResponse | null;
  isItemChanged?: boolean;
  errorItem?: string;
}

export interface PartsItemHandle {
  name_ru: string,
  name_en: string,
  sticker_fields: string,
  sort: number
}

export interface PartsItemUpdateData {
  id: number,
  updateData: PartsItemHandle
}

export type PartsItemData = PartsItemHandle | number

export enum PartsItemActionTypes {
  // eslint-disable-next-line no-unused-vars
  PARTS_ITEM_START = 'PARTS_ITEM_START',
  // eslint-disable-next-line no-unused-vars
  PARTS_ITEM_ALL = 'PARTS_ITEM_ALL',
  // eslint-disable-next-line no-unused-vars
  PARTS_ITEM_SINGLE = 'PARTS_ITEM_SINGLE',
  // eslint-disable-next-line no-unused-vars
  PARTS_ITEM_CHANGES = 'PARTS_ITEM_CHANGES',
  // eslint-disable-next-line no-unused-vars
  PARTS_ITEM_FINISH = 'PARTS_ITEM_FINISH',
  // eslint-disable-next-line no-unused-vars
  PARTS_ITEM_ERROR = 'PARTS_ITEM_ERROR'
}

interface PartsItemStartAction {
  type: PartsItemActionTypes.PARTS_ITEM_START;
}

interface PartsItemAllAction {
  type: PartsItemActionTypes.PARTS_ITEM_ALL;
  payload: PartsItemAllResponse;
}

interface PartsItemSingleAction {
  type: PartsItemActionTypes.PARTS_ITEM_SINGLE;
  payload: PartsItemSingleResponse;
}

interface PartsItemChangesAction {
  type: PartsItemActionTypes.PARTS_ITEM_CHANGES;
  payload: PartsItemChangedResponse;
}

interface PartsItemFinishAction {
  type:PartsItemActionTypes.PARTS_ITEM_FINISH;
}

interface PartsItemErrorAction {
  type: PartsItemActionTypes.PARTS_ITEM_ERROR;
  payload: string;
}

// eslint-disable-next-line max-len
export type PartsItemActions = PartsItemAllAction | PartsItemStartAction | PartsItemErrorAction | PartsItemFinishAction | PartsItemSingleAction | PartsItemChangesAction
