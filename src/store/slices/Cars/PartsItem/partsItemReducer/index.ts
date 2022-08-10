
import {PartsItemActions, PartsItemActionTypes, PartsItemState} from '../partsItemActionCreators/partsItem.typings';

const initialState: PartsItemState = {
  loadingItem: false,
  partsItemList: null,
  partsItemSingle: null,
  partsItemChange: null,
  isItemChanged: false,
  errorItem: ''
};

export const partsItemReducer = (state = initialState, action: PartsItemActions): PartsItemState => {
  switch (action.type) {
  case PartsItemActionTypes.PARTS_ITEM_START:
    return {...state, loadingItem: true, errorItem: '', isItemChanged: false};
  case PartsItemActionTypes.PARTS_ITEM_ALL:
    return {...state, partsItemList: action.payload};
  case PartsItemActionTypes.PARTS_ITEM_SINGLE:
    return {...state, partsItemSingle: action.payload};
  case PartsItemActionTypes.PARTS_ITEM_CHANGES:
    return {...state, partsItemChange: action.payload, isItemChanged: true};
  case PartsItemActionTypes.PARTS_ITEM_FINISH:
    return {...state, loadingItem: false};
  case PartsItemActionTypes.PARTS_ITEM_ERROR:
    return {...state, loadingItem: false, errorItem: action.payload};
  default:
    return state;
  }
};
