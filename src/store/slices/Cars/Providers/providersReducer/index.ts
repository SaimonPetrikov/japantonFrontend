import {ProvidersActions, ProvidersActionTypes, ProvidersState} from '../providersActionCreators/providers.typings';

const initialState: ProvidersState = {
  loadingProviders: false,
  providersList: null,
  providersSingle: null,
  providersChange: null,
  isProvidersChanged: false,
  errorProviders: ''
};

export const providersReducer = (state = initialState, action: ProvidersActions): ProvidersState => {
  switch (action.type) {
  case ProvidersActionTypes.PROVIDERS_START:
    return {...state, loadingProviders: true, errorProviders: '', isProvidersChanged: false};
  case ProvidersActionTypes.PROVIDERS_ALL:
    return {...state, providersList: action.payload};
  case ProvidersActionTypes.PROVIDERS_SINGLE:
    return {...state, providersSingle: action.payload};
  case ProvidersActionTypes.PROVIDERS_CHANGES:
    return {...state, providersChange: action.payload, isProvidersChanged: true};
  case ProvidersActionTypes.PROVIDERS_FINISH:
    return {...state, loadingProviders: false};
  case ProvidersActionTypes.PROVIDERS_ERROR:
    return {...state, loadingProviders: false, errorProviders: action.payload};
  default:
    return state;
  }
};
