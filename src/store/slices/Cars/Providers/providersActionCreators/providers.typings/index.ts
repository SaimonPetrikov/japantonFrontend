
export interface IProvidersProps {
  id: number,
  created_at: string,
  updated_at: string,
  name: string,
  email: string,
  percent: number
}

export interface ProvidersAllResponse {
  message: string,
  provider: IProvidersProps[]
}

export interface ProvidersSingleResponse {
  message: string,
  provider: IProvidersProps
}

export interface ProvidersChangedResponse {
  message: string,
  provider: boolean
}

export interface ProvidersState {
  loadingProviders?: boolean;
  providersList?: ProvidersAllResponse | null;
  providersSingle?: ProvidersSingleResponse | null;
  providersChange?: ProvidersChangedResponse | null;
  isProvidersChanged?: boolean;
  errorProviders?: string;
}

export interface ProvidersHandle {
  name: string,
  email: string,
  percent: number
}

export interface ProvidersUpdateData {
  id: number,
  updateData: ProvidersHandle
}

export type ProvidersData = ProvidersHandle | number

export enum ProvidersActionTypes {
  // eslint-disable-next-line no-unused-vars
  PROVIDERS_START = 'PROVIDERS_START',
  // eslint-disable-next-line no-unused-vars
  PROVIDERS_ALL = 'PROVIDERS_ALL',
  // eslint-disable-next-line no-unused-vars
  PROVIDERS_SINGLE = 'PROVIDERS_SINGLE',
  // eslint-disable-next-line no-unused-vars
  PROVIDERS_CHANGES = 'PROVIDERS_CHANGES',
  // eslint-disable-next-line no-unused-vars
  PROVIDERS_FINISH = 'PROVIDERS_FINISH',
  // eslint-disable-next-line no-unused-vars
  PROVIDERS_ERROR = 'PROVIDERS_ERROR'
}

interface ProvidersStartAction {
  type: ProvidersActionTypes.PROVIDERS_START;
}

interface ProvidersAllAction {
  type: ProvidersActionTypes.PROVIDERS_ALL;
  payload: ProvidersAllResponse;
}

interface ProvidersSingleAction {
  type: ProvidersActionTypes.PROVIDERS_SINGLE;
  payload: ProvidersSingleResponse;
}

interface ProvidersChangesAction {
  type: ProvidersActionTypes.PROVIDERS_CHANGES;
  payload?: ProvidersChangedResponse;
}

interface ProvidersFinishAction {
  type:ProvidersActionTypes.PROVIDERS_FINISH;
}

interface ProvidersErrorAction {
  type: ProvidersActionTypes.PROVIDERS_ERROR;
  payload: string;
}

// eslint-disable-next-line max-len
export type ProvidersActions = ProvidersStartAction | ProvidersAllAction | ProvidersSingleAction | ProvidersChangesAction | ProvidersFinishAction | ProvidersErrorAction
